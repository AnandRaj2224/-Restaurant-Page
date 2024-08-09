import random from './images/random.png'
// page contact - opening hours
  const openingHours = document.createElement('div');
  openingHours.classList.add('opening');

  const openingHoursTitle = document.createElement('h3');
  openingHoursTitle.classList.add('titles');
  openingHoursTitle.textContent = 'Opening hours';
  openingHours.appendChild(openingHoursTitle);

  const openingHoursText = document.createElement('p');
  openingHoursText.classList.add('info')
  openingHoursText.textContent = `Monday-Friday: 10 am to 11 pm ||
                                  Saturday-Sunday: 12 pm to 12 am`;
  openingHours.appendChild(openingHoursText);

// page contact - address
  const address = document.createElement('div');
  address.classList.add('address');

  const addressTitle = document.createElement('h3');
  addressTitle.classList.add('titles');
  addressTitle.textContent = 'address';
  address.appendChild(addressTitle);

  const addressText  = document.createElement('p');
  addressText.classList.add('info');
  addressText.textContent = `Random ass place`;
  address.appendChild(addressText);

  const addressImage = document.createElement('img');
  addressImage.classList.add('itemImage');
  addressImage.src = random;
  address.appendChild(addressImage);

// page contact - phone and email
  const phone = document.createElement('div');
  openingHours.classList.add('phone');

  const phoneTitle = document.createElement('h3');
  phoneTitle.classList.add('titles');
  phoneTitle.textContent = 'phone and email';
  phone.appendChild(phoneTitle);

  const phoneText = document.createElement('p');
  phoneText.classList.add('info');
  phoneText.textContent = 'phone and email - no just ..no';
  phone.appendChild(phoneText);

// function for contact page

const contact = document.getElementById('btn3');
contact.addEventListener('click', contactPage);

 export function contactPage()
{
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(openingHours);
  content.appendChild(address);
  content.appendChild(phone);
}