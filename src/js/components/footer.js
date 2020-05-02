import footerTemplate from '../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');

/* logic with nav links */
const blockOfLinks = [
  {
    blockTitle: 'Links',
    links: [
      {
        url: '#!',
        label: 'Link 1',
      },
      {
        url: '#!',
        label: 'Link 2',
      },
      {
        url: '#!',
        label: 'Link 3',
      },
      {
        url: '#!',
        label: 'Link 4',
      },
    ],
  },

  {
    blockTitle: 'Links',
    links: [
      {
        url: '#!',
        label: 'Link 1',
      },
      {
        url: '#!',
        label: 'Link 2',
      },
      {
        url: '#!',
        label: 'Link 3',
      },
      {
        url: '#!',
        label: 'Link 4',
      },
    ],
  },

  {
    blockTitle: 'Links',
    links: [
      {
        url: '#!',
        label: 'Link 1',
      },
      {
        url: '#!',
        label: 'Link 2',
      },
      {
        url: '#!',
        label: 'Link 3',
      },
      {
        url: '#!',
        label: 'Link 4',
      },
    ],
  },
];

const sotialLinks = [
  {
    aTagClass: 'btn-fb',
    iTagClass: 'fa-facebook',
  },
  {
    aTagClass: 'btn-tw',
    iTagClass: 'fa-twitter',
  },
  {
    aTagClass: 'btn-gplus',
    iTagClass: 'fa-google-plus',
  },
  {
    aTagClass: 'btn-li',
    iTagClass: 'fa-linkedin',
  },
  {
    aTagClass: 'btn-dribbble',
    iTagClass: 'fa-dribbble',
  },
];


if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ blockOfLinks, sotialLinks });
}
