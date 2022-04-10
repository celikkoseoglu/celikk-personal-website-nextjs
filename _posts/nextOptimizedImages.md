---
title:
  page: "CK - Next-Optimized-Images"
  post: "Using Next-Optimized-Images to Generate WebP Images Automatically"
description: "Generate WebP and other optimised images at build time to reduce the download size of your website."
date: "2022-04-10"
readTime: "10 min"
cover:
  image: "/images/blogPost/nextOptimizedImages/meta.png"
  alt: "-------------------------------------------------"
author:
  name: Celik Koseoglu
  picture: "/images/blog/PP.jpg"
---

# Using Next-Optimized-Images to Generate WebP Images Automatically

### Generate WebP and other optimised images at build time to reduce the download size of your website.

###### April 10, 2022 - 10 min read

I aim to provide high quality content in my blog. Hosting high quality images is a part of the experience. One click
into a media heavy blog post result in 10MB of traffic. 10MB per session can add up quite quickly if you get a spike
of traffic (via [a tweet](https://twitter.com/joshwcomeau/status/1354119661516943360)). So, I've decided to search
for ways to reduce the download size of my website.

With more than 90% of the 10MB download being images, I wanted to figure out a way of optimising these images without
sacrificing quality. I started looking at image formats, compression, resizing etc and I've found the WebP image
format to be the most interesting option.

In 2010, Google has released a new image format called WebP. According to
[the Wikipedia page](https://en.wikipedia.org/wiki/WebP), this format aims to be replacement for commonly used image
formats such as PNG and JPG. My initial investigation results showed I can get a reduction of up to 83% (from 385KB to 67KB)
for the PNG below with no sacrifice in quality.

 <MediaCarousel folder="nextOptimizedImages" images="viralTweet.png"/>
 
According to CanIUse, [WebP is supported on all major browsers today](https://caniuse.com/webp). Let's get to work.

#### 1) What is the strategy?

The end goal is to serve users WebP images if the browser supports it. Two objectives:

1. Provide fallback if the browser doesn't support WebP. Have to keep Internet Explorer happy.
2. Convert and serve WebP format of all images in addition to JPG and PNG.

First objective is quick to achieve. [This](https://stackoverflow.com/questions/66143078/how-to-use-fallback-on-picture-tag-safari-webp)
seems to work for Safari and Internet Explorer. There are other alternatives such as [this](https://stackoverflow.com/questions/5573096/detecting-webp-support) solution.

Second goal requires me to convert all of my existing images into WebP format. Ideally, I'd like to have a drop-in solution
that converts all of my existing images at build time. As expected, there is [an npm package](https://www.npmjs.com/package/next-optimized-images)
which helps me with that.

#### 2) What is Next-Optimized-Images?

It's a drop-in tool that automatically converts, resizes and optimises your images at build time for your NextJS
project. It does not increase your bundle size because it only runs during build time.

#### 3) How to Set Up React Optimised Images

Add the following lines to your devDependencies in your `package.json` file and do a `yarn/npm install`.

<Code language="javascript">
},
"devDependencies": {
  .
  .
  "next-compose-plugins": "2.2.1",
  "next-optimized-images": "2.6.2",
  "webp-loader": "0.6.0"
}</Code>

Modify your `next.config.js` file to look like the following: (this wasn't enough for me, I'll explain in the next section):

<Code language="javascript">
// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(\[
  \[optimizedImages, {
    /\* config for next-optimized-images \*/
  }],
  // your other plugins here
]);
</Code>

At this point, I'd recommend you to start your development server and see if this works. After you see is running fine,
it's time to start utilising `next-optimised-images`. To start using automatic conversion, just replace your regular
image imports, similar to the following example:

<Code language="javascript">
\<!-- Replace the following with -->
\<img src="/path/to/image.png"/>
&nbsp;
\<!-- This one: -->
\<img src={require("../../public/path/to/image.png?webp")}/>
</Code>

This should be enough for you to see a WebP version of your PNG if you're running a WebP supported browser. However,
this didn't work for me, which takes us to the next section.

#### 4) Wait, it didn't work!

Next-Optimized-Images modifies your webpack config and this caused my website to not be able to load file
types other than the 5 specified image types in the `next-optimized-images` documentation (`Default: ['jpeg', 'png', 'svg', 'webp', 'gif']`).
To solve this issue, I had to modify my `next.config.js` even further to look like this:

<Code language="javascript">
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        // config for next-optimized-images
        handleImages: ["png", "webp"],
        removeOriginalExtension: true,
      },
    ],
    // your other plugins here
  ],
  {
    images: {
      disableStaticImages: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(xml|pdf|ico|jpg|mp4|svg|txt|webmanifest)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
          },
        },
      });
      return config;
    },
  }
);
</Code>

Let's walk you through the changes in this config.

- `handleImages` list tells only PNG and WebP images to be optimised. I've done this because my
  JPG files got larger after WebP conversion.
- `removeOriginalExtension` will remove the `.png` extension in your `fileName.png` and replaces it to be `fileName.webp`.
- `images/disableStaticImages` will enable NextJS to work properly with `next-optimised-images` plugin. Without this, I
  was getting error messages.
- Having disabled Next's static image import capabilities, we now have to tell webpack how to treat other file types we
  have in our public directory. `file-loader` will take care of copying and renaming all your files with a hash.

With these changes, I was able to make everything work as expected!

#### 5) What if the browser doesn't support WebP?

In this case, you can use the `<picture>` tag of HTML. This allows you to list of image formats that the browser
can use and the browser will choose the best one that fits the use case.

<Code language="javascript">
\<!-- Replace the following with -->
\<img src="/path/to/image.png"/>

\<!-- This one: -->
\<picture>
  \<source srcSet={require("../../public/path/to/image.png?webp")} type="image/webp" />
  \<img src={"/path/to/image.png"} />
\</picture>
</Code>

#### 6) Final results and what's next?

I've achieved an overall download reduction of 85% (from 10.6MB to 1.5MB) on my blog post about porting from Create-React-App
to NexJS. This is a significant win with minimal effort on my side. Here's the side-by-side comparison on both sides.

 <MediaCarousel folder="nextOptimizedImages" images="portingCRAToNextJSBlogBefore.png,portingCRAToNextJSBlogAfter.png"/>

Up next, I'm going to take a look into why Safari is still downloading PNG images even though the latest Safari version
supports WebP images. You can see that download sizes for Safari got larger on my website. It doesn't only apply to my website. Other people have experienced this too.
Someone [already asked a stackoverflow question](https://stackoverflow.com/questions/70363037/safari-downloads-fallback-image)
about this. It's just [one more weird issue that comes with Safari](https://github.com/celikkoseoglu/celikk-personal-website-nextjs/commit/4d12bb7df11bf19faa8419044369300346be4739)
I guess 🤷.

 <MediaCarousel folder="nextOptimizedImages" images="safariDownloadingBothFormats.png"/>

Anyway, the moral of the story is:

#### Optimization is fun. Every MB of bandwidth you save helps save energy!


