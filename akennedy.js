re('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client

  //Go up a little higher
  .after(1000, function() {
    this.up(1);
  })
  .after(2000, function() {
    this.stop();
  })


  //Flip ahead
  .after(5000, function() {
    this.animate('flipAhead', 3000);
  })
  .after(3000, function() {
    this.stop();
  })


  //Flip right
  .after(5000, function() {
    this.animate('flipRight', 3000);
  })
  .after(3000, function() {
    this.stop();
  })


  //Flip back
  .after(5000, function() {
    this.animate('flipBehind', 3000);
  })
  .after(3000, function() {
    this.stop();
  })


  //Flip left
  .after(5000, function() {
    this.animate('flipLeft', 3000);
  })
  .after(3000, function() {
    this.stop();
  })


  //Spin around
  .after(5000, function() {
    this.clockwise(-0.5);
  })
  .after(5000, function() {
    this.stop();
  })

  //Land
  .after(1000, function() {
    this.stop();
    this.land();
  });

// emergency stop after 30sec

setTimeout(function() {
  client.stop();
  client.land();
}, 30000);
