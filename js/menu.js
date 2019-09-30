function mobileMenu() {

  const mq = window.matchMedia("(max-width: 47.5em)");
  const menuItems = document.querySelector(".menu.wrapper--flex");
  const menuButton = document.querySelector(".menu__button");

  function addListener(element, type, callback) {
        if (element.addEventListener) {
            element.addEventListener(type, callback);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
        };
    };

// Hide menu on item click
  addListener(menuItems, 'click', e => {
    // e.preventDefault();
    if(mq.matches) {
      menuItems.classList.add('hidden');
    } else {
      return;
    }
  });

// Use menu button to open and close menu
  addListener(menuButton, 'click', () => {
      menuItems.classList.toggle("hidden");
  });

  // addListener(menuButton, 'keyup', e => {
  //     if (e.keyCode == 13) {
  //             menuButton.click();
  //     }
  // });

  // Hide menu items on smaller screens
  addListener(window, 'resize', () => {
      let width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;

        if (width < 760) {
          menuItems.classList.add('hidden');
        }
  });

};
