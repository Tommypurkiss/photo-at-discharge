


// Todays date
var todaysDate = new Date();
var dd = String(todaysDate.getDate())
var mm = String(todaysDate.getMonth() + 1) //January is 0!
var yyyy = todaysDate.getFullYear();

todaysDate = dd + '/' + mm + '/' + yyyy;
console.log("todays date is: ",todaysDate)


// var oneWeekRemovalDate = new Date();
// var rmD = String(oneWeekRemovalDate.getDate() + 7)
// var rmM = String(oneWeekRemovalDate.getMonth() + 1) //January is 0!
// var rmYYYY = oneWeekRemovalDate.getFullYear();

// oneWeekRemovalDate = rmD + '/' + rmM + '/' + rmYYYY;
// console.log("future removal date is: ", oneWeekRemovalDate)

// week removal date

let numWeeks = 1
let oneWeekRemovalDate = new Date()
oneWeekRemovalDate.setDate(oneWeekRemovalDate.getDate() + numWeeks * 7)
let formattedOneWeekDate = oneWeekRemovalDate.getDate() + "/" + (oneWeekRemovalDate.getMonth() + 1) + "/" + oneWeekRemovalDate.getFullYear()

    console.log("one week removal date: ", formattedOneWeekDate)



// checking which photo is chosen for displaying correct answer - important
function woundPhotoCheck() {

    if (document.getElementById('wound-photo-one').checked == true) {
        photoValue = document.getElementById('wound-photo-one').value;
    } 
    else if (document.getElementById('wound-photo-two').checked == true) {
        photoValue = document.getElementById('wound-photo-two').value;
    } 
    else if (document.getElementById('wound-photo-three').checked == true) {
        photoValue = document.getElementById('wound-photo-three').value;
    }
    else if (document.getElementById('wound-photo-four').checked == true) {
        photoValue = document.getElementById('wound-photo-four').value;
    }
    else if (document.getElementById('wound-photo-five').checked == true) {
        photoValue = document.getElementById('wound-photo-five').value;
    }
}



// this function just shows an alert if the bhisoption is chosen
function checkBHIS() {

    var bhisOption = document.getElementById('bhis-option')

    if(bhisOption.checked == true) {
        alert("Please make sure this is correct, the surgical bra is for female patients only.")
        console.log(bhisOption)

    }   else if (bhisOption.checked == false) {
        console.log(bhisOption)
    }
}


// Generate the PDF
function generatePDF() {

    checkWoundImages() //function for checking wound images
    checkMicroForm() //function for checking micro wound radio options

    woundTextBox = document.getElementById('wound-assessment-text').value
    p1 = document.getElementById('p1');
    woundTbComments = document.getElementById('wound-tb-comments')
    surgeon = document.getElementById('surgeon')

    additionalResources = document.getElementById('additional-resources')

    // For getting the values of the additional resources checkboxes
    var checkboxes = document.getElementsByName('resources');
    var vals = "";
    for (var i=0, n=checkboxes.length;i<n;i++) {
        if (checkboxes[i].checked) {
            alert("No additional resources should be checked at this time.")
            console.log("vals value?", vals)

            // return false
            return;

        }
    }
    if (vals) vals = vals.substring(1);

    else if (vals == "") {
        vals = "No additional resources."
        console.log("vals != value",vals)
    }


    var dischargeDate = new Date(document.getElementById('start-date').value);
    var dd = String(dischargeDate.getDate())
    var mm = String(dischargeDate.getMonth() + 1) //January is 0!
    var yyyy = dischargeDate.getFullYear();

    dischargeDate = dd + '/' + mm + '/' + yyyy;
    console.log("Discharge Date is: ", dischargeDate)

    wardOfDischarge = document.getElementById('ward-options').value


    var removalDate = new Date(document.getElementById('end-date').value);
    var dd2 = String(removalDate.getDate())
    var mm2 = String(removalDate.getMonth() + 1) //January is 0!
    var yyyy2 = removalDate.getFullYear();

    
    removalDate = dd2 + '/' + mm2 + '/' + yyyy2;
    console.log("Removal  Date is: ", removalDate)

    categoryDropdown = document.getElementById('category-dropdown').value
    
    normalSwellingText = "Normal swelling at the top of the wound which will resolve over a few weeks."
    console.log("normalSwellingText", normalSwellingText)

    woundDropdown = document.getElementById('wound-dropdown').value
    console.log("woundDropdown", woundDropdown)

    woundClosureMaterialDropdown = document.getElementById('wound-closure-material-dropdown').value
    console.log("woundClosureMaterialDropdown", woundClosureMaterialDropdown)

    drainSitesDropdown = document.getElementById('drain-sites-dropdown').value
    console.log("drainSitesDropdown", drainSitesDropdown)

    surgeonName = document.getElementById('doctor-name').value
    console.log("surgeon name", surgeonName)

    consultantName = document.getElementById('consultant-dropdown').value


    console.log("wound tb", woundTextBox.value)
    //var str = woundTextBox.includes("scratch", "scratches", "scratched", "scratching")

    var str = woundTextBox.indexOf("scratch", "scratches", "scratched", "scratching") !== -1

    console.log("scratch str", str.value)


    var logo = document.getElementById('logo')

    // WORKING VALIDATION
    // if, else if statements for validation on the form
    if (dischargeDate == "" || dischargeDate == "NaN/NaN/NaN") {
        alert("Please enter a date of discharge.")
        
    }

    else if (dischargeDate != todaysDate) {
        alert("The date of discharge should be todays date. Please enter a correct date of discharge.")
    }

    else if (wardOfDischarge != document.getElementById('juniper-ward-correct').value ) {
        alert("Mr Blogg is being discharged from Juniper Ward. Please ensure you've chosen the correct ward from the form.")
        //return false
        return;
    }

    else if(categoryDropdown != document.getElementById('category-cardiac-surgical-correct').value) {
        alert("Mr Blogg has had cardiac surgery. Please ensure you have chosen the correct category.")
        //return false
        return;
    }

    else if (woundDropdown != document.getElementById('wound-dropdown-correct').value) {
        alert("Please indicate that the wound is dry and exposed on the day of discharge.")
        //return false
        return;
    }

    else if (woundClosureMaterialDropdown != document.getElementById('wound-closure-correct').value) {
        alert("Please indicate what type of wound closure material is being used in this scenario.")
        //return false
        return;
    }

    if (woundTextBox != "" && str == false){
        alert('You must include a small comment about scratches present on the wound. Please ensure all spelling is correct.')
        console.log("enter if 1 ", woundTextBox.value)
        //return false
        return;
    }

    else if (woundTextBox != "" && str == true) {
        woundTextBox == woundTextBox
        console.log("enter if 2 ", woundTextBox)
    }

    else {
        woundTextBox = "No additional comments."
        console.log("enter if 3 ", woundTextBox.value)
    }   



    if (microValue != document.getElementById('micro-three').value) {
        alert("Mr Blogg has a sternal wound swab pending. Please ensure you have chosen the correct answer from the Micro for wound options.")
    }

    else if (drainSitesDropdown != document.getElementById('drain-sites-dropdown-correct').value) {
        alert("Mr Blogg will need his drain sutures removed. Please ensure you have chosen the correct Drain sites option.")
    }

    else if (removalDate == "" || removalDate == "NaN/NaN/NaN") {
        alert("Please enter a removal date.")
    }

    else if (removalDate != formattedOneWeekDate) {
        alert("The removal date should be a week from the discharge date. Please enter a correct removal date.")
    }

    else if (checkedImg != document.getElementById('wound-photo-four-img')) {
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

        else if (document.getElementById('wound-photo-five').checked == true) {
            photoValue = document.getElementById('wound-photo-five').value;
            alert(photoValue);
        }
    }

    else if (consultantName != document.getElementById('consultant-correct').value) {
        alert("Ms C Halsey performed the surgery for Mr Blogg. Please enter the correct consultant.")
    }

    else if (surgeonName == "") {
        alert("Please enter a name in this field.")
    }
    // END WORKING VALIDATION

    // This else is where the form is generated after all the statements above are correct
    else {

        // This adds the selected options into p1 on the trial-scenario.html page pdf section
        p1.innerHTML = dischargeDate + " " + microValue 
        + " " + normalSwellingText + " " + woundDropdown 
        + " " + "Wound is closed using: " + woundClosureMaterialDropdown 
        + " along the central incision." + " " + drainSitesDropdown + " " + "on: "
        + removalDate

        woundTbComments.innerHTML = woundTextBox
        consultant.innerHTML = consultantName
        additionalResources.innerHTML = vals

        // This is where the doc is started
        // Creates a new doc
        var options = {unit: 'px', format: 'a4'};
        var doc = new jsPDF(options);
        doc.setFontSize(14);

        doc.text('PHOTO AT DISCHARGE - CARDIAC (SURGICAL)', doc.internal.pageSize.getWidth() / 2, 60, null, null, 'center');

        doc.setFontSize(10);

        doc.text('Mr J Blogg XX-XXX', 20, 80);
        doc.text('NHS NUMBER XXX XXX XXX', 20, 90);

        doc.addImage(logo, 'JPEG', 330, 10, 100, 35.71);

        doc.addImage(checkedImg, 'JPEG', 280, 100, 150, 300);

        doc.fromHTML($('#left-text').get(0), 20, 92, {
            'width': 250,        
        });

        doc.fromHTML($('#bottom-text').get(0), 20, 520, {
            'width': 400,
        });

        doc.fromHTML($('#bottom-sign').get(0), 20, 595, {
            'width': 400,
        });

        // Save pdf
        doc.save('Photo-at-Discharge.pdf');
    }

}
// End PDF


//works - TODO: might not be necessary - will keep commented for now
// function checkDrName() {

//     let docTextbox = document.getElementById('doctor-name')

//     if ((docTextbox).value == "") {
//         alert('Please enter a doctors name')
//     }
// }

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