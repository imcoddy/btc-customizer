'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
  }).
  controller('MyCtrl1', function ($scope, $sce, socket) {
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });

    var qrCode = qrcode(3, 'M');
    var text = 'test'; //TODO replace dynamicly later
    text = text.replace(/^[\s\u3000]+|[\s\u3000]+$/g, '');
    qrCode.addData(text);
    qrCode.make();
    var qrCodeImg = qrCode.createImgTag(4);
    $scope.qrCodeImg = $sce.trustAsHtml(qrCodeImg);
  }).
    controller('MyCtrl2', function ($scope) {
    // write Ctrl here
  });
