re('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.animateLeds('snakeGreenRed', 5, 10)

client.takeoff();

client


  .after(3000, function() {
    this.clockwise(0.5)
  })
  .after(3000, function() {
    this.counterClockwise(0.5);
  })
  .after(3000, function() {
    this.front(1.0);
    this.animate('flipLeft', 2500);
  })
  .after(3000, function() {
    this.back(1.0);
    this.animate('flipRight', 2500);
  })
  .after(3000, function() {
    this.right(.5)
    this.wave(3000)
  })
  .after(3000, function() {
    this.animateLeds('doubleMissile', 20, 3)
    this.animate('flipAhead', 2500);
  })
  .after(3000, function() {
    this.animateLeds('doubleMissile', 50, 10)
    this.animate('flipBehind', 2500);
  })
  .after(3000, function() {
    this.left(.5)
    this.animate('doublePhiThetaMixed', 2500);
  })
  .after(3000, function() {
    this.animate('theta20degYaw200deg', 2500);
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