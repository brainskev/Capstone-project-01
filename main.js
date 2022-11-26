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
    name: 'His Excellency Mr. William K. Ruto',
    description: 'President of Kenya',
    image: 'images/ruto.jpg',
    text: 'William Kipchirchir Samoei Arap Ruto CGH  is a Kenyan politician who is serving as the fifth and current president of Kenya since 13 September 2022.',
  },

  {
    id: '2',
    name: 'His Excellency Mr. Aleksandar Vucic',
    description: 'President of Serbia',
    image: 'images/alexander.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    name: 'His Excellency Mr. Egils Levits,',
    description: 'President of Latvia,',
    image: 'images/egils.jpg',
    text: 'Egils Levits  is a Latvian politician, lawyer, political scientist and jurist who has served as the tenth president of Latvia since 8 July 2019.[2] He was a member of the European Court of Justice from 2004 to 2019.',
  },
  {
    id: '4',
    name: 'His Excellency Mr. Borut Pahor',
    description: 'President of Slovenia',
    image: 'images/borut.jpg',
    text: 'Borut Pahor is a Slovenian politician, serving as President of Slovenia since December 2012.[3] He previously served as Prime Minister of Slovenia from November 2008 to February 2012.',
  },
  {
    id: '5',
    name: 'His Excellency Mr. Ulf Kristersson,',
    description: 'Prime Minister of Sweden',
    image: 'images/ulf.jpg',
    text: 'Ulf Hjalmar Ed Kristersson  is a Swedish politician who has served as Prime Minister of Sweden since October 2022.',
  },
  {
    id: '6',
    name: 'Her Excellency Ms. Sanna Marin',
    description: ' Prime Minister of Finland',
    image: 'images/sana.jpg',
    text: 'Sanna Mirella Marin is a Finnish politician who has been serving as the Prime Minister of Finland since 2019. A member of the Social Democratic Party of Finland (SDP), she has been a Member of Parliament since 2015. ',
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
