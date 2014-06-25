'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
  }).
  controller('DesignCtrl', function ($scope, $sce, socket) {
    $scope.updateQRCode = function() {
        var qrCode = qrcode(3, 'M');
        var text = $scope.qrCodeText;
        text = typeof text === 'undefined' ? '' : text;
        qrCode.addData(text);
        qrCode.make();
        var qrCodeImg = qrCode.createTableTag(4, 0);
        $scope.qrCodeImg = $sce.trustAsHtml(qrCodeImg);
    }

    $scope.backTextA = 'Text A';
    $scope.backTextB = 'Text B';
    $scope.backTextC = 'Text C';
    $scope.qrCodeText = 'QRCode Text';
    $scope.updateQRCode();
  }).
    controller('AboutCtrl', function ($scope) {
    // write Ctrl here
  });


