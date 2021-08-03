let mobileMenuButton = document.getElementById('mobileMenu');
let header = document.querySelector('head');
const body = document.body;

const section0 = document.createElement('section');
const ul0 = document.createElement('ul');
const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a0 = document.createElement('a');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const i0 = document.createElement('i');
const i1 = document.createElement('i');
const i2 = document.createElement('i');
const i3 = document.createElement('i');
const p0 = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

function mobileMenu() {

    body.append(section0);
    section0.append(ul0);
    ul0.append(li0, li1, li2, li3);
    li0.append(i0);
    li1.append(a0);
    li2.append(a1);
    li3.append(a2);
    a0.append(p0, i1);
    a1.append(p1, i2);
    a2.append(p2, i3);

    section0.setAttribute('class', 'container mobileMenu');
    li0.setAttribute('class', 'mobilemenuclose');
    i0.setAttribute('class', 'material-icons');
    i0.setAttribute('onclick', 'section0.remove()')
    a0.setAttribute('class', 'menu_items');
    a0.setAttribute('href', '#projects');
    a0.setAttribute('onclick', 'section0.remove()')
    i1.setAttribute('class', 'material-icons');
    a1.setAttribute('class', 'menu_items');
    a1.setAttribute('href', '#about');
    a1.setAttribute('onclick', 'section0.remove()')
    i2.setAttribute('class', 'material-icons');
    a2.setAttribute('class', 'menu_items');
    a2.setAttribute('href', '#contact');
    a2.setAttribute('onclick', 'section0.remove()')
    i3.setAttribute('class', 'material-icons');

    i0.textContent = 'close';
    p0.textContent = 'Portfolio';
    i1.textContent = 'chevron_right'
    p1.textContent = 'About';
    i2.textContent = 'chevron_right'
    p2.textContent = 'Contact';
    i3.textContent = 'chevron_right'
}

let content = {
    titles : [
    'Multi-post story',
    'Multi-post story',
    'Multi-post story',
    'Multi-post story'],

    descriptions : [
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'],

    images : [
    'https://picsum.photos/684/448?grayscale',
    'https://picsum.photos/684/448?grayscale',
    'https://picsum.photos/684/448?grayscale',
    'https://picsum.photos/684/448?grayscale']
}



function project(title, description, image) {
    const section = document.getElementById('projects');
    const article = document.createElement('article');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li0 = document.createElement('li');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const button = document.createElement('button');

    section.append(article);
    article.append(img, div);
    div.append(h3, p, ul, button);
    ul.append(li0, li1, li2, li3);

    article.setAttribute('class', 'container project');
    img.setAttribute('src', image);
    img.setAttribute('alt', 'placeholder');
    div.setAttribute('class', 'container project-text');
    ul.setAttribute('class', 'container languages');

    h3.textContent = title;
    p.textContent = description;
    li0.textContent = 'css';
    li1.textContent = 'html';
    li2.textContent = 'bootstrap';
    li3.textContent = 'Ruby';
    button.textContent = 'See Project';

    console.log(title);

}

for (let i = 0; i < content.titles.length; i++) {
    project(content.titles[i], content.descriptions[i], content.images[i]);
}

console.log('Im working!!');