$(function() {

  // var gamepad = new Gamepad();

  // gamepad.bind(Gamepad.Event.CONNECTED, function(device) {
  //     // a new gamepad connected
  //     console.log('gamepad connected', device);
  // });

  // gamepad.bind(Gamepad.Event.DISCONNECTED, function(device) {
  //     // gamepad disconnected
  //     console.log('gamepad disconnected', device);
  // });

  // gamepad.bind(Gamepad.Event.UNSUPPORTED, function(device) {
  //     // an unsupported gamepad connected (add new mapping)
  //     console.log('gamepad unsupported', device);
  // });

  // gamepad.bind(Gamepad.Event.BUTTON_DOWN, function(e) {
  //     // e.control of gamepad e.gamepad pressed down
  //     console.log('gamepad button down', e.control);
  // });

  // gamepad.bind(Gamepad.Event.BUTTON_UP, function(e) {
  //     // e.control of gamepad e.gamepad released
  //     console.log('gamepad button up', e.control);
  // });

  // gamepad.bind(Gamepad.Event.AXIS_CHANGED, function(e) {
  //     // e.axis changed to value e.value for gamepad e.gamepad
  //     console.log('gamepad axis changed', e);
  // });

  // gamepad.bind(Gamepad.Event.TICK, function(gamepads) {
  //     // gamepads were updated (around 60 times a second)
  // });

  // if (!gamepad.init()) {
  //  // Your browser does not support gamepads, get the latest Google Chrome or Firefox
  // }

  $('#find').click(function(){
    console.log('clicked');
    navigator.bluetooth.requestDevice({filters: [{namePrefix: 'RS_'}]})
    .then(function (device){
      console.log(device);
      return device.connectGATT();
    })
    .then(function(server){
      console.log(server);
    })
    .catch(error => {
      console.log(error);
    });
  });
});
