var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client
  .after(10, function() {
    this.up(0.5);
  })
  .after(5000, function() {
    this.front(1.0);
  })
  .after(1000, function() {
    this.animate('flipAhead', 15);
  })
  .after(30, function() {
    this.front(.5);
    this.right(.9);
  })
  .after(2000, function() {
    this.clockwise(1.0);
  })
  .after(500, function() {
    this.front(1.0);
  })
  .after(5000, function() {
    this.animate('turnaroundGodown', 2000);
  })
  .after(3000, function() {
    this.animate('flipLeft', 15);
  })
  .after(30, function() {
    this.left(1.0);
  })
  .after(2000, function() {
    this.stop();
  })
  .after(4000, function() {
    this.animate('yawDance', 2000);
  })
  .after(1000, function() {
    this.stop();
    this.land();
  });

// emergency stop after 30sec

setTimeout(function() {
  client.stop();
  client.land();
}, 30000);
