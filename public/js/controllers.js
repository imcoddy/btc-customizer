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
    };

    $scope.updatePrice = function() {
      $scope.infoPrice = $scope.infoNum * 60;
      return $scope.infoPrice;
    };

    $scope.backTextA = 'Bitcoin private key';
    $scope.backTextB = 'In Cryptography We Trust';
    $scope.backTextC = '2014';
    $scope.qrCodeText = 'QRCode Text';
    $scope.infoNum = 1;
    $scope.infoPrice = $scope.updatePrice();
    $scope.updateQRCode();
  }).
  controller('GalleryCtrl', function ($scope, $sce) {
    // Set of Photos
    $scope.photos = [
        {src: '/image/1.jpg', desc: ''},
        {src: '/image/2.jpg', desc: ''},
        {src: '/image/3.jpg', desc: ''},
        {src: '/image/4.jpg', desc: ''},
        {src: '/image/design.jpg', desc: ''},
        {src: '/image/detail.jpg', desc: ''},
        {src: '/image/V.jpg', desc: ''},
        {src: '/image/zbc.jpg', desc: ''},
        {src: '/image/ptr.jpg', desc: ''}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

    setInterval(function() {
      var el = document.getElementById('btn-next');
      angular.element(el).triggerHandler('click');
    }, 7500);
  }).
  controller('AboutCtrl', function ($scope, $sce) {
    $scope.getDonateQRCode = function() {
      var qrCode = qrcode(8, 'M');
      var text = '1MCoddyA6qWitWEq33GUXLnK5aH1APPPAf';
      qrCode.addData(text);
      qrCode.make();
      var qrCodeImg = qrCode.createTableTag(4, 0);
      return $sce.trustAsHtml(qrCodeImg);
    };
    $scope.donateQRCode = $scope.getDonateQRCode();
    console.log($scope.donateQRCode );
  });


