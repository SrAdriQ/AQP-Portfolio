var isReady = 0;

$(document).ready(function () {
	load();
	$('#timeline').scroll(function () {
		fadeTimelineCards();
	});
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

  switch (containerId) {
	  case "profile":
		  closeWindow("jobs");
		  closeWindow("projects");
		  break;
	  case "jobs":
		  closeWindow("profile");
		  closeWindow("projects");
		  fadeTimelineCards();
		  break;
	  case "projects":
		  closeWindow("profile");
		  closeWindow("jobs");
		  break;
	  default:
		  console.log("The container dosen't exist: " + containerId);
		  break;
  }
}

function fadeTimelineCards(){
	$(".timeline-card").each(function (index) {
		if(isOverflowing($(this)))
		{
			if((index+1) % 2 === 0)
			{
				$(this).addClass('fadeOutRight');
				$(this).removeClass('fadeInRight');
			}
			else
			{
				$(this).addClass('fadeOutLeft');
				$(this).removeClass('fadeInLeft');
			}
		}
		else
		{
			if ((index + 1) % 2 === 0)
			{
				$(this).addClass('fadeInRight');
				$(this).removeClass('fadeOutRight');
			}
			else
			{
				$(this).addClass('fadeInLeft');
				$(this).removeClass('fadeOutLeft');
			}
		}
	});
}

function isOverflowing(card){
	var scrollTop = $('#timeline').scrollTop();
	var cardPosition = card.position().top + card.height(); 
	var offsetH = cardPosition -= scrollTop;
	var scrollH = $('#timeline').outerHeight();  
	return (offsetH > scrollH || offsetH < 0);
}
