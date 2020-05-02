import headerTemplate from '../templates/header.hbs';

const headerContainer = document.getElementById('header-hbs');

/* logic with nav links */
let navigationLinks = [
  {
    linkNumber: 'n0',
    url: '/',
    label: 'Home',
    logo: 'index_logo',
  },
  {
    linkNumber: 'n1',
    url: '/html',
    label: 'HTML',
    logo: 'HTML_logo',
  },
  {
    linkNumber: 'n2',
    url: '/css',
    label: 'CSS',
    logo: 'CSS_logo',
  },
  {
    linkNumber: 'n3',
    url: '/js',
    label: 'JS',
    logo: 'JS_logo',
  },
  {
    linkNumber: 'n4',
    url: '/react',
    label: 'React',
    logo: 'React_logo',
  },
  {
    linkNumber: 'n5',
    url: '/ts',
    label: 'TypeScript',
    logo: 'TS_logo',
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
