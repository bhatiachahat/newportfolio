
$(document).ready(function() {
    // $("#hide").click(function() {
    //     $("img").hide(2000);
    // });
    $('.menu-block, .menu-item').on('click', function() {
        $('.name-block').addClass('reverse');
        $('.name-block-container').addClass('reverse');
        $('.menu-blocks').addClass('hidex');
        $('.inline-menu-container').addClass('showx');
      
       
    })


    //On Click Open Menu Items
	$('.menu-block, .menu-item').on('click', function() {
		
	    $('.name-block').addClass('reverse');
	    $('.name-block-container').addClass('reverse');
	    $('.menu-blocks').addClass('hidex');
        $('.inline-menu-container').addClass('showx');
        $('.content-blocks').addClass('showx');
	   
	});
	//On Click Open About/Resume Block
	$('.about-block,.about').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.about').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.about').addClass('active');
    });
   
	//On Click Open Portfolio Block
	$('.portfolio-block, .portfolio').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.portfolio').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.portfolio').addClass('active');
	});
	//On Click Open Blog Block
	$('.blog-block,.blog').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.blog').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.blog').addClass('active');
	});
	//On Click Open Contact Block
	$('.contact-block,.contact').on('click', function() {
	    $('.content-blocks').removeClass('showx');
	    $('.content-blocks.contact').addClass('showx');
	    $('.menu-item').removeClass('active');
	    $('.menu-item.contact').addClass('active');
	});

	//On Click Close Blocks
	$('#close').on('click', function() {
	    $('.name-block').removeClass('reverse');
	    $('.name-block-container').removeClass('reverse');
	    $('.content-blocks').removeClass('showx');
	    $('.menu-blocks').removeClass('hidex');
	    $('.inline-menu-container').removeClass('showx');
	    $('.menu-item').removeClass('active');
	});
	//On Click Close Blog Post And Project Details
	// $('#close-pop').on('click', function() {
	//     $('.content-blocks.pop').removeClass('showx');
	//     $('.sidebar-menu').removeClass('hidex');
	//     $('.inline-menu-container').addClass('showx');
	//     $('.content-blocks.pop section').empty();
	// });
    
});
//Map

// function initMap(){
//     // var location={lat:28.704060,lng:77.102493};
//     var location={lat:-25.363,lng:131.044}
//     var map=new google.maps.Map(document.getElementById("map"),{
//         zoom:4,
//         center:location
//     });

// }


//AIzaSyABPAciVitnzoGG1OVCzuri8C8Ggwwfv0s