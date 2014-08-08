re('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client
  .after(1000, function() {
    this.up(1);
  })
  .after(1000, function() {
    this.up(1);
  })
  .after(0, function() {
    this.animateLeds('snakeGreenRed', 5, 3000);
  })
  .after(0, function() {
    this.animate('turnaround', 3000);
  })
  .after(0, function() {
    this.up(1);
  })
  .after(3000, function() {
    this.animate('flipLeft', 1000);
  })
  .after(1000, function() {
    this.front(1);
  })
  .after(1000, function() {
    this.animate('wave', 2000);
  })
  .after(0, function() {
    this.animateLeds('blinkGreen', 2000);
  })
  .after(5000, function() {
    this.animate('yawShake', 4000);
  })
  .after(0, function() {
    this.animateLeds('doubleMissile', 4000);
  })
  .after(2000, function() {
    this.up(1);
  })
  .after(2000, function() {
    this.animate('turnaroundGodown', 2000);
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
