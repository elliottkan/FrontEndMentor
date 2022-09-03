# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Links

- Solution URL: [Solution URL here](https://github.com/elliottkan/FrontEndMentor/tree/main/ProductReviewCard)
- Live Site URL: [Live](https://product-preview-card-elliott.netlify.app)

## My process

I had tried to approach this by breaking down each component of the card. I visualised everything in little divs to help me set my project up, upon developing the website. This was a really enjoyable process, there was something immensely satisfying when I was at the end just polishing up all the website & code base.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- LESS
- My Brain & 200WPM Fingers
- VS-Code

### What I learned

- First time using LESS, I came across a video to use SASS/LESS (CSS compiler) to assist with workflow management. I initially stayed away from this as I thought it would affect my foundational understanding of CSS. However, I found this to be quite the opposite effect as it helped me understand selectors with greater fluency.

- I had issues with loading the image with src & srcset. This was due to me using the responsive dev tool layout to build the website - I learnt (thanks Kevin Powell) once the high resolution image is loaded in Chrome, due to caching it will not load the lower quality image. This will typically not pose an issue for a 'real site' due to users not changing resolutions. For this card, i decided to assign a different class to the mobile & desktop image for it to be hidden based off media width.

- I had initially used flex-box for the container, but switched to grid due to the forced-format being better suited for this application.

- I had issues with my container at the beginning of the project and scaling issues - fixed with assigning widths/heights to container.

- Setup the project with PX instead of EM. Using EM is for best practice according to the internet.

I decided to add some nice hover effects to the `<a href>` and a cool zoom effect to the img (of course disabled for mobile).

### Continued development

I hope to think a bit more hollistically about how to approach my projects with the following:

1. Outlining & Breaking down HTML elements with class more efficiently prior to styling
  - I plan to do this by visualising sections & elements more thoroughly, and use better commenting to section off areas for development.
2. I hope to better understand the use case & limits of flex-box & grid.
  - I plan to watch more Kevin Powell youtube videos then dabble in CodePen to grasp this concept
3. I hope to implement a sort of scaling methodfor my text to increase with container/screen-size in my future projects. I have noticed the container shrinks but the text does not, which may cause accessibilty issues on massive screens. 
  - Thinking out loud: Also set a minimum font-height if possible for when scaling DOWN.
4. Improve my mentality, there were a few moments (especially when I felt absolutely idiotic not being able to the img srcset to work) when I got frustrated
- When frustrated or faced with a problem, write the issue down to visualize it, take a breather if required. 
- Self-Note: You're in this for the long game so this may actually be the most important factor of all. Hopefully you look back on this and have found useful tools to overcome this.

### Useful resources

- [CSS Link Hover Effects](https://css-tricks.com/css-link-hover-effects/) - This helped me create my custom `<a href>` effects - was quite useful as there's a codepen in here to play around with the CSS.
- [srcset and sizes attributes](https://youtu.be/2QYpkrX2N48) - Around 26:40 Timestamp where Kevin talks about users resizing screens.


## Author

- Website - [Elliott Kan](https://www.kandostudio.com.au)
- Frontend Mentor - [@ekando](https://www.frontendmentor.io/profile/elliottkan)


## Acknowledgments

Everyone on the internet sharing their knowledge.
