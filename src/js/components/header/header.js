import headerTemplate from '../../templates/header.hbs';

const headerContainer = document.getElementById('header-hbs');

/* logic with nav links */
let navigationLinks = [
  {
    linkNumber: 'n1',
    url: '/',
    label: 'Home',
  },
  {
    linkNumber: 'n2',
    url: '/about-us',
    label: 'About',
  },
  {
    linkNumber: 'n3',
    url: '/products',
    label: 'Products',
  },
  {
    linkNumber: 'n4',
    url: '/contact-us',
    label: 'Contacts',
  },
];

navigationLinks = navigationLinks.map((navigationItem) => {
  const item = navigationItem;

  item.isActive = (window.location.pathname === navigationItem.url);

  return item;
});

if (headerContainer) {
  headerContainer.innerHTML = headerTemplate({ navigationLinks });
}
