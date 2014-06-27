'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, socket) {
  }).
  controller('DesignCtrl', function ($scope, $sce, socket) {
    $scope.updateQRCode = function() {
        var qrCode = qrcode(8, 'M');
        var text = $scope.qrCodeText;
        text = typeof text === 'undefined' ? '' : text;
        qrCode.addData(text);
        qrCode.make();
        var qrCodeImg = qrCode.createTableTag(4, 0);
        $scope.qrCodeImg = $sce.trustAsHtml(qrCodeImg);
    }

    $scope.backTextA = 'Bitcoin private key';
    $scope.backTextB = 'In Cryptography We Trust';
    $scope.backTextC = '2014';
    $scope.qrCodeText = 'QRCode Text';
    $scope.updateQRCode();
  }).
    controller('AboutCtrl', function ($scope) {
    // write Ctrl here
  });


