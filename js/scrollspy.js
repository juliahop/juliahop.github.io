function scrollSpy () {

  const menuItems = document.querySelectorAll(".menu__link");  
  const sections = document.querySelectorAll(".home");

  // console.log(isInViewport);
  console.log(menuItems);

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;


  // functions to add and remove the active class from links as appropriate
  const makeActive = link => menuItems[link].classList.add("active");
  const removeActive = link => menuItems[link].classList.remove("active");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach(link => removeActive(link));

  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 200;

  // keep track of the currently active link
  // use this so as not to change the active link over and over
  // as the user scrolls but rather only change when it becomes
  // necessary because the user is in a new section of the page
  let currentActive = 0;


  // listen for scroll events
  window.addEventListener("scroll", () => {

    // check in reverse order so we find the last section
    // that's present - checking in non-reverse order would
    // report true for all sections up to and including
    // the section currently in view
    //
    // Data in play:
    // window.scrollY    - is the current vertical position of the window
    // sections          - is a list of the dom nodes of the sections of the page
    //                     [...sections] turns this into an array so we can
    //                     use array options like reverse() and findIndex()
    // section.offsetTop - is the vertical offset of the section from the top of the page
    // 
    // basically this lets us compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing
    const current = sections.length - [...sections].reverse().findIndex(section => window.scrollY >= section.offsetTop - sectionMargin) - 1;

    console.log(current);

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
};


  // const rect = sections[0].getBoundingClientRect();
  // console.log(rect);
  // const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= viewportHeight && rect.right <= viewportWidth;
