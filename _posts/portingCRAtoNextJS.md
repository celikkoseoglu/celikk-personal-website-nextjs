---
title:
  page: "CK - CRA to NextJS"
  post: "Porting CRA to NextJS"
description: "I've ported my Create-React-App based personal website to NextJS. I'll explain why I choose NextJS and talk about what I had to do to make it possible."
date: "2022-01-21"
readTime: "20 min"
cover:
  image: "/images/blogPost/airpodsPro/case3.jpg"
  alt: "AirPods Pro and Charging Case close up"
author:
  name: Celik Koseoglu
  picture: "/images/meta/blog.png"
---

# Porting This Website From Create-React-App to NextJS

### Why NextJS you ask? Let me explain why and talk about what it took for me to get there.

###### January 22, 2022 - 20 min read

I've had a personal website for years. For me, my personal website was just an excuse for me to learn the latest front-end technologies. In 2019, I've decided to learn this React thing everyone was talking about and the easiest way to get started was Create-React-App. Yes, it was simple, but it came with limitations (no metatags, no SSR, no built in image optimisation). I got around those limitations by implementing features on my own, but the cost of getting around those limitations started outweighing the benefits of CRA as my website kept growing.

Why did I choose NextJS? Because it already came with the workarounds that I built into CRA. Static rendering, meta tags, lazy loading, polyfill (internet explorer support) and automatic deployments via Vercel.

I could have used Gatsby, in fact front-end wizard my friend [Sam-Larsen Disney](https://sld.codes) has recommended me to use Gatsby for my use-case. I've looked into it, and I've realised the setup process looked slightly more complicated. I had to dive into GraphQL and manage deployments on my own. NextJS already came with static rendering, so I didn't spend much time looking into Gatsby. Porting CRA into a NextJS app looked easier. You just copy and paste your component code and sass files, and it just works (kind of).

#### 1) Server Side Rendering

The biggest benefit NextJS provides for my website is static site generation combined with SSR. Static generation allows my website to be indexed by search engines, and SSR allows my website to have meta previews when links are shared on social media platforms and messaging apps.

Previously in my CRA website, I achieved this using [react-snap](https://github.com/stereobooster/react-snap). While the `react-snap` solution worked fine, it wasn't the cleanest solution. I had to configure `react-snap` myself and the build time of my website would increase linearly with every new blog post I've added in. `react-snap` generated static previews on my laptop before a Firebase deployment. While the `react-snap` solution worked, I had to rely on [react-helmet](https://github.com/nfl/react-helmet) and custom code ([MetaDecorator](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/components/Util/MetaDecorator.jsx). NextJS comes with a [similar solution out of the box](https://nextjs.org/docs/api-reference/next/head) and I don't have to configure `react-snap`. One less dependency to manage, 10 lines less code to worry about and a more streamlined build process. Remember, the best code is the one that you don't write. 

I'd also like to add, it's not about the extra 10 lines of code. 10 lines of code is practically nothing. Technically, it's one less "WTF how did this work?" moment when you come back to this project after a break. If you've ever taken a break from a project and came back afterwards, you already know what I mean.

#### 2) Goodbye React-Router

[React-Router](https://v5.reactrouter.com/web/guides/quick-start) with CRA allows you to define which react component your site will display when the user navigates to [/home or /contact or /blog pages](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/index.js#L16-L32). At first it's fine, but when you start optimising your website for speed and [implement lazy loading](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/index.js#L23-L29), it gets confusing very quickly. Plus, react router requires you to implement things like [resetting the scroll position](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/utils/PageNavigationListener.utils.jsx). Let's say you were on the home page, scrolled down and then clicked the blog link on the navbar. When navigating onto the blog page, react-router will retain the scroll position from the previous page so the users will the the bottom of the blog page. If you want CRA to do this properly, you need to implement it yourself. [This](https://www.youtube.com/watch?v=09jmpIvyDKY) is a YouTube video explaining this issue. There is a chance that I might have misunderstood how react-router should be used, but I wouldn't even be confused about this if react-router wasn't there afterall.

NextJS comes with something called [API routes](https://nextjs.org/docs/api-routes/introduction). You just create a folder structure for your website and NextJS automatically lazy loads all routes. I don't need to worry about resetting scroll position or managing routes manually anymore. NextJS takes care of it all. Again, the best code is the one you don't write.

#### 3) Adding Meta tags to Blog Posts

What you're seeing in this page is a styled version of a markdown file. My blog post markdown files also contain meta information. When shared on social media, this enables me to show a thumbnail image and a description. I previously explained how this works on a [YouTube video](https://www.youtube.com/watch?v=ZutMjfIqj6M). Here is the structure I used in my CRA website:

```
<BlogMetaDecorator folder="throttlingMacBook" image="leftFanBottomRight.jpg" imageAlt="MacBook Pro 16 Left Fan with some dust" description="Reviews said this laptop had better thermals compared to the previous generation. Mine had great thermals too, up until today." title="CK - Throttling MacBook Pro 16" />

The rest of the markdown file...
```

With BlogMetaDecorator, my blog posts can display cards when shared on social media. Here are some examples generated by [metapreview.app](https://metapreview.app/):

MediaCarousel here showing social media cards on a blog meta decorator.

BlogMetaDecorator is completely custom code that I wrote so I can provide meta information in the same file as the blog post itself. This solution worked, and I was planning to use the same structure in NextJS but I stumbled upon `gray-matter` when looking at the [NextJS blog starter project](https://github.com/vercel/next.js/tree/canary/examples/blog-starter). With a library called [gray-matter](https://www.npmjs.com/package/gray-matter), you are able to achieve the same thing and more in a way more readable format compared to my BlogMetaDecorator. Here is what the `gray-matter` version looks like:

```
---
title:
  page: "CK - Throttling MacBook Pro 16"
  post: "The Curious Case of a Throttling 16\" MacBook Pro"
description: "Reviews said this laptop had better thermals compared to the previous generation. Mine had great thermals too, up until today."
date: "2020-04-13"
readTime: "5 min"
cover:
  image: "/images/blogPost/throttlingMacBook/leftFanBottomRight.jpg"
  alt: "MacBook Pro 16 Left Fan with some dust"
author:
  name: Celik Koseoglu
  picture: "/images/blog/PP.jpg"
---
```

With `gray-matter`, I don't have to worry about BlogMetaDecorator anymore. Even more code I can delete. Yay!

I'd also like to mention, Vercel has created a lot of other [starter templates](https://github.com/vercel/next.js/tree/canary/examples). Maybe these will give you some ideas with yout NextJS project.

#### 4) Rendering the blog page

[NextJS blog starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) came with sample code that allows you to retrieve blog titles and other metadata directly from a folder of markdown files. The `gray-matter` library that I talked about in the previous section helps with that. So with NextJS's [dynamic API routes](https://nextjs.org/docs/routing/dynamic-routes), I can add a new blog post to my website by just adding a single markdown file. No need to modify any other file to say I've added a new post.

Previously, I had a separate file called [blog.json](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/data/blog.json) which stored a list of blog posts (with titles, subtitles, dates read times and the markdown file name). When I wanted to add a blog post, I had to edit the [blog.json](https://github.com/celikkoseoglu/celikk-personal-website/blob/master/src/data/blog.json) file and add the markdown file separately into [this folder](https://github.com/celikkoseoglu/celikk-personal-website/tree/master/src/blog). With the new approach, I only add the markdown file under the [_posts](https://github.com/celikkoseoglu/celikk-personal-website-nextjs/tree/master/_posts) directory and Vercel deployments take care of the rest. One less file to worry about, one less point of failure.

#### 5) Dependencies, Cache Config and Overall Less Maintenance Requirement

For this one, I've asked 5 of my colleagues (3 java backend engineers, 1 react front-end engineer, 1 android engineer) to tell me if they can notice any difference between the CRA and NextJS versions of my website without using inspector tools. None of them were able to tell a difference.

This is the [package.json for CRA](https://github.com/celikkoseoglu/celikk-personal-website/blob/4a56eb5b91a54671e8d22b43b113e84f086dd048/package.json) and this is the [package.json file for the NextJS website](https://github.com/celikkoseoglu/celikk-personal-website-nextjs/blob/30a90011bc1d46b0f99d4e864012fea41f77a131/package.json) at the time of writing this blog post. As you can see, the NextJS version is smaller (34 vs 57 lines). Overall less dependency management and the users can't tell a difference. Plus, NextJS comes with Internet Explorer polyfills out of the box. You don't need to configure anything manually.

Cache policy is managed by Vercel so you don't have to store a Firebase cache policy file. No need for `react-snap` because NextJS does static rendering by default. Internet Explorer polyfill comes out of the box. All of these things combined means that you'll spend less time worrying about upgrading or configuring dependencies.

#### 6) Hosting

Hosting a NextJS website is very easy if you're using Vercel. You're probably going to say, Firebase is just as easy, but no. You create a NextJS app, put it on GitHub and give Vercel the branch name. Every time you push to that branch, Vercel does a deployment. [No more manual deployments!](https://vercel.com/docs/concepts/git/vercel-for-github) (You can probably configure automatic deployments on Firebase too but again, that's a manual process. Vercel just does it out of the box.)

#### 7) WIP - Bundle Size (Total download to show the site)

Vercel doesn't apply gzip or brotli compressions on the public folder whereas Firebase does. Vercel provides other nice benefits like Next/Image so overall the total download size is smaller. Here is a side by side comparison of how many KBs the same page takes to load on Vercel vs CRA. Please keep in mind, I'm not even using the Next/Image component in here. NextJS will pull even further ahead if that was the case.

```
before after comparison of my 
```

#### 8) WIP - Performance and Bundle Size

I haven't noticed an improvement on the home page of my website, but the blog is a different story. Because NextJS can do static rendering, blog posts load faster on the NextJS site. There is a function called `getStaticPaths` that pre-fetches the blog post and creates a static render of the page. This means, no more client side rendering of the blog post. When the user clicks onto the blog post, the markdown file is already compiled into HTML. Here is a before/after comparison

```
```

This seems like a fair comparison because in both cases, I'm hosting the production build of my website. On one side, I have the CRA production build running using `firebase serve`, on the other side, I have the NextJS production running using `next start`. To make sure this is the case, I've also run the same the same test on hosted websites. On one side, my CRA website hosted on Firebase, one the other side NextJS hosted on Vercel. Results are clear.

```
```

#### 9) WIP - What's Next?

NextJS comes with several other handy tools. I haven't discovered all of them yet but the next thing for me is to use Next/Image component. Apparently, this automatically optimised images during build time. My initial investigation yielded positive results. Here is a before/after comparison for my AboutMe section profile picture.

`before after comparison of Next/Image on profile picture in the about me section`

First of all, Next/Image seems like it automatically handles webp conversion. No more manual webp generation. Secondly, it auto-resizes the image somehow to reduce the size. I haven't investigated how this component works yet, but I think I'll be making a YouTube video about it soon.

Long story short, I'm sure I'll discover a lot of benefits of NextJS as I progress with this project. There is a new UI framework every 3-4 years though. I wonder what will replace NextJS 🤷
