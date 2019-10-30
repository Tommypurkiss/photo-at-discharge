

// WOUND IMG UPLOAD

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');  // $('img')[0]
            var woundImg = document.getElementById('wound-img');
            woundImg.src = URL.createObjectURL(this.files[0]);
            //img.src = URL.createObjectURL(this.files[0]); // set src to file url
            //img.onload = imageIsLoaded; // optional onload event listener
        }
    });
});

//   function imageIsLoaded(e) { alert(e); }



// INPUT TYPE DATE PICKER FOR SAFARI
if ( $('input[type="date"]').prop('type') != 'date' ) {
    $('input[type="date"]').datepicker();
}