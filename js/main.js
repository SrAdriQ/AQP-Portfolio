var isReady = 0;

$(document).ready(function () {
  load();
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