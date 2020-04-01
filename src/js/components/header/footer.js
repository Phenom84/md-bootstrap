import footerTemplate from '../../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');

/* logic with nav links */
const footerBlocks = [
  {
    title: 'Links',
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
    title: 'Links',
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
    title: 'Links',
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
    title: 'Links',
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
    sotialLinks: [
      {
        buttonClass: 'btn-fb',
        faClass: 'fa-facebook',
      },
      {
        buttonClass: 'btn-tw',
        faClass: 'fa-twitter',
      },
      {
        buttonClass: 'btn-gplus',
        faClass: 'fa-google-plus',
      },
      {
        buttonClass: 'btn-li',
        faClass: 'fa-linkedin',
      },
      {
        buttonClass: 'btn-dribbble',
        faClass: 'fa-dribbble',
      },
    ],
  },
];

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({ footerBlocks });
}
