	$(document).ready(function(){
		$('.reviews__wrapper').slick({
			arrows:false,
			dots:false,
			slidesToShow:3,
			autoplay:true,
			speed:500,
			responsive:[
			{
				breakpoint: 928,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1
				}
			}
		]
		});
	});

	var acc = document.getElementsByClassName("question__accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}

		/* Nav*/

		const toggleButton = document.getElementsByClassName('toggle-button')[0]
	      const navbarLinks = document.getElementsByClassName('navbar-list')[0]

	      toggleButton.addEventListener("click", () => {
	      toggleButton.classList.toggle("active");
	      navbarLinks.classList.toggle("active");
	      })

	      document.querySelectorAll(".navbar-list").forEach(n => n.addEventListener("click", () => {
	      toggleButton.classList.remove("active");
	      navbarLinks.classList.remove("active");
	    }))


	   /* Modal */

	   /* Modal*/

	document.addEventListener('DOMContentLoaded', function() {

		   var modalButtons = document.querySelectorAll('.js-open-modal'),
		       overlay      = document.querySelector('.js-overlay-modal'),
		       closeButtons = document.querySelectorAll('.js-modal-close');


		   modalButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {

		         e.preventDefault();

		         var modalId = this.getAttribute('data-modal'),
		             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

		         modalElem.classList.add('active');
		         overlay.classList.add('active');
		      });

		   });

		   closeButtons.forEach(function(item){

		      item.addEventListener('click', function(e) {
		         var parentModal = this.closest('.modal');

		         parentModal.classList.remove('active');
		         overlay.classList.remove('active');
		      });

		   });

		    document.body.addEventListener('keyup', function (e) {
		        var key = e.keyCode;

		        if (key == 27) {

		            document.querySelector('.modal.active').classList.remove('active');
		            document.querySelector('.overlay').classList.remove('active');
		        };
		    }, false);

		    overlay.addEventListener('click', function() {
		        document.querySelector('.modal.active').classList.remove('active');
		        this.classList.remove('active');
		    });
		})