# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
You can find in design folder the overview of sample challenge.

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

(./screenshots-of-My-Solution/@hamidMolaDev.png)

You can find the screenshot of my solution that I named @hamidMolaDev in screenshots-of-My-Solution folder.


### Links

- Solution URL: [@hamidMolaDev](https://github.com/hamidMolaDev/faq-accordion)
- Live Site URL: [@hamidMolaDev](https://hamidmoladev.github.io/faq-accordion/)

## My process
-Creating the fundemental HTML elements.
-I marked my HTML elements with classes and give them the basic styles.
-thinking about how can I interactive my questions that when I clicked them answers shows out.
-I figure out the javascript and do my best to finished the code
-I interactive my buttons and start finishing my css

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
-javascript


### What I learned

I learned javascript is the begining of coding and everythings start with it not HTML and CSS. It was my first javasctipt project and very challengefull for me.


```html
<h1>Some HTML code I'm proud of</h1>
```
```css

```
```js
question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    question.classList.toggle('active');

    if (question.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
```



### Continued development

I want to do more javascript coding and It felt good when I finished my project so I continue with javascript project.



### Useful resources


## Author

- github - [@hamidMolaDev](https://github.com/hamidMolaDev)
- Frontend Mentor - [@hamidMolaDev](https://www.frontendmentor.io/profile/hamidMolaDev)
- Twitter - [@hamidmola7296](https://twitter.com/hamidmola7296)


## Acknowledgments
----

