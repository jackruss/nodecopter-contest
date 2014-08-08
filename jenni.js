var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.disableEmergency();

client.takeoff();

client
    .after(100, function () {
        this.animateLeds('fire', 2, 2);
    })
    .after(2000, function () {
        this.up(0.3);
        this.front(0.3);
        this.clockwise(0.5);
    })
    .after(5000, function () {
        this.down(0.3);
        this.front(0.3);
        this.counterClockwise(0.5);
    })
    .after(5000, function () {
        this.animate('phiDance', 2000);
        this.animateLeds('redSnake', 5, 2)
    })
    .after(2500, function () {
        this.animate('thetaDance', 2000);
        this.animateLeds('leftGreenRightRed', 7, 2);
    })
    .after(2500, function () {
        this.up(0.7);
    })
    .after(3000, function () {
        this.animate('flipBehind', 500);
        this.animateLeds('rightMissile', 10, 1);
    })
    .after(1000, function () {
        this.animate('flipRight', 500);
        this.animateLeds('blinkGreenRed', 10, 1);
    })
    .after(1000, function () {
        this.animate('doublePhiThetaMixed', 1500);
    })
    .after(2000, function () {
        this.animate('wave', 5000);
        this.animateLeds('blinkOrange', 10, 5);
    })
    .after(5000, function () {
        this.stop();
        this.land();
    });

setTimeout(function () {
    client.stop();
    client.land();
}, 30000);