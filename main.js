// Mobile Menu
const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') { navigation.classList.remove('nav-toggle'); }
});
window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});

const speakers = [
    {
      id: '1',
      name: 'kelvin kaviku',
      description: 'University of Namibia Staff and Software Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  
    {
      id: '2',
      name: 'kelvin kaviku',
      description: 'Full stack Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '3',
      name: 'kelvin kaviku',
      description: 'Full stack Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '4',
      name: 'kelvin kaviku',
      description: 'Full stack Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '5',
      name: 'kelvin kaviku',
      description: 'Full stack Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '6',
      name: 'kelvin kaviku',
      description: 'Full stack Developer',
      image: 'images/kelvin.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  
  for (let i = 0; i <= speakers.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('featured-speakers');
    card.innerHTML = `
     <div class="speaker-picture">
     <img src="${speakers[i].image}"
     alt="${speakers[i].name}"/>
  
     <div class="speaker-info">
     <h2 class="speaker-name">${speakers[i].name}</h2>
     <p class="speaker-job">${speakers[i].description}</p>
     <hr>
     <p class="about-speaker">${speakers[i].text}</p>
    `;
    document.querySelector('.speakers-container').appendChild(card);
  }
  