const hashnavbarcor = {
  '': 'home-navbtn',
  home: 'home-navbtn',
  search: 'search-navbtn',
  library: 'library-navbtn',
  settings: 'settings-navbtn',
};

const wireframes = {
  '': 'wireframe-home',
  home: 'wireframe-home',
  search: 'wireframe-search',
  library: 'wireframe-library',
  settings: 'wireframe-settings',
};

let currentnav = hashnavbarcor['home'];
let currentnavelement = document.getElementById(currentnav);

let currentwire = wireframes['home'];
let currentwireelement = document.getElementById(currentwire);

window.onhashchange = () => {
  const hash = window.location.hash;
  const hashsanitized = hash.replace('#', '');
  let elem;

  if (hashsanitized in hashnavbarcor) {
    elem = document.getElementById(hashnavbarcor[hashsanitized]);
    elem.classList.remove(
      'hover:bg-red-500/10',
      'hover:text-white',
      'text-zinc-300'
    );
    elem.classList.add('bg-red-500/35', 'text-white');

    currentnavelement.classList.remove('bg-red-500/35', 'text-white');
    currentnavelement.classList.add(
      'hover:bg-red-500/10',
      'hover:text-white',
      'text-zinc-300'
    );

    currentnavelement = elem;
    currentnav = hashnavbarcor[hashsanitized];

    const wireframeelement = document.getElementById(wireframes[hashsanitized]);

    currentwireelement.classList.add('hidden');
    wireframeelement.classList.remove('hidden');

    currentwire = wireframes[hashsanitized];
    currentwireelement = document.getElementById(currentwire);
  }
};

lucide.createIcons();
window.location.hash = 'home';

function searchLRCRED(title, artist) {}
