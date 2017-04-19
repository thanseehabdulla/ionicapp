

angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $http) {


$scope.submit2 = function (mobile) {

var datas = {
'mobile': $scope.mobile,
'userType': 'patient'
};

var req = {
    method: 'POST',
    url: 'http://vqtest.southeastasia.cloudapp.azure.com/VraiQueue/service/validateUser',
    headers: {
        'Content-Type': 'application/form-data'
    },
    params: datas
};
//
$http(req).then(function (response) {
    // success function
     window.location.replace("#/tab/dash");
     alert("success"+JSON.stringify(response));
     $scope.msg = "Service Exists";
$scope.statusval = response.status;
$scope.statustext = response.data;
$scope.headers = response.config;
    //  console.error(JSON.stringify(response));
}, function (response) {
    // Failure Function
     $scope.msg = "Service not Exists";
$scope.statusval = response.status;
$scope.statustext = response.data;
$scope.headers = response.config;
     alert(JSON.stringify(response));




});

};

})

.controller('loginCtrl', function($scope , sharedConn,$state ) {

	var XMPP_DOMAIN  = 'jabberpl.org'; // Domain we are going to be connected to.

	$scope.goToRegister=function(){
		$state.go('register', {}, {location: "replace", reload: true});
	}


	//sharedConn.login(xmpp_user,XMPP_DOMAIN,xmpp_pass);  // To automate login

	$scope.login=function(user){
		sharedConn.login(user.jid,XMPP_DOMAIN,user.pass);
	}

})

.controller('myCtrl', function($scope, $ionicActionSheet) {


// show action sheet in js
   $scope.triggerActionSheet = function() {

      // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
            { text: 'Edit 1' },
            { text: 'Edit 2' }
         ],

         destructiveText: 'Delete',
         titleText: 'Action Sheet',
         cancelText: 'Cancel',

         cancel: function() {
            // add cancel code...
         },

         buttonClicked: function(index) {
            if(index === 0) {
               // add edit 1 code
            }

            if(index === 1) {
               // add edit 2 code
            }
         },

         destructiveButtonClicked: function() {
            // add delete code..
         }
      });
   };

})

.controller('myCtrl3', function($scope, $ionicLoading) {

   $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Loading...'

      });

   };

   $scope.hideLoading = function(){
      $ionicLoading.hide();
   };
})



.controller('myCtrl2', function($scope, $ionicBackdrop, $timeout) {

   $scope.showBackdrop = function() {
      $ionicBackdrop.retain();

      $timeout(function() {
         $ionicBackdrop.release();
      }, 3000);
   };




$scope.checkboxModel={
  value1:false,
  value2:false
}






})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
