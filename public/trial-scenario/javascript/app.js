



// var today = new Date();
// var dd = String(today.getDate())
// var mm = String(today.getMonth() + 1) //January is 0!
// var yyyy = today.getFullYear();

// today = dd + '/' + mm + '/' + yyyy;
// console.log(today)


// checking which photo is chosen
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


function saveAndExit() {

    // check wound assessment textbox for word scratch

    // var woundAssessmentText = document.getElementById('#wound-assessment-text')

    // woundAssessmentText.innerHTML() = "";
    // //let scratchWord = "scratch"
    // //var scratch = "";
    // var scratchWord = woundAssessmentText.includes("scratch");

    // document.getElementById('#wound-assessment-text').innerHTML = scratchWord;

    // // if ()


    //checkDrName(); //works

    checkWord()
}


function checkWord() {

    //let scratchWord = "scratch"

    // let woundAssessmentText = document.getElementById('wound-assessment-text')

    // // woundAssessmentText == scratchWord.includes("scratch")

    // // scratchWord.includes

    // woundAssessmentText.includes("scratch")

    // console.log(woundAssessmentText)


    // FIXME: look for scratch word

    
    // let str = "scratch"

    // let str2 = str.includes("scratch")

    // let textbox = document.getElementById("wound-assessment-text").innerHTML


    // if(textbox != str2) {
    //     alert("change your answer")
    // } 

    // document.getElementById("wound-assessment-text").innerHTML = str2


    // Test code
    // var str = "Hello world, welcome to the universe.";
    // var n = str.includes("world");
    // document.getElementById("wound-assessment-text").innerHTML = n;


}


// PDF

function generatePDF() {
    //doc.addPage(); //generates a new page


    // New Doc
    var options = {unit: 'px', format: 'a4'};
    var doc = new jsPDF(options);
    doc.setFontSize(10);

    // Ward title
    // var ward = document.getElementById('ward-options').value;
    // doc.text(ward, 10, 20);

    // NHS title logo
    //doc.text('Royal Brompton & Harefield | NHS', 245, 30);

    // Wound photo img
    // if (document.getElementById('wound-photo-one').checked == true) {
    //     var checkedImg = document.getElementById('wound-photo-one-img');
    //     doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);
    // } 
    // else if (document.getElementById('wound-photo-two').checked == true) {
    //     var checkedImg = document.getElementById('wound-photo-two-img');
    //     doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);
    // } 
    // else if (document.getElementById('wound-photo-three').checked == true) {
    //     checkedImg = document.getElementById('wound-photo-three-img');
    //     doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);
    // }
    // else if (document.getElementById('wound-photo-four').checked == true) {
    //     checkedImg = document.getElementById('wound-photo-four-img');
    //     doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);
    // }
    // else if (document.getElementById('wound-photo-five').checked == true) {
    //     checkedImg = document.getElementById('wound-photo-five-img');
    //     doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);
    // }

    // Correct img 
    checkedImg = document.getElementById('wound-photo-four-img');
    doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);


    doc.text('Mr J Blogg XX-XXX', 20, 80);
    doc.text('NHS NUMBER XXX XXX XXX', 20, 90);

    doc.fromHTML($('#left-text').get(0), 20, 92, {
        'width': 250,
        
    });

    doc.fromHTML($('#bottom-text').get(0), 20, 410, {
        'width': 400,
        
    });

    doc.fromHTML($('#bottom-sign').get(0), 20, 590, {
        'width': 400,
        
    });

    // Save pdf
    doc.save('Photo-at-Discharge.pdf');
}
// End PDF



//works - TODO: might not be necessary 
function checkDrName() {

    let docTextbox = document.getElementById('doctor-name')

    if ((docTextbox).value == "") {
        alert('Please enter a doctors name')
    }

}