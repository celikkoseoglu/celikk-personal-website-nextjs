---
title:
  page: "CK - Future of Software Engineering"
  post: "Predictions for the Future of Software Engineering"
description: "There's a lot of hype going on around LLM usage for software engineering. In this post, I address the current situation."
date: "2026-02-13"
readTime: "15 min"
cover:
  image: "/images/blogPost/futureOfSoftwareEngineering/meta.jpg"
  alt: "-------------------------------------------------"
author:
  name: Celik Koseoglu
  picture: "/images/blog/PP.jpg"
---

# Predictions for the Future of Software Engineering

### The hype and the reality of LLMs today

###### February 13, 2026 - 15 min read

#### A brief history of the hiring craze

The year was 2020, we were in lock-down and everybody stayed home. I was working in Prime Video at the time and it is no secret traffic was increasing. People were consuming more media instead of going outside. Tech companies had to scale, and perhaps scale too fast.

All companies were hiring anybody they could to stay ahead. Borrowing was cheap, interest rates were at all time low. Eventually all tech companies collectively joined the FOMO and over-hired. You didn't even need a software engineering background to be hired as a software engineer in 2021/2.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="hiringIn2020To2026.png"/>

It was so wild that salaries were increasing rapidly as well. Promotions were happening faster than ever, recruiters were calling on the phone at least once every week. The count of job offers I've received in 2021/2 is 4x the number of offers I've received in my 8+ year career.

Fast forward to 2023, the economy started showing signs of breaking. As interest rates increased, profits were down for most companies. During this time, companies started realizing the gold-rush software engineers they hired didn't actually want to be software engineers. They only wanted the high salary. Companies hired people who practiced psychology, economics and philosophy to become software engineers. While some of them were absolutely brilliant at their job, the majority were the first to be let go.

#### The beginning of tough times

2024 was starting to be a rough year for new graduates. Companies were keeping seniors around while letting go of low performing employees. Most teams stopped hiring completely and promotions became impossible. I was fortunate enough to change jobs and land at X (formerly Twitter).

I've seen wild things working at X, had lots of fun building parts of next generation search and recommendation systems and slowly started realizing how big of a deal LLMs are going to be. I've worked with engineers building Grok and started seeing the hype develop first hand. You could ask the computer complicated programming questions and it would give you some sort of meaningful output. It was new and exciting. In the meanwhile, the economy was getting worse worldwide. Layoffs increased in numbers and hiring came to a halt. New grads out of many universities were left without jobs. Some of them still haven't found a job. That was unheard of for a software engineering graduate in 2021/2.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="everyoneWantsToBecomeASoftwareEngineer.png"/>

Simultaneously, companies were realizing they can make their existing good engineers way more effective by giving them access to LLMs. IDEs and tooling received updates to support LLMs. We started using Cursor at work at X and I was suddenly able to talk to a codebase that I never worked on before. The answers were not so great initially but I watched the models improve each day in front of my eyes. At the time conversing with an LLM while onboarding a new codebase would at least halve my onboarding time. I was starting to see how tough it was going to get for junior engineers.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="gradsCantFindJobs.png"/>

I left X in July 2025 and moved to the Bay Area and went back to Amazon to work on SageMaker. I temporarily wanted a slightly more peaceful work/life balance while I adjust to a new country and take care of life changes. Towards the end of the year, a model called Claude Opus 4.5 dropped. It brought a completely new paradigm in how I approached programming. It was not only good at answering some questions about an existing codebase, it was also great at suggesting options I could choose when implementing things. Day by day, I started integrating Claude Code CLI into my daily work. It was like having the most knowledgeable intern on the planet sitting next to me. It wasn't better than an experienced engineer, but I think this was the final nail in the coffin for junior hires for some time.

#### The intern who knows almost everything - Opus 4.5

I call the current state of these LLMs knowledgeable interns - because even if an intern knows everything, they lack experience and context. Unless supervised, LLMs currently have the ability to create the biggest pile of tech debt and slop on this planet. I'm sure you've been seeing how people are one-shotting some demos with Claude Opus 4.5. Since December of 2025, I am seeing a lot of hype on X about how people are using it. At some point, even Uncle Bob was caught in the hype.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="uncleBobHype1.png,uncleBobHype2.png,uncleBobHype3.png"/>

LLMs allow you to compress an incredible amount of knowledge and retrieve it with remarkable accuracy. It is very helpful when asking questions about concepts already existing in a codebase you're not familiar with. However the deeper you look, the more you start noticing the cracks.

All the demos you're seeing on X are tiny projects. As soon as you scale up to a project that has more than 100 users, a "vibe-coded" project starts falling apart (just like how an intern project would). Unless supervised by an experienced engineer, LLMs can't foresee the chaos they are creating. They lack the future sight and years and years of historical context that an experienced person has. And that, is their Achilles' heel for now.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="uncleBobItDoesNotSeeTheChaosItIsCreating1.png,uncleBobItDoesNotSeeTheChaosItIsCreating2.png,uncleBobItDoesNotSeeTheChaosItIsCreating3.png,uncleBobItDoesNotSeeTheChaosItIsCreating4.png"/>

Today, we know LLMs are trained with code that was written by the average software engineer. Training is done offline with pre-existing data and this is currently the fundamental bottleneck of the tech. This is why we're usually seeing inside-the-box thinking. It can never come up with new concepts even if you provide very strong hints. Eventually, when I implement a new concept by hand, and ask Claude to review, it ends up saying "That's a brilliant idea!". This is also why it is somewhat terrible at making or even suggesting architectural changes especially to very large scale projects.

#### Claude in the hands of a non-software engineer

I would like to illustrate a point here. I've also seen arguments where people are saying anybody can code now. The same people have been developing applications that leak user secrets to front-ends, have incredible optimization issues and are susceptible to all sorts of attacks. I've searched on Google/Reddit however I haven't been able to find an example of a vibe-coded app that scaled past 100 users without an engineer's help so far. I expect the baseline to increase over-time though. In a few years, you might need 1000 or 10,000 users before you need to hire an engineer. At which point, it would be much easier for independent engineers to launch their own startups without requiring much venture capital. Honestly, it would be a win-win for everybody.

Let's twist this argument a bit. I'm an engineer. Would you trust me to be your vibe-lawyer if I used Claude to draft your contracts? I could probably produce something that looks professional and covers the basics. But the moment an edge case hits (a liability clause that contradicts another section), a jurisdiction-specific regulation I've never heard of, you're exposed, and neither I nor the LLM would even know it. Would you let a vibe-doctor diagnose your chest pain because they asked an LLM what the symptoms mean? Would you live in a house where a vibe-civil engineer let Claude calculate the load-bearing walls?

Every profession requires years of training not because the output is hard to produce, but **because knowing when the output is wrong is the actual skill**. That's exactly where vibe-coded software fails. The code compiles, the demo looks great, the investor is impressed and two months later your users' passwords are in a database dump on a forum because nobody understood what they shipped.

#### The 'Software Engineering is dead' crowd is missing the point

I'd also like to address this very specific item I've been seeing. There are lots of people on social media including Jim Cramer where it's all doom and gloom. Software Engineering is dead. You have to pivot to being something completely different now. It makes you sound unprofessional. Even if you think this, for your own sake don't say this.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="softwareDoom1.png,softwareDoom2.png,softwareDoom3.png"/>

Writing code was never the difficult part about doing software engineering. Have you ever seen a very senior software engineer writing code all day long? Never, because they're busy thinking about the code they should not be writing. The best, and the most senior software engineers I've seen in my life spend no more than 10% of their day coding. If writing syntax is what defines your work, you've always been on the way out.

The idea is so silly it almost sounds like saying `compilers can write assembly, therefore I have no job anymore`.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="objectOrientedMagazineCover.png,softwareEngineeringIsNotAboutSyntax1.png,softwareEngineeringIsNotAboutSyntax2.png,softwareEngineeringIsNotAboutSyntax3.png,softwareEngineeringIsNotAboutSyntax4.png,spotifyProductivityBoost.png"/>

What's somewhat accurate is what Elon is trying to explain here:

  <MediaCarousel folder="futureOfSoftwareEngineering" images="aDifferentLanguage1.png,aDifferentLanguage2.png"/>

Creating the binary sounds counterintuitive due to LLM token costs, however I believe programming languages can now be abstracted even further. Just like most engineers don't read compiler outputs anymore, there will come a time where we are not going to read code line by line, but there will be some sort of building blocks that get translated into binaries by high level compilers. Engineers will interact with LLMs to arrange these building blocks together instead of writing plain old Java and Python. Although I disagree with Elon about how fast this is going to come. I think we're still going to look at traditional code until 2028 and potentially beyond for a little while more.
#### The birth of the term: 100x engineer

Current state of things allows me to achieve quick onboarding. It almost eliminates my need to go and talk to another engineer from a different team owning a completely separate codebase to figure out what's going on. I can simply ask a few questions to an LLM and connect the dots myself. The productivity boost is undeniable. I can ask questions about a very long piece of documentation and it can extract and implement just the piece I need. 

LLMs still can't re-create a big piece of work by themselves without hallucinating. What's worse is they confidently generate code that references APIs that don't exist or solves a different problem than the one you asked about. However they allow me to operate way faster than I could ever imagine before. Feels like I've been adding large numbers for no reason my whole life and someone just gave me a calculator. I don't think that makes me dumb, it just eliminates a now unnecessary step and I can focus on what I do best: I make things.

I never specialized in one area in my career and worked in almost all available areas of computer and software engineering. What LLMs allow me as an engineer is to scale my skills 100x and develop much faster. I no longer have to define myself as a "software" engineer. With the breadth of fundamental knowledge I have, I make a great companion to the most knowledgeable intern on the planet.

  <MediaCarousel folder="futureOfSoftwareEngineering" images="tenXEngineerBecomes1000x.png"/>

Thanks to the intern, the time I spend reading the documentation to understand how a fundamental concept is implemented in a specific framework is almost completely gone. I now have the power to learn things much faster than before. I honestly can't wait for the next iteration of these models.

#### A little prediction about the next big model

There is a reason why memory prices have been increasing. Engineers working on LLMs know the main bottleneck at the moment is context window. That's also why you're limited to 10 seconds when using video generation tools — existing models run out of memory.

The core issue is attention. In transformer architectures, the self-attention mechanism scales quadratically with sequence length. Double the context window and you quadruple the compute needed. Researchers are actively working on approaches like Ring Attention (distributing sequences across devices), sparse attention patterns, and retrieval-augmented generation to work around this. But there's a deeper problem: even when you can fit more tokens into the window, model performance degrades on tokens far from the current position. This phenomenon is called "context rot". The model remembers the beginning and end of its context, but information buried in the middle gets diluted.

Throwing more memory at the problem helps to a certain extent, but it doesn't solve context rot. The real breakthrough will likely come from architectural changes to how models attend to long-range dependencies. As far as I know, this is something beyond the standard transformer self-attention mechanism.

Once this is solved, the intern will be promoted to a solid mid-level engineer and that's when I'll consider coming back to write another blog post.

#### Where do I think hiring is going

Software Engineering back in early 2000s was a niche thing. It was the least desired engineering department in my university. By the time I graduated, it became a difficult department to enter. Demand was up big time. Nowadays I see a lot of people doing software engineering not for the love of the game, but for the love of the salary. The trend of people doing it for the love of the salary being laid off will continue for now.

However, software demand will never go away even when we plug ourselves to the matrix. The community will shrink and perhaps the times when indie developers used to go to conferences together will come back.

#### Coding is thinking. Claude just saved me reading and typing time. For now.

There are no constants in software engineering. Only variables with longer lifetimes. The intern just made those lifetimes shorter.