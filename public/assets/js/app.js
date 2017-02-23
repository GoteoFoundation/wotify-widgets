
// Global var
SOCKET = io();
AUTORELOAD = true;

// Common tasks
SOCKET.on('reload page',function(page){
  if(AUTORELOAD) {
    location.reload();
  }
});

// Notifications
function showMsg(txt) {
  $.notify(txt, {
    type:'success',
    animate: {
      enter: 'animated bounceInDown',
      exit: 'animated bounceOutUp'
    }
  });
}
function showError(txt) {
  $.notify(txt, {
    type:'danger',
    animate: {
      enter: 'animated bounceInDown',
      exit: 'animated bounceOutUp'
    }
  });
}
function showInfo(txt) {
  $.notify(txt, {
    type:'info',
    animate: {
      enter: 'animated bounceInDown',
      exit: 'animated bounceOutUp'
    }
  });
}
function showWarning(txt) {
  $.notify(txt, {
    type:'warning',
    animate: {
      enter: 'animated bounceInDown',
      exit: 'animated bounceOutUp'
    }
  });
}
