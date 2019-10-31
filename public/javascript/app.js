
function woundPhotoCheck() {

    if (document.getElementById('wound-photo-one').checked == true) {
        photoValue = document.getElementById('wound-photo-one').value;
        alert(photoValue);
    } 
    else if (document.getElementById('wound-photo-two').checked == true) {
        photoValue = document.getElementById('wound-photo-two').value;
        alert(photoValue);
    } 
    else if (document.getElementById('wound-photo-three').checked == true) {
        photoValue = document.getElementById('wound-photo-three').value;
        alert(photoValue);
    }
    else if (document.getElementById('wound-photo-four').checked == true) {
        photoValue = document.getElementById('wound-photo-four').value;
        alert(photoValue);
    }
    else if (document.getElementById('wound-photo-five').checked == true) {
        photoValue = document.getElementById('wound-photo-five').value;
        alert(photoValue);
    }
    //document.getElementById('wound-photo-answer').innerHTML = "" + photoValue;
}




// PDF

function generatePDF() {

    var test = document.getElementById('maple-ward').value;

    var testImg = document.getElementById('wound-photo-one-img');
    // var img1 = document.createElement("img");
    // img1.src = "public\assets\img\wound-imgs\Mr M. Abbass 4074554 (blurred).jpg";

    var options = {unit: 'px', format: 'a4'};

    var doc = new jsPDF(options);

    doc.text('Hello world!', 20, 100);
    //doc.addPage(); //generates a new page
    doc.text(test, 10, 20);
    doc.addImage(testImg, 'JPEG', 100 , 120, 200, 300); //works kinda
    //doc.viewerPreferences({'FitWindow': true}, true) //probs dont need

    doc.save('Photo-at-Discharge.pdf');
}