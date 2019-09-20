// Your script goes here

var section_ratio_visible = 0.55;
var sections = [
	document.querySelector('#perso'),
	document.querySelector('#pro'),
];

var observer = new IntersectionObserver( function(entries) {
	entries.forEach(function(entry) {
		var id = entry.target.getAttribute('id');
		document.querySelector(`[href="#${id}"]`).parentNode.classList.remove('navigation_active');
		if(entry.intersectionRatio >= section_ratio_visible) {
			document.querySelector(`[href="#${id}"]`).parentNode.classList.add('navigation_active');
		}
	});

}, {
	threshold: section_ratio_visible
});


sections.forEach( function(section) {
	observer.observe(section);
});