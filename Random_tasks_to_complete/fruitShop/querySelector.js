const heading = document.querySelector('#main-heading');
heading.style.textAlign = 'right';

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.listStyleType = 'none';
fruits.style.borderRadius = '5px';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.backgroundColor = 'white';
    fruits.style.borderRadius = '5px';
}

const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruit.length; i++) {
    evenFruit[i].style.backgroundColor = 'brown';
    evenFruit[i].style.color = 'white';
}
const oddFruit = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruit.length; i++) {
    oddFruit[i].style.backgroundColor = 'lightgrey';

}
