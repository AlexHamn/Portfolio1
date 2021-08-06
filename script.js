const { body } = document;

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
  i0.setAttribute('onclick', 'section0.remove()');
  a0.setAttribute('class', 'menu_items');
  a0.setAttribute('href', '#projects');
  a0.setAttribute('onclick', 'section0.remove()');
  i1.setAttribute('class', 'material-icons');
  a1.setAttribute('class', 'menu_items');
  a1.setAttribute('href', '#about');
  a1.setAttribute('onclick', 'section0.remove()');
  i2.setAttribute('class', 'material-icons');
  a2.setAttribute('class', 'menu_items');
  a2.setAttribute('href', '#contact');
  a2.setAttribute('onclick', 'section0.remove()');
  i3.setAttribute('class', 'material-icons');

  i0.textContent = 'close';
  p0.textContent = 'Portfolio';
  i1.textContent = 'chevron_right';
  p1.textContent = 'About';
  i2.textContent = 'chevron_right';
  p2.textContent = 'Contact';
  i3.textContent = 'chevron_right';
}

function Project(title, description, image, tech0, tech1, tech2, tech3, liveLink, sourceLink) {
  this.title = title;
  this.description = description;
  this.image = image;
  this.tech0 = tech0;
  this.tech1 = tech1;
  this.tech2 = tech2;
  this.tech3 = tech3;
  this.liveLink = liveLink;
  this.sourceLink = sourceLink;
}

const project0 = new Project(
  'Multi-post story',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  'https://picsum.photos/684/448?grayscale',
  'html',
  'Ruby on rails',
  'css',
  'Bootstrap',
  'https://github.com/AlexHamn/Portfolio1',
  'https://github.com/AlexHamn/Portfolio1',
);

const project1 = new Project(
  'Multi-post story',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  'https://picsum.photos/684/448?grayscale',
  'html',
  'Ruby on rails',
  'css',
  'Bootstrap',
  'https://github.com/AlexHamn/Portfolio1',
  'https://github.com/AlexHamn/Portfolio1',
);

const project2 = new Project(
  'Multi-post story',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  'https://picsum.photos/684/448?grayscale',
  'html',
  'Ruby on rails',
  'css',
  'Bootstrap',
  'https://github.com/AlexHamn/Portfolio1',
  'https://github.com/AlexHamn/Portfolio1',
);

const project3 = new Project(
  'Multi-post story',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  'https://picsum.photos/684/448?grayscale',
  'html',
  'Ruby on rails',
  'css',
  'Bootstrap',
  'https://github.com/AlexHamn/Portfolio1',
  'https://github.com/AlexHamn/Portfolio1',
);

const projects = [project0, project1, project2, project3];
const titles = [];
const descriptions = [];
const images = [];
const tech0s = [];
const tech1s = [];
const tech2s = [];
const tech3s = [];
const liveLinks = [];
const sourceLinks = [];

for (let i = 0; i < projects.length; i += 1) {
  titles.push(projects[i].title);
  descriptions.push(projects[i].description);
  images.push(projects[i].image);
  tech0s.push(projects[i].tech0);
  tech1s.push(projects[i].tech1);
  tech2s.push(projects[i].tech2);
  tech3s.push(projects[i].tech3);
  liveLinks.push(projects[i].liveLink);
  sourceLinks.push(projects[i].sourceLink);
}

function displayProject(title, description, image, tech0, tech1, tech2, tech3, id) {
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
  button.setAttribute('id', id);
  button.setAttribute('onclick', 'popUp(this.id)');

  h3.textContent = title;
  p.textContent = description;
  li0.textContent = tech0;
  li1.textContent = tech1;
  li2.textContent = tech2;
  li3.textContent = tech3;
  button.textContent = 'See Project';
}

const container = document.createElement('article');
const description = document.createElement('p');
const seeLive = document.createElement('p');
const seeSource = document.createElement('p');
const close = document.createElement('i');
const tech = document.createElement('ul');
const tech0 = document.createElement('li');
const tech1 = document.createElement('li');
const tech2 = document.createElement('li');
const live = document.createElement('i');
const div0 = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const h3 = document.createElement('h3');
const img0 = document.createElement('img');
const img1 = document.createElement('img');
const button0 = document.createElement('button');
const button1 = document.createElement('button');
const liveLink = document.createElement('a');
const sourceLink = document.createElement('a');

function popUp(id) {
  body.append(container);
  container.append(div0);
  div0.append(div1, img0, description, tech, div2);
  div1.append(h3, close);
  tech.append(tech0, tech1, tech2);
  div2.append(liveLink, sourceLink);
  liveLink.append(button0);
  button0.append(seeLive, live);
  sourceLink.append(button1);
  button1.append(seeSource, img1);

  container.setAttribute('class', 'container popUpWindow');
  div0.setAttribute('class', 'popUpProject');
  div1.setAttribute('class', 'container popUpHead');
  close.setAttribute('class', 'material-icons');
  close.setAttribute('onclick', 'container.remove()');
  img0.setAttribute('class', 'popUpImg');
  img0.setAttribute('src', images[id]);
  img0.setAttribute('alt', 'portfolio picture');
  description.setAttribute('class', 'pop_description');
  tech.setAttribute('class', 'container languages');
  div2.setAttribute('class', 'container popUpButtons');
  liveLink.setAttribute('href', liveLinks[id]);
  live.setAttribute('class', 'material-icons');
  sourceLink.setAttribute('href', sourceLinks[id]);
  img1.setAttribute('src', './media/icons/github.svg');

  h3.textContent = titles[id];
  close.textContent = 'close';
  description.textContent = descriptions[id];
  tech0.textContent = tech0s[id];
  tech1.textContent = tech1s[id];
  tech2.textContent = tech2s[id];
  seeLive.textContent = 'See Live';
  live.textContent = 'stream';
  seeSource.textContent = 'See Source';
}

var getname=document.getElementById("name")
var getemail=document.getElementById("mail")
var getmsg=document.getElementById("msg")
function check_storage() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("Name", getname.value);
    localStorage.setItem("E-mail", getemail.value)
    localStorage.setItem("Message", getmsg.value)    
  } else {
    console.log('Sorry! No Web Storage support..')
  }
}
console.log(localStorage)
function prefill_form() {
    getname.value=localStorage.getItem("Name");
    getemail.value=localStorage.getItem("E-mail")
    getmsg.value=localStorage.getItem("Message")
}

const form = document.querySelector('form');

function validation() {
  const mail = document.getElementById('mail').value;
  const error = document.getElementById('error');
  const pattern = /[A-Z]/;

  if (mail.match(pattern)) {
    error.innerText = 'email must be in lower case';
  } else {
    error.innerText = 'you\'re cool';
  }
}

form.addEventListener('submit', (e) => {
  const mail = document.getElementById('mail').value;
  const error = document.getElementById('error');
  const pattern = /[A-Z]/;

  if (mail.match(pattern)) {
    error.innerText = 'email must be in lower case';
    e.preventDefault();
  } else {
    error.innerText = 'you\'re cool';
  }
});

for (let i = 0; i < titles.length; i += 1) {
  displayProject(
    titles[i],
    descriptions[i],
    images[i],
    tech0s[i],
    tech1s[i],
    tech2s[i],
    tech3s[i],
    i,
  );
  if (i === 999) {
    mobileMenu();
    popUp();
    validation();
  }
}

prefill_form();
