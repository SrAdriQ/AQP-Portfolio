function closeWindow(containerId)
{
  $('#' + containerId).addClass('hide');
  $('#' + containerId).removeClass('show');
}

function openWindow(containerId) {
  $('#' + containerId).addClass('show');
  $('#' + containerId).removeClass('hide');
}