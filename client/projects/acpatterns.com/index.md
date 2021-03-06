# acpatterns.com

An application that edits, decodes and encodes Nintendo's Animal Crossing New Leaf and Animal Crossing New Horizons pattern files to and from QR encodes. Meant to be used in tandem with Animal Crossing New Leaf (3DS) or Animal Crossing New Horizons (Switch) and the Nintendo Switch Online mobile application.

<img
  src="./../../.vuepress/assets/media/projects/staged/acpatterns.com.png"
/>

## Links

* [Official Website](https://acpatterns.com)

* [GitHub](https://github.com/Thulinma/ACNLPatternTool)

## Media Mentions

Several notable online news and social media presences have published articles about us or are already building on top of our platform!

### News Articles

* [Wall Street Journal](https://www.wsj.com/articles/nintendos-animal-crossing-goes-upscale-with-museum-masterpieces-11597852490)

* [The Washington Post](https://www.washingtonpost.com/video-games/2020/04/18/animal-crossing-new-horizons-tools-tips/)

* [The New York Times](https://www.nytimes.com/2020/09/01/us/politics/biden-animal-crossing.html)

* [Polygon](https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/2020/3/27/21197396/turn-pictures-into-murals-patterns-in-game-nook-link-qr-code)

* [The Verge](https://www.theverge.com/2020/9/1/21409727/biden-harris-animal-crossing-campaign-new-horizons-yard-signs-election)

* [USgamer](https://www.usgamer.net/articles/animal-crossings-qr-codes-are-handy-for-designs-and-also-importing-massive-jeff-goldblum-paintings)

* [PCGamer](https://www.pcgamer.com/give-your-animal-crossing-home-a-pc-gaming-makeover-with-this-handy-design-tool/)

* [Gameranx](https://gameranx.com/features/id/195193/article/animal-crossing-new-horizons-how-to-import-images-custom-designs/)

### Museums

* [Getty Museum](http://blogs.getty.edu/iris/how-to-build-an-art-museum-in-animal-crossing/)

* [San Antonio Museum of Art](https://www.samuseum.org/animalcrossing/)

* [The National Museum](https://www.nasjonalmuseet.no/en/aktuelt/2020/put-the-national-museum-in-your-animal-crossing-world/)

* [The Met Museum](https://www.metmuseum.org/blogs/collection-insights/2020/animal-crossing-new-horizons-qr-code)

* [Cincinatti Art Museum](https://www.cincinnatiartmuseum.org/about/blog/animal-crossing-and-cam/)

### Social Media

* [Joe Biden Campaign](https://store.joebiden.com/animal-crossing/)

* [GameXplain (Youtube)](https://www.youtube.com/watch?v=7Qrvb0Pi29c)

* [AbdallahSmash026 (Youtube)](https://youtu.be/aIEA5QnQSDo)

* [Lego (Twitter)](https://twitter.com/LEGO_Group/status/1322508736678813696)

* [KFC Phillipines (Twitter)](https://twitter.com/KFCPhilippines/status/1273093956763439104?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1273093956763439104%7Ctwgr%5E&ref_url=https%3A%2F%2Feconsultancy.com%2Fthe-animal-crossing-phenomenon-marketing%2F)

## Team Members

* [Thulinma (Lead Engineer)](https://github.com/Thulinma)

* [DamSenViet (Lead Frontend Engineer, Lead UI/UX Designer)](https://github.com/DamSenViet)

* [Myumi (QR Code & UI Developer)](https://github.com/myumi)

* [MelonSpeedRuns (Data Miner)](https://twitter.com/MelonSpeedruns)

* [Tero (Icon Designer)](https://tero.space/)

## Problem/Background

Nintendo's Animal Crossing New Leaf (ACNL) released in 2012 was the first of
the Animal Crossing series' games to feature QR codes as a means of sharing
in-game creations over the internet. Thulinma created a very [early version of the application](https://thulinma.com/acnl/)
that could only work on ACNL patterns.

While ACNL continued to gain steam in popularity, so did the number of pattern
designers who shared QR codes over tumblr blogs. One of the problems that we
noticed retrospectively was rampant plagiarism. We specifically noticed the
complaints from the Japanese ACNL community over this issue.

The method of sharing these pattern designs in images with QR codes and
previews were also rather decentralized. No one had come up with a solution to
this problem. Everyone else who had made a smiliar tool had been basing their
own code off of Thulinma's, meaning there was no plausibility of anyone else
making a centralized, searchable databsae of patterns. I knew this was a wanted
feature based on the sub-optimal solutions others had chosen.

In 2018, I began making design mockups and [experimental performance tests](https://github.com/DamSenViet/react-acnl-pattern-tool)
and started reaching out to Thulinma about his early version of the application
asking questions about the binary pattern format to prepare for what I
anticipated to be the next Animal Crossing game (and the next QR code format).

In 2019, I was invited by Thulinma to join him and Myumi in making the next
application when Nintendo made their announcement, this time we planned on
doing it all over from scratch (when Nintendo would make their announcement).
A majority of this time was spent idle, as I was an incredibly busy during
this year (internships, double major).

Nintendo by this point had a strong track record of announcing games without
leaking information prior. They made their first announcement for the release
of Animal Crossing New Horizons (ACNH) in March 2020 with only a week or two
before the release date. Planning and development kicked off the day of the
announcement with a deadline quickly approaching.

## Solution/Design

To set the stage, we had 1-2 weeks of development time, which is frankly much
less than anyone on the team would have hoped for. We were also all in
different timezones, each of us residing in different regions of the world, 
introducing communication and coordination problems. We decided on deploying a
web application on our servers and domains, with the potential to release an
offline version. This web application would include, the pattern editor
which would allow you to edit via GUI, the patterns and import/export QR codes
as well as binary ACNL patterns. We included the ability to convert regular
images to ACNL patterns as a bonus feature.

During the initial development, the ACNH pattern file format was not publicly
available. No one had access to ACNH and so no one could data mine the files.
We however made plans to reverse-engineer and add this in a future update
(and we did).

A majority of our efforts were focused on the frontend while our lead engineer
took care of the internal pattern format libraries and backend api. We also
decided to let our lead handle the infrastructure.

We intiially wanted to include an account system, but with two weeks left, we
simply did not have the resources to fire up an account system from scratch
and to pair it with a browsing system. We also had many security concerns.
The benefits of an account system did not solve the plagiarism problem
and would also require us to setup internal human infrastructure. Based on
our timeline, an account system was not feasible.

## Involvement/Roles

### Lead Frontend Engineer

As the most experienced front-end developer on the team at the time, 
(based on expertise, not work years) I advised my team on our technology
stack. I gave them options on potential build strategies we could use to
provide both online and offline versions of the application, the benefits of
specific frameworks based on our own optimization targets and my prior
[experiments](https://github.com/DamSenViet/react-acnl-pattern-tool)
(performance, bundle size).

I was responsible for all of our setup including a custom development
environment, compilers, compression, and dependency structures. One of the
unique problems that we ran into included needing to link a fork of the QR Code
library we needed because it didn't support encoding binary data and was
written in a different language, TypeScript, whereas we were using JavaScript. 
This was handled with git submodules at my suggestion.

I handled a large amount of our UI programming. This involved setting up
our initial routing, pages, data stores, portal managers, api libraries, 
integrating internationalization features and guiding my team through `Vue.js` , 
a framework my team did not have prior exposure to, but quickly familiarized
themselves with.

I also programmed our frontend caching/paging system to help additionally reduce
our load on the backend (even with a reverse proxy cache in place).

### Lead UI/UX Designer

With prior background in UI/UX, I led the design efforts including making our
UI/UX, determining general art direction, design language, and color schemes.
Paired with my background in  development, I also advised other team members
on the viability of specific UI features.

Before the project kicked off, I had already been working on the UI/UX design
for the application for quite a while. I did have a design in mind modeled
after fashion websites. We however rejected many of my initial designs as a team
because we wanted the UI to feel playful and match the upcoming game's design
language and make it feel less business-oriented. Looking back, I'm incredibly
glad we did.

Early Homepage Mockups:

<img src="./early-homepage.png" />

Latest Homepage Mockups:

<img src="./latest-homepage.png" />

Over the course of the project, I realized I had split too much time
between my two roles as developer and designer, that I had trouble fixing
bottlenecks. Even after the initial release, I found myself having to
spend too much time on the UI/UX designs to help move development forward.

After our initial release, we encountered many offers of other community
members volunteering to help. After we vetted and brought Tero, an
icon/brand designer, onto the team, I was able to free up more time for
development.

## Challenges

### Attacked and Scaled

Within the first week of releasing our application in late March, we had
received a DDOS attack from a disgruntled Discord member we had banned for
harassing other community members. Our server was down for approximately half
a day while we scrambled to set up a reverse proxy to deal with the high load
of requests and deal with malicious ones.

### User-Generated Content and Nintendo's Legal Team

I learned that when you have user-generated content, but don't have the human
resources to moderate that content, you end up with some very glaring issues.
During the week of release, we received complaints about inappropriate content
in our pattern database. This content included racism, sexism, genderism, porn, 
gore, etc – clearly not content meant for kids or those playing Animal Crossing
for relaxation purposes, which would be a large portion of our users. We were
even featured on [Eurogamer](https://www.eurogamer.net/articles/2020-03-21-animal-crossing-new-horizons-players-are-putting-memes-hand-wash-warnings-and-some-very-nasty-things-in-their-islands)
for this blunder.

I remember I woke up on a weekend during spring break getting a phone call
from Thulinma, "Did you not see what happened? Check your discord." Nintendo
had sent us a legal notice, pleasantly worded, that we take down the website
entirely, citing us for copyright infringement (for allowing users to convert
**their** images into QR Codes for  **their** game and for inappropriate
content) despite the fact that the feature to scan QR codes at all, was Nintendo's
decision. I did heavily agree that we needed a way to moderate the patterns, 
but not with the copyright infringement. Even if our application did not exist, 
users could still create copyright infringing content in-game without our help.

In the same exact day we got the notice, we temporarily disabled the browsing
system, setup NSFW filters, and began work on a moderating system. We also
removed all references to Nintendo at their request. At this point, Nintendo
de-escalated the legal threat and left us somewhat confused about their intentions, 
despite us not taking away the ability to convert images to patterns and then to
QR Codes.

Nintendo later showed up again in a news article when asked by the [Wall Street Journal](https://www.wsj.com/articles/nintendos-animal-crossing-goes-upscale-with-museum-masterpieces-11597852490)
about their thoughts on our application. Their response:

> “very happy” that the game is able to “facilitate the creative and social activities of people around the world.”

## Successes

### Large Consistent Userbase

You might recall that we actually left the backend to our lead engineer to
handle. This was the correct call. With my financial resources I could not
afford the infrastructure required to even remotely support our large userbase.

Here are our stats of unique users for the first month of release (April):

<img src="./stats-1.png">

By May our numbers began to sink a bit, but it was expected because the
popularity and visibility of the game began to fizzle. Users began to
understand that the new game was no longer centered around interaction, but
around customization. Many of them (including myself) were feeling burnout
from the game which did occur in previous games in the series. Nintendo's new
update model also excluded meaningful additions to the base game, only adding
event-exclusive in-game items.

<img src="./stats-2.png">

Regardless, over the months, we have still have millions of unique monthly
global users.

### Social Media

We've made it into popular culture! Over the first few COVID months, you
could see us all over social media channels. Our patterns and QR codes were
included in the posts of popular Facebook groups such as "Subtle Asian
Traits", on [Instagram](https://www.instagram.com/p/B_R-61pFrjP/?utm_source=ig_web_button_share_sheet), 
and even on Twitter by pixel art arists. Even popular Youtube gaming channel
[GameXplain](https://www.youtube.com/watch?v=7Qrvb0Pi29c) made a video about
our application and a tutorial of how to use it!

We gained enough traction to even be featured in news articles of
well-established digital news outlets such as [Wall Street Journal](https://www.wsj.com/articles/nintendos-animal-crossing-goes-upscale-with-museum-masterpieces-11597852490), 
[Polygon](https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide/2020/3/27/21197396/turn-pictures-into-murals-patterns-in-game-nook-link-qr-code).

Museums like the [Getty](https://experiments.getty.edu/ac-art-generator) built
on our codebase an opportunity to engage new audiences by making their own art
collections available as QR codes. This motivated me to make a [separate publicly available library](./../acpatterns-js.md)
for developers who want to automate the process or make similar applications.

Other companies were also using our platform as a way to advertise and engage
with their customers. This [tweet by KFC Phillipines](https://twitter.com/KFCPhilippines/status/1273093956763439104?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1273093956763439104%7Ctwgr%5E&ref_url=https%3A%2F%2Feconsultancy.com%2Fthe-animal-crossing-phenomenon-marketing%2F)
includes patterns that were converted using our tool demonstrating how wide-reaching
our platform had become over social media. A similar marketing strategy was also used
by [President Joe Biden.](https://www.theverge.com/2020/9/1/21409727/biden-harris-animal-crossing-campaign-new-horizons-yard-signs-election)

## Final Thoughts

Developing, designing, and maintaining the application has helped me
familiarize myself with the challenges in a product's lifecycle as well as
helped me understand the concept of product ownership. It meant providing
support to users (both non-developers and developers), responding to feature
requests, reviewing code, managing contributions, and coordinating with team
members. I'm glad that we were able to deploy a tool for others to meaningfully
engage over social media and games, glad that we were recogized for it, and
proud that our work is being used by others in a wholesome or productive manner.

I hope to continue making tools like these on a much larger scale for
other communities as well.
