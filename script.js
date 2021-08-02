let mobileMenuButton = document.getElementById('mobileMenu');
let header = document.querySelector('head');
const main = document.body;

const section0 = document.createElement('section');
const ul0 = document.createElement('ul');
const li0 = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const i0 = document.createElement('i');
const i1 = document.createElement('i');
const i2 = document.createElement('i');
const i3 = document.createElement('i');
const p0 = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');

function mobileMenu() {

    main.append(section0);
    section0.append(ul0);
    ul0.append(li0, li1, li2, li3);
    li0.append(i0);
    li1.append(p0, i1);
    li2.append(p1, i2);
    li3.append(p2, i3);

    section0.setAttribute('class', 'container mobileMenu');
    li0.setAttribute('class', 'mobilemenuclose');
    i0.setAttribute('class', 'material-icons');
    i0.setAttribute('onclick', 'section0.remove()')
    li1.setAttribute('class', 'menu_items');
    i1.setAttribute('class', 'material-icons');
    li2.setAttribute('class', 'menu_items');
    i2.setAttribute('class', 'material-icons');
    li3.setAttribute('class', 'menu_items');
    i3.setAttribute('class', 'material-icons');

    i0.textContent = 'close';
    p0.textContent = 'Portfolio';
    i1.textContent = 'chevron_right'
    p1.textContent = 'About';
    i2.textContent = 'chevron_right'
    p2.textContent = 'Contact';
    i3.textContent = 'chevron_right'
}

mobileMenu();

console.log('Im working!!');