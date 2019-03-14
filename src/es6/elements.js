const doc = document;

export const header = {
    self: doc.querySelector('body  main > header'),
    nav: doc.querySelector('body  main > header nav'),
    li: doc.querySelectorAll('body  main > header nav ul li'),
    hamburger: doc.querySelector('body  main > header .hamburger'),
};

export const intro = {
    self: doc.querySelector('body > article.intro'),
    typeOne: doc.querySelector('body > article.intro > .type-one'),
    typeTwo: doc.querySelector('body > article.intro > .type-two'),
    typeThree: doc.querySelector('body > article.intro > .type-three')
}

export const main = {
    self: doc.querySelector('body > main'),
    section: doc.querySelectorAll('body > main > section')
}

console.log('Webpack On!!');