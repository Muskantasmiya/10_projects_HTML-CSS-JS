// const allImages=document.getElementsByTagName("img");
// //const allImages = document.images;
// const cssImage=document.getElementsByClassName('css-image');

// const idImage=document.getElementById('h1-tag');

// const queryImage=document.querySelector('.css-image'); //can select any thing;
// //querySelector can select any thing, but only single element with their symbols, example: .css-iamge, #h1-tag

//  const allSelector = document.querySelectorAll('.css-image')// querySelector gives us a nodelist selects multiple elements

//  const jsImage=document.querySelector('[alt="css png"]');

//  const list=document.querySelector('ul li')//selects the first li

// const listItems=document.querySelector('ul')// gives ul tag, since in our html only one ul is there, hence 0:ul is returned

// const imageInsideUl=listItems.querySelector('.css-image')

// const listCollection=document.querySelectorAll('ul li') //gives elements of ul

// const allImages = document.querySelectorAll('img');
// const imagesUrl=['https:no net now', 'shdueudh', 'qkjhd8dh'];
// allImages[0].src=imagesUrl[0];
// allImages[1].src=imagesUrl[1];
// allImages[2].src = imagesUrl[2];

// for(let i=0; i<allImages.length; i++){
//     allImages[i]=imagesUrl[i];
// }//it willchange all the image in easy way

// allImages.forEach((image)=>{
//     image.src=imagesUrl[i];
// })
//forEach will not work on HTML Collection example const allImages = document.images; basically this will return html collection hence error will  e thrown 
//but we can convet HTML collection to an array 
// const allImages =[...document.images]

// cool thing: in browser-console we can select an element and copy its js path like this and apply methods : i've selected i tag of li element:
// document.querySelector("body > ul > ol > li:nth-child(3) > i")


//OTHER METHODS:

// let element=document.createElement('li');
// element.className='childOfUl';
// element.id='createdLi';
// // element.innerHTML="<b>this is a new li element created</b>";//we can also use innerText, but bold tag will not be applied to innerTEXT, it is just for adding text.
// //best way we can use createTextNode ;
// let text=document.createTextNode('Im a textNode')
// element.appendChild(text);

// element.setAttribute('title','mytitle');
// element.setAttribute('alt','https');


// let ul=document.querySelector('ul.this')//this: classname here
// ul.appendChild(element);


// let elem2=document.createElement("h1"); 
// elem2.className='h1-class'
// elem2.id='h1-id';
// let tnode=document.createTextNode("I'm a textnode of h1 element which is elem2");
// elem2.appendChild(tnode);

// // element.replaceWith(elem2);

// ul.replaceChild(elem2, document.getElementById('html'));

// ul.removeChild(document.getElementById('css'));

// let gettingAttr=elem2.getAttribute('id')//gets the id 

// let hasAttr=elem2.hasAttribute('class');

// let removeAttr=elem2.removeAttribute('id')//id removed

//homework:create a heading element and a tag with outside href with the link="https:" and text=gotoharry 
// let heading=document.createElement('h1');
// let text=document.createTextNode('Go to Codewithharry');
// heading.appendChild(text);


// let a=document.createElement('a')
// a.appendChild(heading)
// a.setAttribute('href','https')