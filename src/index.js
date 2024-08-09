import './style.css';
import {menuPage} from "./menu";
import {contactPage} from "./contact";

const content = document.getElementById('content');

// home page - welcome article
  const welcome = document.createElement('div');
  welcome.classList.add('welcome');
  content.appendChild(welcome);

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.classList.add('titles');
  welcomeTitle.textContent = 'Welcome to Ramen Haven';
  welcome.appendChild(welcomeTitle);

  const welcomeText = document.createElement('p');
  welcomeText.classList.add('info');
  welcomeText.textContent = `Welcome to Ramen Haven, where every bowl tells a story!

At Ramen Haven, we take pride in serving the finest and most flavorful ramen dishes in town. Our restaurant is more than just a place to eat—it's an experience. Whether you’re a dedicated ramen enthusiast or a curious newcomer, our cozy and inviting atmosphere is the perfect setting for a delightful meal.

Immerse Yourself in Ramen Culture
Step into our warm, welcoming space and enjoy a culinary journey through the art of ramen. Our menu features a diverse selection of ramen dishes that cater to all tastes, from savory classics to inventive new creations. Join us and discover why Ramen Haven is the go-to spot for ramen lovers.`;
welcome.appendChild(welcomeText);

//home page - why us article
  const whyUs = document.createElement('div');
  welcome.classList.add('whyUs');
  content.appendChild(whyUs);

  const whyUsTitle = document.createElement('h2');
  whyUsTitle.classList.add('titles');
  whyUsTitle.textContent = 'Why Choose Ramen Haven?';
  whyUs.appendChild(whyUsTitle);

  const whyUsText = document.createElement('p');
  whyUsText.classList.add('info');
  whyUsText.textContent = `Our commitment to quality and authenticity is what sets Ramen Haven apart from the rest. We meticulously source the freshest, locally-grown ingredients to ensure that every dish is bursting with flavor. Our chefs, with years of experience and a true passion for ramen, craft each bowl with care and precision.

  Experience Exceptional Dining
  At Ramen Haven, we believe in delivering more than just a meal; we offer an exceptional dining experience. From the moment you walk through our doors, you’ll be greeted with genuine hospitality and a menu that showcases the best of traditional and modern ramen. Discover the difference that dedication to quality makes.`;
  whyUs.appendChild(whyUsText);

//home page - original  Recipes article
  const  recipes = document.createElement('div');
  recipes.classList.add('recipes');
  content.appendChild(recipes);

  const recipesTitle = document.createElement('h2');
  recipesTitle.classList.add('titles');
  recipesTitle.textContent = 'Original Recipes Since 1988';
  recipes.appendChild(recipesTitle);

  const recipesText = document.createElement('p');
  recipesText.classList.add('info');
  recipesText.textContent = `At Ramen Haven, we honor the rich traditions of Japanese cuisine with recipes that have been passed down through generations. Our time-tested methods and original recipes ensure that each bowl of ramen is a true reflection of authentic Japanese flavors.

  A Legacy of Authenticity
  Our commitment to preserving the integrity of traditional ramen recipes means you’re not just enjoying a meal—you’re tasting a piece of culinary history. Our dishes are crafted to evoke the essence of classic ramen, providing you with an authentic experience that has been cherished by ramen lovers for decades. Come and taste the
  legacy at Ramen Haven.`;
  recipes.appendChild(recipesText);

// home page - quality article
  const quality = document.createElement('div');
  quality.classList.add('whyUs');
  content.appendChild(quality);

  const qualityTitle = document.createElement('h2');
  qualityTitleTitle.classList.add('titles');
  qualityTitle.textContent = 'indulge in Our Quality Dishes';
  quality.appendChild(qualityTitle);

  const qualityText = document.createElement('p');
  qualityText.classList.add('info');
  qualityText.textContent = `Our ramen is not just food; it’s a culinary masterpiece designed to delight your senses. Each bowl is a harmonious blend of rich, flavorful broth, tender cuts of meat, and fresh vegetables. Our dishes are crafted with the highest standards of quality to ensure a memorable dining experience.

  From Classic to Creative
  Whether you’re in the mood for a classic Shoyu Ramen or a bold, spicy Miso Ramen, our menu offers something for everyone. We take pride in our diverse selection, each dish carefully prepared to highlight the best flavors and textures. At Ramen Haven, every meal is an opportunity to savor the finest ramen.`;
  quality.appendChild(qualityText);

  const home = document.getElementById('btn1');
  home.addEventListener('click', () =>{
    content.innerHTML = '';
  content.appendChild(welcome);
  content.appendChild(whyUs);
  content.appendChild(recipes);
  content.appendChild(quality);
  });