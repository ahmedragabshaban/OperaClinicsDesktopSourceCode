angular.module('starter.controllers', ["ngStorage"])
.controller('AppCtrl', function($ionicHistory,$state,$scope, $ionicModal, $timeout,$http, $sessionStorage,$window,searchdate,$rootScope,$ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.patpersonalData = {};
  $scope.medpersonalData = {};
  $scope.docpersonalData = {};
  $scope.addpostData = {};
  $scope.addcommentData = {};
  $scope.superuser ;
  $scope.signUpData = {};
  $scope.resetData = {};
  $scope.Doc={};
  $scope.AppointmentDetails={};
  $scope.desiredSearchData = {};
  $scope.desiredSearchData.speciality = '';
  $scope.desiredSearchData.insurance = '';
  $scope.desiredSearchData.location = '';
  $scope.desiredSearchData.selectedDate = new Date();
  $scope.desiredSearchData.page=0;
  $scope.desiredSearchData.status='first';
  //$scope.coreurl="http://localhost/bookmydoc_new_theme/";
  $scope.coreurl=coreurl;
  $scope.baseurl=baseurl;
  $scope.my_key=my_key;
  
console.log($scope.baseurl);
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    caching: false
  }).then(function(modal) {
    $scope.modal = modal;
  });
    $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope,
    caching: false
  }).then(function(signup_modal) {
    $scope.signup_modal = signup_modal;
  });

  $ionicModal.fromTemplateUrl('templates/forgot_password.html', {
    scope: $scope,
    caching: false
  }).then(function(reset_modal) {
    $scope.reset_modal = reset_modal;
  });
 $ionicModal.fromTemplateUrl('templates/signupdoctor.html', {
    scope: $scope,
    caching: false
  }).then(function(signupdoc_modal) {
    $scope.signupdoc_modal = signupdoc_modal;
  });
 $ionicModal.fromTemplateUrl('templates/signuppatient.html', {
    scope: $scope,
    caching: false
  }).then(function(signuppat_modal) {
    $scope.signuppat_modal = signuppat_modal;
  });
   $ionicModal.fromTemplateUrl('templates/signupmedical_rep.html', {
    scope: $scope,
    caching: false
  }).then(function(signupmed_modal) {
    $scope.signupmed_modal = signupmed_modal;
  });
  $ionicModal.fromTemplateUrl('templates/doc_modal.html', {
    scope: $scope,
    caching: false
  }).then(function(doc_modal) {
    $scope.doc_modal = doc_modal;
  });  $ionicModal.fromTemplateUrl('templates/addpost.html', {
    scope: $scope,
    caching: false
  }).then(function(addpost) {
    $scope.addpost = addpost;
  });

 $ionicModal.fromTemplateUrl('templates/personal.html', {
    scope: $scope,
    caching: false
  }).then(function(personal_modal) {
    $scope.personal_modal = personal_modal;
  });
 $ionicModal.fromTemplateUrl('templates/medpersonal.html', {
    scope: $scope,
    caching: false
  }).then(function(medpersonal_modal) {
    $scope.medpersonal_modal = medpersonal_modal;
  });

 $ionicModal.fromTemplateUrl('templates/doc_personal.html', {
    scope: $scope,
    caching: false
  }).then(function(doc_personal_modal) {
    $scope.doc_personal_modal = doc_personal_modal;
  });
 $ionicModal.fromTemplateUrl('templates/medical.html', {
    scope: $scope,
    caching: false
  }).then(function(medical_modal) {
    $scope.medical_modal = medical_modal;
  });
   $ionicModal.fromTemplateUrl('templates/medmedical.html', {
    scope: $scope,
    caching: false
  }).then(function(medmedical_modal) {
    $scope.medmedical_modal = medmedical_modal;
  });
$ionicModal.fromTemplateUrl('templates/doc_medical.html', {
    scope: $scope,
    caching: false
  }).then(function(doc_medical_modal) {
    $scope.doc_medical_modal = doc_medical_modal;
  });


  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.closeSignup = function() {
    $scope.signup_modal.hide();
  };
  $scope.closeForgot = function() {
    $scope.reset_modal.hide();
  };
   $scope.closesignupdoc = function() {
    $scope.signupdoc_modal.hide();
  };
   $scope.closesignuppat = function() {
    $scope.signuppat_modal.hide();
  };
   $scope.closesignupmed = function() {
    $scope.signupmed_modal.hide();
  };
  $scope.closeDoc_modal = function() {
    $scope.doc_modal.hide();
  };
    $scope.closeaddpostmodal = function() {
    $scope.addpost.hide();
  };
  $scope.closepersonal_modal = function() {
    $scope.personal_modal.hide();
  };
    $scope.closemedpersonal_modal = function() {
    $scope.medpersonal_modal.hide();
  };
  $scope.closedoc_personal_modal = function() {
    $scope.doc_personal_modal.hide();
  }; 
   $scope.closemedical_modal = function() {
    $scope.medical_modal.hide();
  };
     $scope.closemedmedical_modal = function() {
    $scope.medmedical_modal.hide();
  };
   $scope.closedoc_medical_modal = function() {
    $scope.doc_medical_modal.hide();
  };
 
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
 $scope.addpost = function() {
    $scope.addpostmodal.show();
  };
  $scope.signup = function() {
    $scope.signup_modal.show();
  };
    $scope.reset = function() {
    $scope.reset_modal.show();
  };
    $scope.signupdoc = function() {
    $scope.signupdoc_modal.show();
  };
     $scope.signuppat = function() {
    $scope.signuppat_modal.show();
  };
     $scope.signupmed = function() {
    $scope.signupmed_modal.show();
  };
  $scope.doc_modal = function() {
    $scope.doc_modal.show();
  };
 $scope.personal_modal = function() {
    $scope.personal_modal.show();
  }; 
  $scope.medpersonal_modal = function() {
    $scope.medpersonal_modal.show();
  };
   $scope.doc_personal_modal = function() {
    $scope.doc_personal_modal.show();
  };
   $scope.medical_modal = function() {
    $scope.medical_modal.show();
  };
     $scope.medmedical_modal = function() {
    $scope.medmedical_modal.show();
  };
    $scope.doc_medical_modal = function() {
    $scope.doc_medical_modal.show();
  };
  $scope.join = function() {
    $scope.modal.hide();
    $scope.signup_modal.show();
  };
  


$scope.submitted= false;$scope.loginError =false;$sessionStorage.userSessionStatus = false;$scope.noSessionStatus = true;
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $ionicLoading.show({
      template: '<img  src="img/loading.gif" />'
    });
    //check role
    var url='/loginRole';
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.loginData,
    }).then(function mySucces(response) {
        $scope.loginDetails = response.data; 
        console.log(response.data);
    $scope.loginData.usertype=response.data;   

$scope.superuser=response.data; 
  //signing in
    var url='/Signin';
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.loginData,
    }).then(function mySucces(response) {
        $scope.loginDetails = response.data; 

        // $sessionStorage.userSession = response.data;
        // console.log($sessionStorage.SessionMessage);
        if($scope.loginDetails.error.status===false){
          $sessionStorage.userSession = response.data;
          $scope.userSession = response.data;
          $scope.userSessionStatus = true;
          $scope.AppointmentDetails.details = true;
          $scope.noSessionStatus = false;
          $timeout(function() {
            $ionicLoading.hide();
            $scope.closeLogin();
          }, 1000);
          
        }else{
          $scope.loginError = $scope.loginDetails.error.status;
          $scope.loginErrorMsg = $scope.loginDetails.error.msg;
          $timeout(function() {
            $ionicLoading.hide();
          }, 1000);
        }
    });
      });
  }
  $scope.patientupdate = function() {

    var url='/updatepatpersonal';
    console.log('data runeed');
    console.log($scope.patpersonalData);
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.patpersonalData,
    }).then(function mySucces(response) {
      
console.log('webservice response');
      });
  }
    $scope.medical_repupdate = function() {

    var url='/updatemedpersonal';
    console.log('data runeed');
    console.log($scope.medpersonalData);
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.medpersonalData,
    }).then(function mySucces(response) {
      
console.log('webservice response');
      });
  }
   $scope.doctorupdate = function() {

    var url='/updatedocpersonal';
    console.log('data runeed');
    console.log($scope.docpersonalData);
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.docpersonalData,
    }).then(function mySucces(response) {
      
console.log('webservice response');
      });
  }
   $scope.addpostt = function() {

    var url='/addpostData';
    console.log('data runeed');
    console.log($scope.addpostData);
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.addpostData,
    }).then(function mySucces(response) {
       $scope.addpostData = response.data; 
       console.log(response.data);

         $timeout(function() {                            
              $scope.closeaddpostmodal();
              $scope.get_feeds();
          }, 1000);
     
      });
  }
  $scope.addcommentt = function(id) {
    var url='/addcommentData';
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data:{"comments": $scope.addcommentData, "id":id },
    }).then(function mySucces(response) {
       $scope.addcommentData = response.data; 
       console.log(response.data);
           console.log('response');

      });
  }


    

   $scope.medical_repupdate = function() {

    var url='/updatemedical_reppersonal';
    console.log('data runeed');
    console.log($scope.medpersonalData);
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
      data: $scope.medpersonalData,
    }).then(function mySucces(response) {
      
console.log('webservice response');
      });
  }
    $scope.doSignup = function() {
      $ionicLoading.show({
        template: '<img  src="img/loading.gif" />'
      });
      $scope.signUpData.usertype='2';
      var url='/Signup';
      $http({
        url: $scope.baseurl+url, 
        method: "POST",
        data: $scope.signUpData,
      }).then(function mySucces(response) {
          $scope.signupDetails = response.data; 
          $scope.signupError = $scope.signupDetails.status;
          $scope.signupMessage = $scope.signupDetails.msg;
          $ionicLoading.hide();
          $ionicHistory.clearCache();           
          $timeout(function() {                            
            $scope.login();
            $scope.closesignuppat();
            $scope.closeSignup();
          }, 3000);

      });
    }
    

      $scope.doSignup_doctor = function() {
      $ionicLoading.show({
        template: '<img  src="img/loading.gif" />'
      });
      $scope.signUpData.usertype='1';
      var url='/Signup';
      $http({
        url: $scope.baseurl+url, 
        method: "POST",
        data: $scope.signUpData,
      }).then(function mySucces(response) {
          $scope.signupDetails = response.data; 
          $scope.signupError = $scope.signupDetails.status;
          $scope.signupMessage = $scope.signupDetails.msg;
          $ionicLoading.hide();
           $ionicHistory.clearCache();
          $timeout(function() {                
            $scope.login();
            $scope.closesignupdoc();
              $scope.closeSignup();
          }, 3000);
      });
    }
      $scope.doSignupmedical_rep = function() {
      $ionicLoading.show({
        template: '<img  src="img/loading.gif" />'
      });
      $scope.signUpData.usertype='5';
      var url='/Signup';
      $http({
        url: $scope.baseurl+url, 
        method: "POST",
        data: $scope.signUpData,
      }).then(function mySucces(response) {
          $scope.signupDetails = response.data; 
          $scope.signupError = $scope.signupDetails.status;
          $scope.signupMessage = $scope.signupDetails.msg;
          $ionicLoading.hide();
          $ionicHistory.clearCache();
          $timeout(function() {            
          $scope.login();
          $scope.closesignupmed();
         $scope.closeSignup();
          }, 3000);
      });
    }
    $ionicHistory.clearCache();
    $scope.my_booking =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.my_booking');
    }
$scope.my_bookinghistory =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.my_bookinghistory');
    }
    $scope.signuppatient =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.signuppatient');
        $scope.closeSignup();
    }
  $scope.signupmedical_rep =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.signupmedical_rep');
        $scope.closeSignup();
    }
  $scope.signupdoctor =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.signupdoctor');
        $scope.closeSignup();
    }


     $scope.feed =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.feed');
    }
        $scope.pat_profile =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.pat_profile');
    }
       $scope.med_profile =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.med_profile');
    }
    $scope.doc_profile =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
          $state.go('app.doc_profile');
    }
$scope.app_setting =function(){
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
          $state.go('app.app_setting');
    }
    
    $scope.choose_profile =function(){
      if ($scope.superuser==1) {
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
          $state.go('app.doc_profile');
      }
        if ($scope.superuser==0) {
     $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.pat_profile');
        }
            if ($scope.superuser==5) {
     $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.med_profile');
        }
    }
 $scope.choose_booking =function(){
      if ($scope.superuser==1) {
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
          $state.go('app.my_bookingdoc');
      }
        if ($scope.superuser==0) {
     $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.my_booking');
        }
            if ($scope.superuser==5) {
     $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go('app.my_bookingmed');
        }
    }

    $scope.doForgot =function(){
      //console.log($scope.resetData);
    }

    $scope.Logout = function() {
      $sessionStorage.userSession = '';
      $scope.userSessionStatus = false;
      $scope.noSessionStatus = true;
      $window.location.href = '#/app/bmd-home';
    }

    $scope.get_appointments = function(){
      console.log('appointment');
      $scope.loading=true;
      $scope.loadingpart=false;
      $ionicHistory.nextViewOptions({ disableBack: true });
      var url='/get_appointment';
      $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id':$scope.userSession.userID,'userType':$scope.userSession.userType},
        }).then(function mySucces(response) {
            $scope.AppointmentList = response.data; 
            console.log($scope.AppointmentList);
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.AppointmentList.status) ? true :false;
              $scope.AppointmentStatus = ($scope.AppointmentList.status==false) ? true :false;
            }, 1000);
        });
      };
 $scope.get_appointmentshistory = function(){
      console.log('appointment');
      $scope.loading=true;
      $scope.loadingpart=false;
      $ionicHistory.nextViewOptions({ disableBack: true });
      var url='/get_appointment';
      $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id':$scope.userSession.userID,'userType':$scope.userSession.userType},
        }).then(function mySucces(response) {
            $scope.AppointmentList = response.data; 
            console.log($scope.AppointmentList);
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.AppointmentList.status) ? true :false;
              $scope.AppointmentStatus = ($scope.AppointmentList.status==false) ? true :false;
            }, 1000);
        });
      };
   $scope.get_appointmentsmed = function(){
      console.log('appointment');
      $scope.loading=true;
      $scope.loadingpart=false;
      $ionicHistory.nextViewOptions({ disableBack: true });
      var url='/get_appointmentmed';
      $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id':$scope.userSession.userID,'userType':$scope.userSession.userType},
        }).then(function mySucces(response) {
            $scope.AppointmentList = response.data; 
            console.log($scope.AppointmentList);
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.AppointmentList.status) ? true :false;
              $scope.AppointmentStatus = ($scope.AppointmentList.status==false) ? true :false;
            }, 1000);
        });
      };



$scope.get_feeds = function(){
      console.log('get_feed');
      $scope.loading=true;
      $scope.loadingpart=false;
      $ionicHistory.nextViewOptions({ disableBack: true });
      var url='/get_feed';
      $http({
          url: $scope.baseurl+url, 
          method: "POST",
        }).then(function mySucces(response) {
            $scope.feedsList = response.data; 
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.feedsList.status) ? true :false;
              $scope.feedsStatus = ($scope.feedsList.status==false) ? true :false;
            }, 1000);
        });
      };
      $scope.view_doc = function(id){
        $scope.doc_popup_id=id;
        //console.log(id);
        var url='/get_doctor_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.docpopup = response.data; 
            $scope.doc_modal.show();
        });
      }
       $scope.view_personal = function(id){
        $scope.personal_popup_id=id;
        //console.log(id);
        var url='/get_patient_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.personalpopup = response.data; 
            $scope.personal_modal.show();
        });
      }
        $scope.view_medpersonal = function(id){
        $scope.personal_popup_id=id;
        //console.log(id);
        var url='/get_medical_rep_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.personalpopup = response.data; 
            $scope.medpersonal_modal.show();
        });
      }
      $scope.view_doc_personal = function(id){
        $scope.doc_personal_popup_id=id;
        //console.log(id);
        var url='/get_patient_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.doc_personalpopup = response.data; 
            $scope.doc_personal_modal.show();
        });
      }
       $scope.view_medical= function(id){
        $scope.medical_popup_id=id;
        //console.log(id);
        var url='/get_patient_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.medicalpopup = response.data; 
            $scope.medical_modal.show();
        });
      }
          $scope.view_medmedical= function(id){
        $scope.medical_popup_id=id;
        //console.log(id);
        var url='/get_medical_rep_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.medicalpopup = response.data; 
            $scope.medmedical_modal.show();
        });
      }
      $scope.view_doc_medical= function(id){
        $scope.doc_medical_popup_id=id;
        //console.log(id);
        var url='/get_patient_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.doc_medicalpopup = response.data; 
            $scope.doc_medical_modal.show();
        });
      }
       $scope.view_doc_profile = function(id){
        $scope.doc_popup_id=id;

        var url='/get_doctor_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.docpopup = response.data; 
          
        });
      }
      // $scope.view_pat_personal = function(id){
      //  $scope.pat_popup_id=id;
      //   //console.log(id);
      //   var url='/get_patient_info';
      //   $http({
      //     url: $scope.baseurl+url, 
      //     method: "POST",
      //     data: {'user_id': id},
      //   }).then(function mySucces(response) {
      //       $rootScope.patpopup = response.data; 
      //                 $scope.personal_modal.show();

      //   });
      // }
            $scope.view_pat_profile = function(id){
        $scope.pat_popup_id=id;
        //console.log(id);
        var url='/get_patient_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.patpopup = response.data; 

        });
      }
       $scope.view_med_profile = function(id){
        $scope.med_popup_id=id;
        //console.log(id);
        var url='/get_medical_rep_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
                  console.log(response);

            $rootScope.medpopup = response.data; 

        });
      }
      $scope.Doc.date = (searchdate.get()=='')? new Date() :searchdate.get();

      $scope.loading = true; 
      $scope.loadingpart = false;

      $rootScope.updateDoc = function(id,fname,lname,speciality,rating,image,address,status){
        $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $window.location.href='#app/doctor';
        $scope.Doc.id = (id=='')? $scope.Doc.id : id;
        var date = $scope.Doc.date ;
        date.setDate( $scope.Doc.date.getDate());
        $scope.Doc.endDate = $scope.Doc.date;
        var date1 = $scope.Doc.endDate ;
        date1.setDate( $scope.Doc.endDate.getDate());
        $scope.Doc.fname = fname;
        $scope.Doc.lname = lname;
        $scope.Doc.speciality = speciality;
        $scope.Doc.rating = rating;
        $scope.Doc.image = image;
        $scope.Doc.address = address;
        $scope.Doc.status = status;
        console.log($scope.loading);
        var url='/get_doctor_details';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'docData': $scope.Doc},
        }).then(function mySucces(response) {
          $scope.Doc.resultData = response.data;
          $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true;
          }, 1000);
          date1.setDate( $scope.Doc.endDate.getDate()+4);
          $scope.doc_modal.hide();
          
        });
    }
$scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
  $scope.selectedDate =($scope.selectedDate=='')?  new Date() : $scope.selectedDate;

$scope.slide= function(myTransition) {
  $rootScope.transitionClass ='test';
    $timeout(function(){
      $rootScope.transitionClass = myTransition;
    },500);
}

})





.controller('BMDCtrl', function($ionicModal,$rootScope,$scope, $stateParams,$http,speciality,location,insurance,searchdate,$window,$timeout,$filter,$ionicLoading) {
  $scope.apnt_init = function(){
	  $scope.select_insurance = '';
	  $scope.select_reason = '';
    //$stateParams.apnt_date_time = $stateParams.apnt_date_time.replace(/([T,a,p])/g, ' $1');
    // var date = new Date($stateParams.apnt_date_time).getTime();
    // var offset = new Date($stateParams.apnt_date_time).getTimezoneOffset();
    // var selectedDate = date - offset;
    // $scope.AppointmentDetails.selectedDate = new Date($stateParams.apnt_date_time).getTime();
    // console.log(new Date(Date.parse($scope.AppointmentDetails.apnt_date_time)).toUTCString());
    $scope.AppointmentDetails.selectedDate = $stateParams.apnt_date_time;

    var url='/get_insurance_list';
    $http({
        url: $scope.baseurl+url, 
        method: "POST",
      }).then(function mySucces(response) {
          $scope.AppointmentDetails.selectionDetails = response.data; 
      });

      var url='/visit_categories';
    $http({
        url: $scope.baseurl+url, 
        method: "POST",
      }).then(function mySucces(response) {
          $scope.AppointmentDetails.visit_categories = response.data;
      });
    }
    
    $scope.slide_apnt= function(myTransition,prev,next) {
      $rootScope.transitionClass ='sample';
        $timeout(function(){
          $rootScope.transitionClass = myTransition;
          $scope.AppointmentDetails.details = (next=="details") ? true : false;
          $scope.AppointmentDetails.confirm = (next=="confirm") ? true : false;
          $scope.AppointmentDetails.success = (next=="success") ? true : false;
        },300);
    }

   //check app_config
    var url='/appkey_validator'; 
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
    data: {'my_key': $scope.my_key},
    }).then(function mySucces(response) {  
      $timeout(function(){
        $ionicLoading.hide();
      },1000);           
      if(response.data=='false'){
        $window.location.href = '#/app/bmd-blocked';
        console.log('bmd-blocked');
      }
    });



    $scope.search = function(search_text){
      $window.location.href = '#/app/search_list/'+search_text;
      //console.log(search_text);
      
    }
    $scope.loading = true; 
    $scope.loadingpart = false;
    $scope.searchList = function(){
      var url='/act_search_bar';
      $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'search_text': $stateParams.search_text},
        }).then(function mySucces(response) {
            $scope.searchResponse = response.data;
            //console.log($scope.searchResponse);
            //$window.location.href = '#/app/search_list';
            $timeout(function() {
              $scope.loading = false; 
              $scope.loadingpart = ($scope.searchResponse.location == null && $scope.searchResponse.user == null && $scope.searchResponse.speciality == null && $scope.searchResponse.insurance == null && $scope.searchResponse.languages == null ) ? false : true;
              $scope.noMoreItems = ($scope.searchResponse.location == null && $scope.searchResponse.user == null && $scope.searchResponse.speciality == null && $scope.searchResponse.insurance == null && $scope.searchResponse.languages == null ) ? true : false; 
            }, 1000);
        });
    }
     $scope.view_search_list_doc = function(id){
        $scope.doc_popup_id=id;
        //console.log(id);
        var url='/get_doctor_info';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'user_id': id},
        }).then(function mySucces(response) {
            $rootScope.docpopup = response.data; 
            $scope.doc_modal.show();
        });
      }

    $scope.test = function(test){
      $scope.srchReason = test;
    }

    $scope.bookAppointment = function(){
      $ionicLoading.show({
        template: '<img  src="img/loading.gif" />'
      });
      $scope.Appointment ={};
      $scope.Appointment.doctor_id = $scope.Doc.id;
      // $scope.Appointment.apnttime = $filter('date')($scope.AppointmentDetails.selectedDate, "EEEE,MMMM dd,yyyy")+" at "+$filter('date')($scope.AppointmentDetails.selectedDate, "hh:mm a");
      $scope.Appointment.apnttime = $scope.AppointmentDetails.selectedDate;
      $scope.Appointment.patiendid = $scope.userSession.userID;
      $scope.Appointment.apnt_note = $scope.srchReason;
      $scope.Appointment.email = $scope.Doc.doctorId;
      $scope.Appointment.name = $scope.userSession.name;
      //$scope.reason = $scope.visit_reason;
     // $scope.insurance = $scope.insurance;
      $scope.Appointment.docname = $scope.Doc.fname +" "+$scope.Doc.lname ;
      console.log($scope.Appointment);
        var url='/act_confirm_apnt';
        $http({
            url: $scope.baseurl+url, 
            method: "POST",
            data: {'Appointment': $scope.Appointment,'reason': $scope.select_reason, 'insurance': $scope.select_insurance},
          }).then(function mySucces(response) {
              $scope.Appointment.response = response.data;
              //$scope.AppointmentDetails.confirm = false;
              //$scope.AppointmentDetails.success=true; 
              if(response.data.status==true){
                $timeout(function() {
                  $ionicLoading.hide();
                  $scope.slide_apnt('slidein-from-right','confirm','success');
                }, 1000);
              }else{
                $timeout(function() {
                  $ionicLoading.hide();
                }, 1000);
              }
          });
    }

	$scope.appinsurance = function(item){
		 console.log(item);
		 $scope.select_insurance = item;
	}
	$scope.appreason = function(item){
		 console.log(item);
		 $scope.select_reason= item;
	}
  //console.log($scope.AppointmentDetails);
  $scope.selectionname = $stateParams.selectionId;
  var url='/get_selection_details';
  $scope.loading = true; 
  $scope.loadingpart = false;
  console.log($scope.loading);
  switch ($scope.selectionname) {
            case 'speciality':
                speciality.set('select any one');
                delete $scope.desiredSearchData.speciality;
                break;
            case 'insurance':
                insurance.set('I ll select my insurance company later.');
                delete $scope.desiredSearchData.insurance;
                break;
            case 'location':
                location.set('select your location');
                delete $scope.desiredSearchData.location;
                break;
            case 'languages':
                location.set('I ll select my insurance company later.');
                delete $scope.desiredSearchData.languages;
                break;
            default:

        }

  $http.post($scope.baseurl+url, { data: { 'selectionname': $scope.selectionname } })
  .success(function(response) {
    $scope.selectionDetails = response;
    $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
  });

    $scope.desiredSpeciality = speciality.get();
    $scope.desiredInsurance = insurance.get();
    $scope.desiredLocation = location.get();
    $scope.clickfunction =function(id,data,type,key){
      
      switch (type) {
            case 'speciality':
                speciality.set(data);
                $scope.desiredSearchData.speciality = id;
                break;
            case 'insurance':
                insurance.set(data);
                $scope.desiredSearchData.insurance = id;
                break;
            case 'location':
                location.set(data);
                $scope.desiredSearchData.location = id;
                break;
            case 'languages':
                location.set(data);
                $scope.desiredSearchData.languages = id;
                break;
            default:

        }
        var url=(key==null) ? '#/app/bmd-home' : '#/app/search' ;
      $window.location.href = url;
    }
    

 $ionicModal.fromTemplateUrl('templates/calendar.html', {
    scope: $scope,
    caching: false
  }).then(function(calendar_modal) {
    $scope.calendar_modal = calendar_modal;
  });

  $scope.calendar = function() {
    $scope.loading = true;
    $scope.loadingpart = false;
      var url='/get_calendar_details';
    $http({
      url: $scope.baseurl+url, 
      method: "POST",
    }).then(function mySucces(response) {
      $scope.calenderDetails = response.data;
      
      $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
    });

    $scope.calendar_modal.show();
  };

  // $scope.personal = function() {
  //   $scope.loading = true;
  //   $scope.loadingpart = false;
  //     var url='/get_patient_info';
  //   $http({
  //     url: $scope.baseurl+url, 
  //     method: "POST",
  //   }).then(function mySucces(response) {
  //     $scope.PersonalDetails = response.data;
      
  //     $timeout(function() {
  //           $scope.loading = false; 
  //           $scope.loadingpart = true; 
  //         }, 1000);
  //   });

  //   $scope.personal_modal.show();
  // };

  $scope.calender_fetch = function(month,year){
    $scope.loading = true;
    $scope.loadingpart = false; 
     var url='/get_calendar_details';
    $http({
      url: $scope.baseurl+url, 
      method: "GET",
      params: {'month': month,'year':year},
    }).then(function mySucces(response) {
      $scope.calenderDetails = response.data;
      $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 1000);
    });
  };

  $scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
  $scope.selectedDate =($scope.selectedDate=='')?  new Date() : $scope.selectedDate;
  $scope.desiredSearchData.selectedDate =$scope.selectedDate;
  $scope.selectedclass = 'none';
  //$scope.loading = false;
  $scope.loadingpart = false;
  $scope.updateDate = function(day,date){
    $scope.selectedDay = day;
    $scope.selectedDate = date;
    var HHmmss = $filter('date')(new Date(), 'HH:mm:ss');
    var selectedDate = date+"T"+HHmmss;
    $scope.desiredSearchData.selectedDate =new Date(selectedDate);
    searchdate.set($scope.desiredSearchData.selectedDate);
    $scope.selectedclass = ($scope.selectedclass == 'none') ? 'selected' : 'none';
  }

  $scope.closeCalendar = function() {
    $scope.calendar_modal.hide();
  };
  
  $scope.findDoc = function(){
    $window.location.href = '#/app/search';
  };







})
.controller('searchCtrl', function($ionicModal,$rootScope,$scope, $stateParams,$http,speciality,location,insurance,searchdate,$window,$timeout,$filter) {
    $scope.desiredSearchData.page=0;
    $scope.selectedDay = (searchdate.get()=='')? new Date() :searchdate.get();
    $scope.selectedDate = (searchdate.get()=='')? new Date() :searchdate.get();
    console.log($scope.selectedDate);
    $scope.questions = [];
    $scope.loadmore = function(NumOfFeedToLoad){
      $scope.noMoreItemsAvailable = false;
      $scope.noMoreItems = false;
      var page = $scope.desiredSearchData.page;
      $scope.desiredSearchData.page=++page;
      //console.log(page);
      $scope.desiredSearchData.selectedDate=$filter('date')($scope.selectedDate, "yyyy-MM-dd hh:mm a");
      //console.log($scope.desiredSearchData.status);
      var url='/get_search_details';
      $http({
        url: $scope.baseurl+url, 
        method: "POST",
        data: {'searchData': $scope.desiredSearchData},
      }).then(function mySucces(response) {
        $scope.searchResultData =response.data;
        if($scope.searchResultData.hasOwnProperty('profile_details'))
        {
          $scope.questions = $scope.questions.concat(response.data.profile_details);
        }
        console.log($scope.questions.length,response.data.length);
        //$scope.noMoreItemsAvailable = ($scope.questions.length >= response.data.length)? true : false;
        //$scope.noMoreItems = ($scope.questions.length >= response.data.length)? true : false;
        console.log($scope.questions.length,response.data.length);
        $scope.noMoreItemsAvailable = ($scope.questions.length >= response.data.length)? true : false;
        console.log('noMoreItemsAvailable'+$scope.noMoreItemsAvailable);
        console.log(response.data.length==0,$scope.searchResultData.hasOwnProperty('profile_details'));
        $scope.noMoreItems = (response.data.length==0 && $scope.searchResultData.hasOwnProperty('profile_details')) ? true : false;
        console.log($scope.noMoreItems);
        console.log($scope.searchResultData.hasOwnProperty('profile_details'));
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.setDate = function(type){
      var date = $scope.selectedDate ;
      date.setDate((type=='next')? $scope.selectedDate.getDate()+1 : $scope.selectedDate.getDate()-1);
      searchdate.set(date);
      $scope.desiredSearchData.status=(type=='next')? 'next' : 'prev';
      $scope.desiredSearchData.selectedDate =$filter('date')(date, "yyyy-MM-dd hh:mm a");
      $scope.desiredSearchData.page=0;
      //angular.element($("[my-directive]")).html('');
      $scope.questions = [];
      $scope.loadmore();
    };
    

        $scope.Doc.date = $scope.selectedDate;
 
    
    $scope.single_calendar = function(status){
      $scope.loading = true; 
      $scope.loadingpart = false;
      //console.log(status);
      $scope.Doc.resultData ='';
      var date = $scope.Doc.date ;
      date.setDate((status=='next')? $scope.Doc.date.getDate()+5 : $scope.Doc.date.getDate()-5 );
      var date1 = $scope.Doc.endDate ;
      date1.setDate((status=='next')? $scope.Doc.endDate.getDate()+5 : $scope.Doc.endDate.getDate()-5 );
      $scope.Doc.status = status;
      var url='/get_doctor_details';
        $http({
          url: $scope.baseurl+url, 
          method: "POST",
          data: {'docData': $scope.Doc},
        }).then(function mySucces(response) {
          $scope.Doc.resultData = response.data;
          $timeout(function() {
            $scope.loading = false; 
            $scope.loadingpart = true; 
          }, 3000);
        });
    }

    $scope.apnt_navigate = function(date,time){
       console.log(date,time);
       console.log(time);
       time = time.replace("am", "");
       time = time.replace("pm", "");

      var curr_dte= Math.round(new Date().getTime()/1000);
      var event_date = Math.round(new Date(date+" "+time).getTime()/1000);
       
      
      console.log(event_date);
      console.log(curr_dte);
      // alert('');
       if(curr_dte > event_date){


          alert('Booking is not Available');
          //return false;
        }
        else{

      $scope.AppointmentDetails.details = true;
      $scope.AppointmentDetails.confirm = false;
      $scope.AppointmentDetails.success = false;
      $window.location.href = '#/app/appointment/'+date+'T'+time;
   }
    }

});
