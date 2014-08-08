re('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client.animateLeds('blinkRed', 2, 2);
client.animateLeds('blinkOrange', 4, 2);
client.animateLeds('blinkGreen', 6, 4);

client
  .after(5000, function() {
    this.front(0.2);
  })
  .after(500, function() {
    this.animate('flipBehind', 1000);
  })
  .after(1000, function() {
    this.stop();
    this.front(0.2);
  })
  .after(500, function() {
    this.right(0.4);
  })
  .after(1000, function() {
    this.back(0.2);
  })
  .after(500, function() {
    this.left(0.4);
  })
  .after(1000, function() {
    this.front(0.2);
  })
  .after(500, function() {
    this.left(0.4);
  })
  .after(1000, function() {
    this.front(0.2);
  })
  .after(500, function() {
    this.right(0.4);
  })
  .after(500, function() {
    this.animate('wave', 3000);
    this.up(0.1);
    this.animateLeds('doubleMissile', 5, 2);
  })
  .after(2000, function() {
    this.front(0.6);
  })
  .after(500, function() {
    this.left(0.6);
  })
  .after(500, function() {
    this.(0.6);
  })
  .after(500, function() {
    this.animate('yawDance', 5000);
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
