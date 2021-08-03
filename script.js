let mobileMenuButton = document.getElementById('mobileMenu');
let header = document.querySelector('head');
const main = document.body;

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

    main.append(section0);
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

console.log('Im working!!');