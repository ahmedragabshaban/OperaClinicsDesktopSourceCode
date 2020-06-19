// var settings = require('electron-settings');
const axios = require('axios');

$(document).ready(function() {




$("#loginform").submit(function(e) {
    e.preventDefault();
   var email= $("#loginemail").val();
   var password=$("#loginpass").val();
var url='/signin';

axios.post(baseurl+url, {
    email: email,
    password: password
  })
  .then(function (response) {
    var datalogin =response.data;
  
if (response.data.error.status==true) {
	let msg=datalogin.error.msg[0].message;
if (msg=='Invalid Login Details') {
msg='بيانات دخول غير صحيحة';
}
$("#msg").append(msg);

}
else{


    if (datalogin.userID !=='') {
    window.location.assign('index.html');
storeLoginAndPassword(datalogin.email,datalogin.userID);
mainWindow.maximize();

    }

    }

  })
  .catch(function (error) {
    console.log(error);
  });

  });


$("#signupform").submit(function(e) {
    e.preventDefault();
       var usertype=1;
   var email= $("#signupemail").val();
   var password=$("#signuppassword").val();
     var firstname= $("#signupfirstname").val();
   var lastname=$("#signuplastname").val();
     var city= $("#getcity").val();
   var phone=$("#signupphone").val();
  var gender= $("#signupgender").val();
var url='/Signupdoctor';
axios.post(baseurl+url, {
    usertype: usertype,
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    city: city,
    phone: phone,
    gender: gender  })
  .then(function (response) {
    var datalogin =response.data;
console.log(datalogin);
//     if (datalogin.email && datalogin.name && datalogin.userType && datalogin.userID !=='') {
   window.location.assign('page-login.html');
// storeLoginAndPassword(datalogin.email,datalogin.userID);

//     }

  })
  .catch(function (error) {
    console.log(error);
  });

  });


$("#newpat").submit(function(e) {
  e.preventDefault();

var firstname=$("#newpatfirst").val();
var lastname=$("#newpatlast").val();
var phone=$("#newpatphone").val();
var booktime=$("#booktime").val();
var bookdate=$("#bookdate").val();
var name = firstname +' '+lastname;

var appointment_type = $("#appointment_type").val();
console.log(getlangs);

var url='/save_appointment_desktop';
var id =settings.get('User.userid');

axios.post(baseurl+url, {
    name: name,
    doctor_id:id,
    appointment_type:appointment_type ,
    appointment_date:bookdate ,
    appointment_time:booktime,
    phone:phone
  })
  .then(function (response) {
   console.log(response.data);
$("#newpatfirst").val('');
$("#newpatlast").val('');
$("#booktime").val('');
$("#bookdate").val('');
$("#newpatphone").val('');


  })
  .catch(function (error) {
    console.log(error);
  });

  });


$("#logoutform").submit(function(e) {
    e.preventDefault();
   resetLoginAndPassword();
    window.location.assign('page-login.html');
  });

function storeLoginAndPassword(username,userID) {
    if (username && userID) {
        settings.set('User', {
            'email': username,
            'lang':'ar',
            'userid':userID
        });
        return true;
    } else
        return false;

}

// Set the account informations back to defaults
function resetLoginAndPassword() {
    settings.set('User', {
        'email': 'null',
        // 'Password': 'null',
        'userid':'null'
    });
}


// Enable or disable the Auto-Log functionality
function setAutoLog(enabled) {
    settings.set('AutoLog', enabled);
}

});

function get_doctor_info() {
 // window.location.assign('dashboard-my-profile.html');
var url='/get_doctor_info';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    user_id: id
  })
  .then(function (response) {

var docdata=response.data;
var getlang =settings.get('User.lang');

console.log('getlang',getlang);

$("#docimg").attr('src', coreurl+'/admin/'+docdata.doc_image);
$("#dochomeimg").attr('src', coreurl+'/admin/'+docdata.doc_image);
var det=docdata.doc_details;
var rating=response.data.doc_rating;
var rates=Number.parseFloat(rating).toFixed(2);
$("#firstname").attr('value', det.firstname);
$("#lasttname").attr('value', det.lastname);
$("#dochomename").append(det.firstname +' '+det.lastname);
$("#phone").attr('value', det.phone);
$("#Education").attr('value', det.Education);
$("#address").attr('value', det.address);
$("#cost").attr('value', det.cost);
$("#dob").attr('value', det.dob);
$("#gender").attr('value', det.gender);
if (getlang=='ar') {
  $("#speciality").attr('value', response.data.doc_speciality.name_ar);

}
else{
  $("#speciality").attr('value', response.data.doc_speciality.name);

}
$("#doc_rating").attr('value', rates);
$("#doctor_experiences").attr('value', det.doctor_experience);
$("#Awards").attr('value', det.Awards);
$("#HospitalAffiliations").attr('value', det.HospitalAffiliations);
$("#ProfessionalMemberships").attr('value', det.ProfessionalMemberships);

  })
  .catch(function (error) {
    console.log(error);
  });

  }


function get_all_location() {
 // window.location.assign('dashboard-my-profile.html');
var url='/get_all_cities';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    user_id: id
  })
  .then(function (response) {
var cities=response.data;
console.log(cities);
for (var city in cities) {
var item =cities[city];
console.log(item.city);
 $("#getcity").append(`<option value="`+item.id+`">`+item.city+`</option>`);
}
  })
  .catch(function (error) {
    console.log(error);
  });

  }
function pull_doccalendar() {
$("#booktime").html('');
var bookdate= $("#bookdate").val();
console.log(bookdate);
var url='/pull_doccalendar';
var id =settings.get('User.userid');
console.log(id);
axios.post(baseurl+url, {
    id: id ,bookdate:bookdate
  })
  .then(function (response) {
var response=response.data;
var id =settings.get('User.userid');
var calender =response[id];
var time=calender.wed.working_time_auto;
console.log(calender);
var apnttime=calender.apnttime;
var apntdate=calender.apntdate;
var needdate=calender.needdate.toString();
var ifdate =apntdate.toString();

if (needdate == 'Thu') {
var time=calender.thu.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Sun') {
var time=calender.sun.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Mon') {
var time=calender.mon.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Tue') {
var time=calender.tue.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Wed') {
var time=calender.wed.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Fri') {
var time=calender.fri.working_time_auto;
get_options(time,apnttime);
}
if (needdate == 'Sat') {
var time=calender.sat.working_time_auto;
get_options(time,apnttime);
}
  })
  .catch(function (error) {
    console.log(error);
  });  }

function get_options(time,apnttime){
for (var i = 0; i < apnttime.length; i++) {
var time = time.filter(val => !apnttime[i].includes(val));
}
for (var i = 0; i < time.length; i++) {
  $("#booktime").append(`<option value="`+time[i]+`">`+time[i]+`</option>`);
}}

function get_appointment() {
var url='/get_appointmentdoctor';
var id =settings.get('User.userid');

axios.post(baseurl+url, {
    user_id: id,usertype:0
  })
  .then(function (response) {
var datas=response.data.data;
console.log(response);
for (var data in datas) {
var item =datas[data];

var time=item.apnt_starttime;
var date=item.apnt_date;
var id=item.id;
console.log(id);
if (item.medical_rep_id !==null) {
var mfirstname=item.mfirstname;
var mlastname=item.mlastname;
var mimg=item.mimg;
var memail=item.apnt_type;
var mphone=item.mphone;
var mname='Medical rep'  ;
var via=null;
var status=item.status;

bookitem(id,mimg,mfirstname,mlastname,date,time,memail,mphone,mname,via,status);
}

if (item.patient_id !==null && item.patient_id !='0') {
var name='Patient' ;
var firstname=item.patient_firstname;
var lastname=item.patient_lastname;
var img=item.patimg;
var email=item.apnt_type;
var phone=item.phone;
var via=null;
var status=item.status;

bookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status);

}
if (item.patient_id =='0' && item.medical_rep_id ==null) {
var name='Patient' ;
var firstname=item.name;
var lastname='';
var img=item.patimg;
var email=item.apnt_type;
var phone=item.pphone;
var via=item.via;
var status=item.status;

bookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status);

}

// if (item.patient_id ==0) {
// var name='Patient' ;
// var firstname=item.name;
// var lastname='';
// var img=item.patimg;
// var email=item.apnt_type;
// var phone=item.pphone;
// var via=item.via;
// var status=item.status;

// bookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status);

// }

}

  })
  .catch(function (error) {
    console.log(error);
  });

  }



   function bookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status){
if (img==null) {
  img="assets/images/user_avatar.jpg"
}

let Datea='Date';
let timea='Time';
let accept='Approve';
let reject='Cancel';
let accepted='Approved';
let rejected='cancelled';
let phonea='Phone';
let Typea='Type';
let dir='';
let getlang =settings.get('User.lang');
if(getlang=='ar'){
 timea='الوقت';
 Datea='التاريخ';
 accept='قبول';
 reject='رفض';
if (via!=null) {
   via='بواسطة تطبيق سطح المكتب'

}
dir='direction: rtl;';
phonea='رقم الهاتف';
 Typea='نوع الحجز';
 accepted='مقبول';
 rejected='تم الالغاء';
if (email=='Examination') {
email='كشف';

}
if (email=='Consultation') {
email='إستشارة';
}
if (email=='Operation') {
email='عمليه';
}
if (email=='Visitation') {
email='زيارة';
}
console.log(name);
if (name=='Patient') {
name='اسم المريض';

}



if (name=='Medical rep') {
	name='اسم مندوب الشركة';
}

}


 $("#bookingdata").append(`
 
 <!-- Booking item -->
                    <div id="`+id+`" style="`+dir+`" class="col-lg-6 margin-bottom-45px full-width" >
                        <div class=" col-lg-11 background-white thum-hover box-shadow  hvr-float" style="    min-width: 380px;    min-height: 269px;
    max-height: 269px;">
                            <div class="padding-25px full-width">
                                <img src="`+coreurl+'/admin/'+img+`" style="width:90px; height:90px;" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="">
                                <div class="margin-left-94px" id="big`+id+`">`+name+`  :
                                    <a class="d-block text-dark text-medium margin-bottom-5px appname" href="#">`+firstname+' '+lastname+ `</a>
                                    <div class="d-block padding-tb-3px ">`+Datea+` :  <a href="#" class="text-main-color appdate">`+date+`</a></div>
                                  <div class="d-block padding-tb-3px  ">`+timea+`  :  <a href="#" class="text-main-color apptime"> `+time+`</a></div>
                                    <div class="d-block padding-tb-3px " style="padding-left:1vw;" id="email`+id+`">`+Typea+` :  <a href="#" class="text-main-color appemail"> `+email+`</a></div>
                                    <div class="d-block padding-tb-3px  " style="padding-left:1vw;" id="phone`+id+`" >`+phonea+`  :  <a href="#" class="text-main-color appphone"> `+phone+`</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- // Booking item -->

 `); 
 
 if (status ==1) {
    $("#big"+id).append(`<a onclick=approveappoinment(`+id+`); href="#" id="approveappoinment`+id+`" class="d-inline-block text-main-color text-grey-2 text-up-small appstatus"><i class="far fa-file-alt"></i> `+accepted+`</a>
`);
   $("#big"+id).append(` <a onclick=cancelappoinment(`+id+`);  href="#" id="cancelappoinment`+id+`" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-file-alt"></i>`+reject+`</a>
`);  
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');
 $("#cancelappoinment"+id).attr('style', 'color: #F44336;');


}else{
   $("#big"+id).append(`<a onclick=approveappoinment(`+id+`); href="#" id="approveappoinment`+id+`" class="d-inline-block text-main-color text-grey-2 text-up-small appstatus"><i class="far fa-file-alt"></i> `+accept+`</a>
`);
    $("#big"+id).append(` <a onclick=cancelappoinment(`+id+`);  href="#" id="cancelappoinment`+id+`" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-file-alt"></i> `+rejected+`</a>
`);
   $("#cancelappoinment"+id).attr('style', 'color: #ffc107;');
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');


}
 if (via !==null) {
 $("#phone"+id).after(` <div class="d-block padding-tb-5px  " style="padding-left:1vw;">Via  :  <a href="#" class="text-main-color appphone"> `+via+`</a></div>`);
}
 if (phone==null) {
 $("#phone"+id).remove();
}
 if (email==null) {
  $("#email"+id).remove();
}
  }
//get_count_desktop
 function get_count_desktop() {
var url='/get_count_desktop';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    id:id
  })
  .then(function (response) {
var count = response.data;
 $("#countAdded").append(count.countAdded);
 $("#countReviews").append(count.countReviews);
  $("#countappointment").append(count.countappointment);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
//last appointment
  function get_last_appointment() {
var url='/get_last_appointment';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    user_id: id
  })
  .then(function (response) {
var datas=response.data;
console.log(datas);
for (var data in datas) {
var item =datas[data];

var time=item.apnt_starttime;
var date=item.apnt_date;
var id=item.id;

if (item.medical_rep_id !==null) {
var mfirstname=item.mfirstname;
var mlastname=item.mlastname;
var mimg=item.mimg;
var memail=item.memail;
var mphone=item.mphone;
var mname='Medical rep'  ;
var via=null;
var status=item.status;

lastbookitem(id,mimg,mfirstname,mlastname,date,time,memail,mphone,mname,via,status);
}

if (item.patient_id !==null) {
var name='Patient' ;
var firstname=item.patient_firstname;
var lastname=item.patient_lastname;
var img=item.patimg;
var email=item.email;
var phone=item.phone;
var via=null;
var status=item.status;

lastbookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status);

}
if (item.patient_id ==null && item.medical_rep_id ==null) {
var name='Patient' ;
var firstname=item.name;
var lastname='';
var img=item.patimg;
var email=null;
var phone=null;
var via=item.via;
var status=item.status;

lastbookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status);

}

}

  })
  .catch(function (error) {
    console.log(error);
  });

  }
   function lastbookitem(id,img,firstname,lastname,date,time,email,phone,name,via,status){

let accept='Approve';
let reject='Cancel';
let accepted='Approved';
let rejected='cancelled';
let Datea='Time';

let getlang =settings.get('User.lang');
if(getlang=='ar'){
 accept='قبول';
 reject='رفض';
 accepted='مقبول';
 rejected='تم الالغاء';
 Datea='الوقت';

}



if (img==null) {
  img="assets/images/user_avatar.jpg"
}



 $("#lastbooking").append(`
 
 <!-- Booking item -->
               <li id="`+id+`" class="border-bottom-1 border-grey-1 margin-bottom-20px">
                                <div class="padding-bottom-15px"  id="big`+id+`">
                                    <a class="d-block text-grey-2" href="#">
                            <img src="`+coreurl+'/admin/'+img+`" style="width:35px; height:50px;" class="height-30px margin-right-5px border-radius-30" alt=""> 
                            <span class="text-black">`+firstname+' '+lastname+ `  </span>    </a>
                          
                                    <span class="text-extra-small text-grey-4 margin-right-10px"><a href="#" class="text-grey-2"> <span> `+time+`</span> `+date+`</a></span>
                                </div>
                            </li>
                    <!-- // Booking item -->

                

 `); 
 
 if (status ==1) {
    $("#big"+id).append(`<a onclick=approveappoinment(`+id+`); href="#" id="approveappoinment`+id+`" class="d-inline-block text-main-color text-grey-2 text-up-small appstatus"><i class="far fa-file-alt"></i> `+accepted+`</a>
`);
   $("#big"+id).append(` <a onclick=cancelappoinment(`+id+`);  href="#" id="cancelappoinment`+id+`" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-file-alt"></i> `+reject+`</a>
`);  
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');
 $("#cancelappoinment"+id).attr('style', 'color: #F44336;');


}else{
   $("#big"+id).append(`<a onclick=approveappoinment(`+id+`); href="#" id="approveappoinment`+id+`" class="d-inline-block text-main-color text-grey-2 text-up-small appstatus"><i class="far fa-file-alt"></i> `+accept+`</a>
`);
    $("#big"+id).append(` <a onclick=cancelappoinment(`+id+`);  href="#" id="cancelappoinment`+id+`" class="d-inline-block margin-lr-20px text-grey-2 text-up-small"><i class="far fa-file-alt"></i> `+rejected+`</a>
`);
   $("#cancelappoinment"+id).attr('style', 'color: #ffc107;');
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');


}
 if (via !==null) {
 $("#phone"+id).after(` <div class="d-block padding-tb-5px  " style="padding-left:1vw;">Via  :  <a href="#" class="text-main-color appphone"> `+via+`</a></div>`);
}
 if (phone==null) {
 $("#phone"+id).remove();
}
 if (email==null) {
  $("#email"+id).remove();
}
  }


  //reviews 
function get_doctor_reviews() {
 // window.location.assign('dashboard-my-profile.html');
var url='/get_singledoctorreview';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    user_id: id
  })
  .then(function (response) {
var reviews=response.data;
console.log(reviews.data);
var reviewss =reviews.data;
console.log(reviewss);

for (var review in reviewss) {
var item =reviewss[review];
var review=item.review;
var date=item.date;
var rating=item.rating;
var avg_rating=item.avg_rating;
var id=item.patient_id;
var patient_firstname=item.patient_firstname;
if (patient_firstname==null) {
  patient_firstname='';
}

console.log(item.patient_firstname);
var patient_lastname=item.patient_lastname;
if (patient_lastname==null) {
  patient_lastname='';
}
var patient_display_image=item.patient_display_image;
var ratye =function ratye(rating){
  var rate=[];
        for (var i = 0; i < rating; i++) {
        rate.push('<li class="active"></li>');
        }
              for (var i = 0; i < 5-rating; i++) {
        rate.push('<li></li>');
        }                 
   return rate;
}
let Datea='Date';

let getlang =settings.get('User.lang');
if(getlang=='ar'){

 Datea='التاريخ';

}


console.log(item);
$("#datareviews").append(`
   <!-- Review item -->
                    <div class="col-lg-6 margin-bottom-45px" id="review`+id+`">
                        <div class="background-white thum-hover box-shadow hvr-float" style="    min-width: 30vw;
    min-height: 14vh;">
                            <div class="padding-30px">
                        <img src="`+coreurl+'/admin/'+patient_display_image+`" style="width:90px; height:90px;" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="">

                                <div class="margin-left-85px">
                                    <a class="d-inline-block text-dark text-medium margin-right-20px" href="#"> `+patient_firstname+' '+patient_lastname+`</a>
                                    <span class="text-extra-small d-inline-block  margin-right-20px">`+Datea+` :  <a href="#" class="text-main-color">`+date+`</a></span>
                                      <div id="`+id+`"></div>
                                    <div class="rating">
                                        <ul>
                                    `+ ratye(rating) +`
                                        </ul>
                                    </div>
                                    <p class="margin-top-15px text-grey-2">`+review+`. </p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- // Review item -->
 `);


}
  })
  .catch(function (error) {
    console.log(error);
  });

  }

 //lasst reviews 
function get_lastdoctorreview() {
 // window.location.assign('dashboard-my-profile.html');
var url='/get_lastdoctorreview';
var id =settings.get('User.userid');
axios.post(baseurl+url, {
    user_id: id
  })
  .then(function (response) {
var reviews=response.data;
console.log(reviews.data);
var reviewss =reviews.data;
console.log(reviewss);

for (var review in reviewss) {
var item =reviewss[review];
var review=item.review;
var date=item.date;
var rating=item.rating;
var avg_rating=item.avg_rating;
var id=item.patient_id;
var patient_firstname=item.patient_firstname;
var patient_lastname=item.patient_lastname;
var patient_display_image=item.patient_display_image;
var ratye =function ratye(rating){
  var rate=[];
        for (var i = 0; i < rating; i++) {
        rate.push('<li class="active"></li>');
        }
              for (var i = 0; i < 5-rating; i++) {
        rate.push('<li></li>');
        }                 
   return rate;
}

let Datea='Date';

let getlang =settings.get('User.lang');
if(getlang=='ar'){

 Datea='التاريخ';

}
console.log(item);
 $("#lastreviews").append(` <li class="border-bottom-1 border-grey-1 margin-bottom-20px" id="review`+id+`">
                             <img src="`+coreurl+'/admin/'+patient_display_image+`" style="width:60px; height:60px;" class="float-left margin-right-20px border-radius-60 margin-bottom-20px" alt="">
                                <div class="margin-left-85px">
                                    <a class="d-inline-block text-dark text-medium margin-right-20px" href="#">`+patient_firstname+' '+patient_lastname+` </a>
                                    <span class="text-extra-small">`+Datea+` :  <a href="#" class="text-main-color">`+date+`</a></span>
                                    <div class="rating">
                                        <ul>
                                    `+ ratye(rating) +`
                                        </ul>
                                    </div>
                                    <p class="margin-top-15px text-grey-2">`+review+`.</p>
                                </div>
                            </li>`);
}
  })
  .catch(function (error) {
    console.log(error);
  });

  }

function approveappoinment(appid) {
   var id= appid;

let accepted='Approved';
let getlang =settings.get('User.lang');
if(getlang=='ar'){
 accepted='مقبول';

}

var url='/approveappoinment';
axios.post(baseurl+url, {
    id: id,
  })
  .then(function (response) {
    var response =response.data;
  console.log(response);
if(response.status=='approved'){
  console.log(response.status);
    $("#approveappoinment"+id).html(`<i class="far fa-file-alt"></i>`+accepted);
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');
 $("#cancelappoinment"+id).attr('style', 'color: #F44336;');

}
  })
  .catch(function (error) {
    console.log(error);
  });

  };
function cancelappoinment(appid) {
   var id= appid;

let rejected='cancelled';

let getlang =settings.get('User.lang');
if(getlang=='ar'){

 rejected='تم الالغاء';

}

var url='/cancelappoinment';
axios.post(baseurl+url, {
    id: id,
  })
  .then(function (response) {
    var response =response.data;
  console.log(response);
if(response.status=='cancel'){
  console.log(response.status);
    $("#cancelappoinment"+id).html(`<i class="far fa-file-alt"></i>`+rejected);
   $("#cancelappoinment"+id).attr('style', 'color: #ffc107;');
 $("#approveappoinment"+id).attr('style', 'color: #28a745;');

}
  })
  .catch(function (error) {
    console.log(error);
  });

  };
function setlang(lang) {
if (lang=='ar') {
settings.set('User.lang',lang);
}
if (lang=='en') {
settings.set('User.lang',lang);
}
window.location.assign('');
  };
