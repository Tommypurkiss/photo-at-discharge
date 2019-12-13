
// DATE PICKER COMPATIBILITY FOR SAFARI AND IE
$(document).ready(function(){

    if ( $('.date-picker').prop('type') != 'date' ) {
        $('.date-picker').datepicker();
    }
});