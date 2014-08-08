re('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client

  //Go up a little higher
  .after(1000, function() {
    this.up(1);
  })
  .after(1000, function() {
    this.up(1);
  })
  .after(2000, function() {
    this.stop();
  })


  //Flip ahead
  .after(3000, function() {
    this.animate('flipAhead', 1000);
  })
  .after(1000, function() {
    this.stop();
  })


  //Flip right
  .after(3000, function() {
    this.animate('flipRight', 1000);
  })
  .after(1000, function() {
    this.stop();
  })


  //Flip back
  .after(3000, function() {
    this.animate('flipBehind', 1000);
  })
  .after(1000, function() {
    this.stop();
  })


  //Flip left
  .after(3000, function() {
    this.animate('flipLeft', 1000);
  })
  .after(1000, function() {
    this.stop();
  })


  //Spin around
  .after(3000, function() {
    this.animate('turnaround', 1000);
  })
  .after(1000, function() {
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
