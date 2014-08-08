var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client.animateLeds('blinkOrange', 2, 30);

client
  .after(1000, function() {
    this.up(0.5);
  })
  .after(2000, function() {
    this.stop();
  })
  .after(1000, function() {
    this.animate('yawShake', 3000);
  })
  .after(5000, function() {
    this.animate('flipLeft', 15);
  })
  .after(3000, function() {
    this.up(0.5);
  })
  .after(1000, function() {
    this.animate('flipRight', 15);
  })
  .after(3000, function() {
    this.up(0.5);
  })
  .after(1000, function() {
    this.animate('doublePhiThetaMixed', 3000);
  })
  .after(5000, function() {
    this.clockwise(1);
  })
  .after(3000, function() {
    this.counterClockwise(1);
  })
  .after(3000, function() {
    this.stop();
    this.land();
  });

setTimeout(function() {
  client.stop();
  client.land();
}, 30000);
