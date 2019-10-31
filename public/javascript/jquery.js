

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

