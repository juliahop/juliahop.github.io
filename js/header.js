// Underscore.js DEBOUNCE function.
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


// 2. ANIMATE HEADER
// This function wil run a debounce script every 300ms
const checkHeader = debounce(() => {
  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);

  // If we scroll 100px, add "shrink" class to the header
  if (scrollPosition > 100) {
    document.querySelector("header").classList.add("shrink");
  }
  // If not, remove "shrink" class from header
  else {
    document.querySelector("header").classList.remove("shrink");
  }

}, 100);

// Run the chekHeader function every time you scroll
window.addEventListener("scroll", checkHeader);
