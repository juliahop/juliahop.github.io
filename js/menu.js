function mobileMenu() {

  const mq = window.matchMedia("(max-width: 47.5em)");
  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".menu__button");
  const menuItems = menu.querySelectorAll(".menu__link");


  

  console.log(menuItems);

  function addListener(element, type, callback) {
        if (element.addEventListener) {
            element.addEventListener(type, callback);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
        };
    };

  if(mq.matches) {
    menu.classList.add('hidden');
  }

  // Add current class to menu link
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(link => link.classList.remove('current'));
      item.classList.add('current');
    });
  });

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
