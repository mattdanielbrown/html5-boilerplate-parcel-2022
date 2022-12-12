function main() {
	document.addEventListener("touchstart", function () {
	}, true);
	
	const mobileNavigationControl = document.getElementById('mobile-navigation-control');
	const mobileNavigationControlLabelContent = document.getElementById('mobile-navigation-control-label-content');
	const siteNavigation = document.getElementById('site-navigation');
	
	mobileNavigationControl.addEventListener('change', function () {
		siteNavigation.classList.toggle('mobile-navigation-displayed');
		if (this.checked === true) {
			mobileNavigationControlLabelContent.innerHTML = "Close";
		} else {
			mobileNavigationControlLabelContent.innerHTML = "Menu";
		}
	});
}


window.addEventListener('DOMContentLoaded', (event) => {
	main();
});
