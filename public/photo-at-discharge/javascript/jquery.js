

// DATE PICKER COMPATIBILITY FOR SAFARI AND IE
$(document).ready(function(){

    if ( $('.date-picker').prop('type') != 'date' ) {
        $('.date-picker').datepicker();
    }
});



// Might not be needed
// For validating and making sure there is a docotors name in the text box before saving or generating a letter
// $(document).ready(function(){

//     if ($('#doctor-name').val = "") {
//         alert("Please enter a doctors name")
//     }

// });