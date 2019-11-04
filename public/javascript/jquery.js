

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

$(document).ready(function(){
    $('#start-date-submit').on('click', function(){

        // the set date from input 
        var date = new Date($('#start-date').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        var setDate = day + "/" + month + "/" + year
        console.log(setDate)
        //alert([day, month, year].join('/'));



        // the current date
        var currentDate = new Date();

        var dd = String(currentDate.getDate())
        var mm = String(currentDate.getMonth() + 1) //January is 0!
        var yyyy = currentDate.getFullYear();

        currentDate = dd + '/' + mm + '/' + yyyy;
        console.log(currentDate)

        if (setDate != currentDate) {
            alert("Please choose todays date")
            $('#start-date').val("");
        }

    });
});

