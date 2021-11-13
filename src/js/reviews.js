$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:true,
		speed:2000,
		autoplaySpeed: 800,
		pauseOnFocus: true,
		centerMode: true,
		asNavFor:".slider-text",
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
		
	});
	$(".slider").on("init", function(event, slick){
    $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});

$(".slider").on("afterChange", function(event, slick, currentSlide){
    $(".count").text(parseInt(slick.currentSlide + 1) + ' / ' + slick.slideCount);
});
	$('.slider-text').slick({
		fade: true,
		asNavFor: ".slider",
		speed: 2000,
		pauseOnFocus: true,
		arrows:false,
		dots:false,
		});
});

