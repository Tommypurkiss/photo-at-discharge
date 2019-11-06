



var today = new Date();
var dd = String(today.getDate())
var mm = String(today.getMonth() + 1) //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log(today)


// checking which photo is chosen for displaying correct answer - important
function woundPhotoCheck() {

    if (document.getElementById('wound-photo-one').checked == true) {
        photoValue = document.getElementById('wound-photo-one').value;
        //alert(photoValue);
    } 
    else if (document.getElementById('wound-photo-two').checked == true) {
        photoValue = document.getElementById('wound-photo-two').value;
        //alert(photoValue);
    } 
    else if (document.getElementById('wound-photo-three').checked == true) {
        photoValue = document.getElementById('wound-photo-three').value;
        //alert(photoValue);
    }
    else if (document.getElementById('wound-photo-four').checked == true) {
        photoValue = document.getElementById('wound-photo-four').value;
        //alert(photoValue);
    }
    else if (document.getElementById('wound-photo-five').checked == true) {
        photoValue = document.getElementById('wound-photo-five').value;
        //alert(photoValue);
    }
    //document.getElementById('wound-photo-answer').innerHTML = "" + photoValue;
}



// Generate the PDF
function generatePDF() {

    checkWoundImages() //function for checking wound images
    checkMicroForm() //function for checking micro wound radio options
    //pdfValues()
    //getStartDate()


    p1 = document.getElementById('p1');
    surgeon = document.getElementById('surgeon')

    var dischargeDate = new Date(document.getElementById('start-date').value);
    var dd = String(dischargeDate.getDate())
    var mm = String(dischargeDate.getMonth() + 1) //January is 0!
    var yyyy = dischargeDate.getFullYear();

    dischargeDate = dd + '/' + mm + '/' + yyyy;
    console.log("start Date", dischargeDate)

    
    var removalDate = new Date(document.getElementById('end-date').value);
    var dd2 = String(removalDate.getDate() + 7)
    var mm2 = String(removalDate.getMonth() + 1) //January is 0!
    var yyyy2 = removalDate.getFullYear();

    removalDate = dd2 + '/' + mm2 + '/' + yyyy2;
    console.log("removal  Date", removalDate)

    // dischargeDate = document.getElementById('start-date').value
    // // .required makes it undefined
    // console.log("dischargeDate", dischargeDate)
    
    normalSwellingText = "Normal swelling at the top of the wound which will resolve over a few weeks."
    console.log("normalSwellingText", normalSwellingText)

    woundDropdown = document.getElementById('wound-dropdown').value
    console.log("woundDropdown", woundDropdown)

    drainSitesDropdown = document.getElementById('drain-sites-dropdown').value
    console.log("drainSitesDropdown", drainSitesDropdown)

    // removalDate = document.getElementById('end-date').value
    // console.log("removalDate", removalDate)

    legWoundsDropdown = document.getElementById('leg-wounds-dropdown').value
    console.log("legWoundsDropdown", legWoundsDropdown)

    surgeonName = document.getElementById('doctor-name').value
    console.log("surgeon name", surgeonName)

    if (dischargeDate == "" || dischargeDate == "NaN/NaN/NaN") {
        alert("please enter a date")
    }
    // if (startDate == "") {
    //     alert("please enter a date")
    // }
    // else if causes the alerts to come one at a time
    // if just if, and one of the answers are atleast corrct it will stll go to download
    
    else if (microValue != document.getElementById('micro-three').value) {
        alert("please enter the correct value")
    }
    else if (woundDropdown != document.getElementById('wound-dropdown-correct').value) {
        alert("Choose the correct wound dropdown")
    }
    else if (drainSitesDropdown != document.getElementById('drain-sites-dropdown-correct').value) {
        alert("enter correct drain sites drop down")
    }
    else if (removalDate == "" || removalDate == "NaN/NaN/NaN") {
        // removalDate != dischargeDate
        alert("please enter a removal date")
    }
    else if (checkedImg != document.getElementById('wound-photo-four-img')) {
        alert("choose the correct image")
    }
    else if (surgeonName == "") {
        alert("please enter a surgeon name")
    }


    else {

        p1.innerHTML = dischargeDate + " " + microValue 
        + " " + normalSwellingText + " " + woundDropdown 
        + " " + drainSitesDropdown + " " + removalDate
        // + " " + legWoundsDropdown + " " + removalDate

        surgeon.innerHTML = surgeonName

        // New Doc
        var options = {unit: 'px', format: 'a4'};
        var doc = new jsPDF(options);
        doc.setFontSize(10);

        doc.text('Mr J Blogg XX-XXX', 20, 80);
        doc.text('NHS NUMBER XXX XXX XXX', 20, 90);

        doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);

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


    // p1.innerHTML = dischargeDate + " " + microValue 
    //         + " " + normalSwellingText + " " + woundDropdown 
    //         + " " + drainSitesDropdown + " " + removalDate
    //         + " " + legWoundsDropdown + " " + removalDate

    // // New Doc
    // var options = {unit: 'px', format: 'a4'};
    // var doc = new jsPDF(options);
    // doc.setFontSize(10);

    // doc.text('Mr J Blogg XX-XXX', 20, 80);
    // doc.text('NHS NUMBER XXX XXX XXX', 20, 90);

    // doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);

    // doc.fromHTML($('#left-text').get(0), 20, 92, {
    //     'width': 250,        
    // });

    // doc.fromHTML($('#bottom-text').get(0), 20, 410, {
    //     'width': 400,
    // });

    // doc.fromHTML($('#bottom-sign').get(0), 20, 590, {
    //     'width': 400,
    // });

    // // Save pdf
    // doc.save('Photo-at-Discharge.pdf');
}
// End PDF


//works - TODO: might not be necessary 
function checkDrName() {

    let docTextbox = document.getElementById('doctor-name')

    if ((docTextbox).value == "") {
        alert('Please enter a doctors name')
    }
}

function checkWoundImages() {

    if (document.getElementById('wound-photo-one').checked == true) {
        checkedImg = document.getElementById('wound-photo-one-img');
    } 
    else if (document.getElementById('wound-photo-two').checked == true) {
        checkedImg = document.getElementById('wound-photo-two-img');
    } 
    else if (document.getElementById('wound-photo-three').checked == true) {
        checkedImg = document.getElementById('wound-photo-three-img');
    }
    else if (document.getElementById('wound-photo-four').checked == true) {
        checkedImg = document.getElementById('wound-photo-four-img');
    }
    else if (document.getElementById('wound-photo-five').checked == true) {
        checkedImg = document.getElementById('wound-photo-five-img');
    }
}

function checkMicroForm() {

    if (document.getElementById('micro-one').checked == true) {
        microValue = document.getElementById('micro-one').value
    } 
    else if (document.getElementById('micro-two').checked == true) {
        microValue = document.getElementById('micro-two').value
    } 
    else if (document.getElementById('micro-three').checked == true) {
        microValue = document.getElementById('micro-three').value
    }
}



// function getStartDate() {





//     dischargeDate = document.getElementById('start-date').value.required
//     // .required
//     console.log("dischargeDate value: ", dischargeDate)

//     if (dischargeDate === undefined) {
//         alert("undefined")
//     }
//     else {
//         let dischargeDateFinal == dischargeDate
//     }


// }









/* SPARE CODE





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

    //checkWord()
}


function checkWord() {

    //let scratchWord = "scratch"

    // let woundAssessmentText = document.getElementById('wound-assessment-text')

    // // woundAssessmentText == scratchWord.includes("scratch")

    // // scratchWord.includes

    // woundAssessmentText.includes("scratch")

    // console.log(woundAssessmentText)


    let str = "scratch"

    let str2 = str.includes("scratch")

    let textbox = document.getElementById("wound-assessment-text").innerHTML


    if(textbox != str2) {
        alert("change your answer")
    } 

    // document.getElementById("wound-assessment-text").innerHTML = str2


    // Test code
    // var str = "Hello world, welcome to the universe.";
    // var n = str.includes("world");
    // document.getElementById("wound-assessment-text").innerHTML = n;


}




    // generatePDF()
    // Ward title
    // var ward = document.getElementById('ward-options').value;
    // doc.text(ward, 10, 20);

    // NHS title logo
    // doc.text('Royal Brompton & Harefield | NHS', 245, 30);

    // TODO: sort out date format
    // let day = dischargeDate.getDate()
    // let month = dischargeDate.getMonth()
    // let year = dischargeDate.getFullYear()


    // let p1 = document.getElementById('p1');

    // let dischargeDate = document.getElementById('start-date').value
    // console.log("dischargeDate", dischargeDate)
    
    // let normalSwellingText = "Normal swelling at the top of the wound which will resolve over a few weeks."
    // console.log("normalSwellingText", normalSwellingText)

    // let woundDropdown = document.getElementById('wound-dropdown').value
    // console.log("woundDropdown", woundDropdown)
    // // let woundOption = document.getElementsByClassName('wound-option')
    

    // let drainSitesDropdown = document.getElementById('drain-sites-dropdown').value
    // console.log("drainSitesDropdown", drainSitesDropdown)

    // let removalDate = document.getElementById('end-date').value
    // console.log("removalDate", removalDate)

    // let legWoundsDropdown = document.getElementById('leg-wounds-dropdown').value
    // console.log("legWoundsDropdown", legWoundsDropdown)

    // if ((dischargeDate == "") || (woundDropdown.value == "select") ) {
    //     alert("please enter the required fields")
        
        
        
    // } else {

    //     p1.innerHTML = dischargeDate + " " + microValue 
    //     + " " + normalSwellingText + " " + woundDropdown 
    //     + " " + drainSitesDropdown + " " + removalDate
    //     + " " + legWoundsDropdown + " " + removalDate

    // }



*/