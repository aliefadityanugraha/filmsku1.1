AOS.init({
  once:true
});

window.onscroll = function () {
  scrollNavbar();
};

function scrollNavbar() {

  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector(".navbar").style.background = "#1a1c22";
    document.querySelector(".navbar").style.margin = "0px";
    document.querySelector(".navbar").style.borderRadius = "0px";
    document.querySelector(".nav-brand-title").style.color = "#fff";
  } else {
    document.querySelector(".navbar").style.background =
      "rgba(0,0,0,0)";
    document.querySelector(".navbar").style.margin = "15px 30px 15px 30px";
    document.querySelector(".nav-brand-title").style.color = "#fff";
  }
}

// var lazyLoad = new LazyLoad({
//   elements_selector: ".lazy",
//   container: window,
//   threshold: 300,
//   data_src: "src",
//   class_loading: "loading",
//   cancel_on_exit: true,
//   use_native: false

// });


	// (function () {

	// 	function logElementEvent(eventName, element) {
	// 		console.log(new Date().getTime(), eventName, element.getAttribute('data-src'));
	// 	}

	// 	function logEvent(eventName, elementsLeft) {
	// 		console.log(new Date().getTime(), eventName, elementsLeft + " images left");
	// 	}


	// 	new LazyLoad({
	// 		callback_load: function (element) {
	// 			logElementEvent("LOADED", element);
	// 		},
	// 		callback_set: function (element) {
	// 			logElementEvent("SET", element);
	// 		},
	// 		callback_processed: function(elementsLeft) {
	// 			logEvent("PROCESSED", elementsLeft);
	// 		}
	// 	});

	// }());