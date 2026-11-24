const hashnavbarcor = {
  '': 'home-navbtn',
  home: 'home-navbtn',
  search: 'search-navbtn',
  library: 'library-navbtn',
  settings: 'settings-navbtn',
  profile: 'profile-navbtn'
};

const wireframes = {
  '': 'wireframe-home',
  home: 'wireframe-home',
  search: 'wireframe-search',
  library: 'wireframe-library',
  settings: 'wireframe-settings',
  profile: 'wireframe-profile'
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
    currentnavelement.classList.remove('bg-red-500/35', 'text-white');
    currentnavelement.classList.add(
      'hover:bg-red-500/10',
      'hover:text-white',
      'text-zinc-300'
    );

    elem = document.getElementById(hashnavbarcor[hashsanitized]);
    elem.classList.remove(
      'hover:bg-red-500/10',
      'hover:text-white',
      'text-zinc-300'
    );
    elem.classList.add('bg-red-500/35', 'text-white');

    currentnavelement = elem;
    currentnav = hashnavbarcor[hashsanitized];

    const wireframeelement = document.getElementById(wireframes[hashsanitized]);

    currentwireelement.classList.add('hidden');
    wireframeelement.classList.remove('hidden');

    currentwire = wireframes[hashsanitized];
    currentwireelement = document.getElementById(currentwire);

    return;
  } else {
    const homebtnelem = document.getElementById(hashnavbarcor['home']);
    homebtnelem.classList.remove(
      'hover:bg-red-500/10',
      'hover:text-white',
      'text-zinc-300'
    );
    homebtnelem.classList.add('bg-red-500/35', 'text-white');
    return;
  }

  const homebtnelem = document.getElementById(hashnavbarcor['home']);
  homebtnelem.classList.remove(
    'hover:bg-red-500/10',
    'hover:text-white',
    'text-zinc-300'
  );
  homebtnelem.classList.add('bg-red-500/35', 'text-white');
};

lucide.createIcons();
window.location.hash = 'home';

const homebtnelem = document.getElementById(hashnavbarcor['home']);
homebtnelem.classList.remove(
  'hover:bg-red-500/10',
  'hover:text-white',
  'text-zinc-300'
);
homebtnelem.classList.add('bg-red-500/35', 'text-white');

function searchLRCRED(title, artist) { }

window.closeMosaicPopup = function (element) {
  element.parentElement.style.opacity = "0";
  document.getElementById("mosaicpopupblur").style.opacity = "0";
  setTimeout(() => {
    element.parentElement.remove();
    document.getElementById("mosaicpopupblur")?.remove();
  }, 150);
}