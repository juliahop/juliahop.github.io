function mobileMenu() {

  const mq = window.matchMedia("(max-width: 47.5em)");
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu__button");
  const menuItems = menu.querySelectorAll(".menu__link");  
  const linkToTop = document.querySelector(".logo");

  function addListener(element, type, callback) {
        if (element.addEventListener) {
            element.addEventListener(type, callback);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
        };
    };

  // uses HTML5 history API to manipulate the location bar
  function removeHash() {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 5); // 5 miliseconds   
  };


  menuItems.forEach(item => {
    item.addEventListener('click', removeHash);
  });
  
  addListener(linkToTop, 'click', removeHash);


  if(mq.matches) {
    menu.classList.add('hidden');
  }

  

// Hide menu on item click
  addListener(menu, 'click', e => {
    // e.preventDefault();
    if(mq.matches) {
      menu.classList.add('hidden');
    } else {
      return;
    }
  });

// Use menu button to open and close menu
  addListener(menuButton, 'click', () => {
      menu.classList.toggle("hidden");
  });

  addListener(menuButton, 'keyup', e => {
      if (e.keyCode == 13) {
              menuButton.click();
      }
  });

  // Hide menu items on smaller screens when resizing browser
  addListener(window, 'resize', () => {
      let width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;

        if (width > 760) {
          menu.classList.remove('hidden');
        } else {
          menu.classList.add('hidden');
        };
  });

};
