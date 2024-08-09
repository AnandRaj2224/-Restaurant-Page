
// menu page - item 1
  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menuItem');

  const menuItem1Title = document.createElement('h3');
  menuItem1Title.classList.add('titles');
  menuItem1Title.textContent = 'miso ramen';
  menuItem1.appendChild(menuItem1Title);

  const menuItem1Image = document.createElement('img');
  menuItem1Image.classList.add('itemImages');
  menuItem1Image.src = './images/miso-ramen.jpg'
  menuItem1.appendChild(menuItem1Image);

// menu page - item 2
  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menuItem');

  const menuItem2Title = document.createElement('h3');
  menuItem2Title.classList.add('titles');
  menuItem2Title.textContent = 'shio ramen';
  menuItem2.appendChild(menuItem2Title);

  const menuItem2Image = document.createElement('img');
  menuItem2Image.classList.add('itemImages');
  menuItem2Image.src = './images/shio-ramen.jpg'
  menuItem2.appendChild(menuItem2Image);

// menu page - item 3
  const menuItem3 = document.createElement('div');
  menuItem1.classList.add('menuItem');

  const menuItem3Title = document.createElement('h3');
  menuItem3Title.classList.add('titles');
  menuItem3Title.textContent = 'shoyu ramen';
  menuItem3.appendChild(menuItem3Title);

  const menuItem3Image = document.createElement('img');
  menuItem3Image.classList.add('itemImages');
  menuItem3Image.src = './images/shoyu-ramen.jpg'
  menuItem3.appendChild(menuItem3Image);

// menu page - item 4
  const menuItem4 = document.createElement('div');
  menuItem4.classList.add('menuItem');

  const menuItem4Title = document.createElement('h3');
  menuItem4Title.classList.add('titles');
  menuItem4Title.textContent = 'tonkotsu ramen';
  menuItem4.appendChild(menuItem4Title);

  const menuItem4Image = document.createElement('img');
  menuItem4Image.classList.add('itemImages');
  menuItem4Image.src = './images/tonkostsu-ramen.jpg'
  menuItem4.appendChild(menuItem4Image);

// menu page - item 5
  const menuItem5 = document.createElement('div');
  menuItem5.classList.add('menuItem');

  const menuItem5Title = document.createElement('h3');
  menuItem5Title.classList.add('titles');
  menuItem5Title.textContent = 'tsukemen ramen';
  menuItem5.appendChild(menuItem5Title);

  const menuItem5Image = document.createElement('img');
  menuItem5Image.classList.add('itemImages');
  menuItem5Image.src = './images/tsukemen-ramen.jpg'
  menuItem5.appendChild(menuItem5Image);


const menu = document.getElementById('btn2');
menu.addEventListener('click',menuPage);

export function menuPage()
{
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(menuItem1);
  content.appendChild(menuItem2);
  content.appendChild(menuItem3);
  content.appendChild(menuItem4);
  content.appendChild(menuItem5);
}