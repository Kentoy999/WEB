


/* [ landing sections on click ] */

$('.link-list1 a').on('click', function(){
	landingSection('#section1');
});

$('.link-list2 a').on('click', function(){
	landingSection('#section2');
});

$('.link-list3 a').on('click', function(){
	landingSection('#section3');
});

$('.link-list4 a').on('click', function(){
	landingSection('#section4');
});


$('.back-top').on('click', function(){
	landingSection('#section1');
});


function landingSection(landingSectionTitle){
	$('html, body').animate({
	    scrollTop: $(landingSectionTitle).offset().top + (-64)
	}, 60);
}




/* [ marquee ] */

$('.famous-brands')
    .bind('beforeStarting', function () {
        $('.js-marquee li:first').css('margin-left', '-' + ($('.famous-brands').width() -5) + 'px');  
})
.marquee({
    speed: 70,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
});
