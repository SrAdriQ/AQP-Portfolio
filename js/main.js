var isReady = 0;

$(document).ready(function () {
  load();
});

$(window).scroll(function() {
  if ($('#jobs').hasClass('show')) {
    fadeIn();
  }
});

function load() {
  if (isReady == 0) {
    var currentProgress = 1;
    var id = setInterval(frame, 5);

    function frame() {
      if (currentProgress >= 100) {
        clearInterval(id);
        isReady = 1;
        closeWindow('load-screen')
      } else {
        currentProgress++;
        $('#load-bar').width(currentProgress + "%");
      }
    }
  }
}

function closeWindow(containerId) {
  $('#' + containerId).addClass('hide');
  $('#' + containerId).removeClass('show');
}

function openWindow(containerId) {
  $('#' + containerId).addClass('show');
  $('#' + containerId).removeClass('hide');
}

function fadeIn(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-card').hasClass('fadeInLeft')) {
  		$('.timeline-card').removeClass('fadeInLeft').addClass('fadeInRight');
  	}

  	sr.reveal('.fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });
  }