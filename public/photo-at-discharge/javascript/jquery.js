// $(document).ready(function(){
// });

// WOUND IMG UPLOAD
//  $(document).ready(function(){

// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             //var img = document.querySelector('img');  // $('img')[0]
//             var woundImg = document.getElementById('wound-img');
//             var woundImgPath = ("file://./public/assets/img/");
//             woundImg.src = URL.createObjectURL(this.files[0]);
//             //woundImg.src = URL.createObjectURL(woundImgPath);

//             //img.src = URL.createObjectURL(this.files[0]); // set src to file url
//             //img.onload = imageIsLoaded; // optional onload event listener
//         }
//     });
// });
// });
//   function imageIsLoaded(e) { alert(e); }



// DATE PICKER COMPATIBILITY FOR SAFARI AND IE
$(document).ready(function(){

    if ( $('.date-picker').prop('type') != 'date' ) {
        $('.date-picker').datepicker();
    }
});



// RETRIEVE DATE VALUE FROM DATE PICKER

// $(document).ready(function(){




//     $('#start-date-submit').on('click', function(){

//         // the set date from input 
//         var date = new Date($('#start-date').val());
//         day = date.getDate();
//         month = date.getMonth() + 1;
//         year = date.getFullYear();
//         var setDate = day + "/" + month + "/" + year
//         console.log(setDate)
//         //alert([day, month, year].join('/'));



//         // the current date
//         var currentDate = new Date();

//         var dd = String(currentDate.getDate())
//         var mm = String(currentDate.getMonth() + 1) //January is 0!
//         var yyyy = currentDate.getFullYear();

//         currentDate = dd + '/' + mm + '/' + yyyy;
//         console.log(currentDate)

//         if (setDate != currentDate) {
//             alert("Please choose todays date")
//             $('#start-date').val("");
//         }
//         else {
//             alert("Today's date has been set")
//         }

//     });

//     // $('#end-date-submit').on('click', function(){
        
        
        

//     // });


//     $('#end-date-submit').on('click', function(){
        
//         // var date2 = new Date($('#end-date').val());
//         // day2 = date2.getDate() + 7;
//         // month2 = date2.getMonth() + 1;
//         // year2 = date2.getFullYear();
//         // var setEndDate = day2 + "/" + month2 + "/" + year2
//         // console.log(setEndDate)

//         var endDate = setDate.getDate() +7
//         console.log(endDate)

//     });

// });






// // NEW DATE TRY 2

// $(document).ready(function(){



    
//     $('#start-date-submit').on('click', function(){

//         // the set date from input 
//         var date = new Date($('#start-date').val());
//         var day = date.getDate();
//         var month = date.getMonth() + 1;
//         var year = date.getFullYear();
//         var setDate = day + "/" + month + "/" + year
//         console.log(setDate)
//         //alert([day, month, year].join('/'));



//         // the current date
//         var currentDate = new Date();

//         var dd = String(currentDate.getDate())
//         var mm = String(currentDate.getMonth() + 1) //January is 0!
//         var yyyy = currentDate.getFullYear();

//         currentDate = dd + '/' + mm + '/' + yyyy;
//         console.log(currentDate)

//         // if (setDate != currentDate) {
//         //     //alert("Please choose todays date")
//         //     $('#start-date').val("");
//         // }
//         // else {
//         //     //alert("Today's date has been set")
//         // }

//     });

//     // $('#end-date-submit').on('click', function(){
        
        
        

//     // });


//     $('#end-date-submit').on('click', function(){
        
//         // var date2 = new Date($('#end-date').val());
//         // day2 = date2.getDate() + 7;
//         // month2 = date2.getMonth() + 1;
//         // year2 = date2.getFullYear();
//         // var setEndDate = day2 + "/" + month2 + "/" + year2
//         // console.log(setEndDate)

        



//         // the set date from input 
//         var date = new Date($('#end-date').val());
//         var day = date.getDate();
//         var month = date.getMonth() + 1;
//         var year = date.getFullYear();
//         var setDate = day + "/" + month + "/" + year
//         console.log(setDate)



//         // the current date
//         var currentDate = new Date();

//         var dd = String(currentDate.getDate() + 7)
//         var mm = String(currentDate.getMonth() + 1) //January is 0!
//         var yyyy = currentDate.getFullYear();

//         currentDate = dd + '/' + mm + '/' + yyyy;
//         console.log(currentDate)

//         // if (setDate != currentDate) {
//         //     //alert("Please choose the starting date first. The end date should be a week after the starting set date")
//         //     $('#end-date').val("");
//         // }
//         // else {
//         //     //alert("End date has been set")
//         // }
        



//     });

// });




// END NEW DATE TRY 2








// $(document).ready(function(){

//     $('#end-date-submit').on('click', function(){
        
//         var date2 = new Date($('#end-date').val());
//         day2 = date2.getDate();
//         month2 = date2.getMonth() + 1;
//         year2 = date2.getFullYear();
//         var setEndDate = day2 + "/" + month2 + "/" + year2
//         console.log(setEndDate)


//     });

    

// });



// $(document).ready(function(){

//     var woundAssessmentText = $('#wound-assessment-text');
//     var scratchWord = "scratch"

// });


// For validating and making sure there is a docotors name in the text box before saving or generating a letter
$(document).ready(function(){

    if ($('#doctor-name').val = "") {
        alert("Please enter a doctors name")
    }

});