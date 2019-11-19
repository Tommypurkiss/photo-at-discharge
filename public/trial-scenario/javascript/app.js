

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




function checkBHIS() {

    var bhisOption = document.getElementById('bhis-option')

    if(bhisOption.checked == true) {
        // tm = "TM"
        // bhisOption.value = "Additional BHIS" + tm.sup() + " cardiac surgical bra provided."
        // &#153;
        alert("Please make sure this is correct, the surgical bra is for female patients only.")
        console.log(bhisOption)

    }   else if (bhisOption.checked == false) {
        console.log(bhisOption)

    }
    

}


// function isLetter(str) {
//     return str.length === 1 && str.match(/[a-z]/i);
//   }


// function hasLowerCase(str) {
//     if(str.toUpperCase() != str) {
//         return true;
//     }
//     return false;
// }


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
    for (var i=0, n=checkboxes.length;i<n;i++) 
    {
        if (checkboxes[i].checked) 
        {
            // vals += " " + checkboxes[i].value;
            vals += " " + checkboxes[i].value;

            console.log("vals value?", vals)
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
    console.log("start Date", dischargeDate)


    var removalDate = new Date(document.getElementById('end-date').value);
    var dd2 = String(removalDate.getDate())
    var mm2 = String(removalDate.getMonth() + 1) //January is 0!
    var yyyy2 = removalDate.getFullYear();

    removalDate = dd2 + '/' + mm2 + '/' + yyyy2;
    console.log("removal  Date", removalDate)

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

    console.log("wound tb", woundTextBox)
    var str = woundTextBox.includes("scratch", "scratches", "scratched", "scratching")
    // str.length === [] && str.match(/[a-zA-Z]/i);
    //str === str.length.match(/[a-zA-Z]/i);
    //var str2 = ""



    console.log("scratch str", str.value)


    var logo = document.getElementById('logo')


    if (dischargeDate == "" || dischargeDate == "NaN/NaN/NaN") {
        alert("Please enter a date of discharge")
    }

    else if(categoryDropdown != document.getElementById('category-cardiac-surgical-correct').value) {
        alert("Please ensure you have chosen the correct category")
    }

    else if (woundDropdown != document.getElementById('wound-dropdown-correct').value) {
        //alert("Incorrect answer: please try again and choose the correct answer from the Wound dropdown menu")
        alert("Please indicate that the wound is dry and exposed on the day of discharge.")
        return false
    }

    else if (woundClosureMaterialDropdown != document.getElementById('wound-closure-correct').value) {
        alert("Please indicate what type of wound closure material is being used in this scenario.")
        return false
    }




    //this finally bloody works
    if (woundTextBox != "" && str == false){
        // && str == false
        alert('You must include a small comment about scratches present on the wound. Please ensure all spelling is correct.')
        console.log("enter if 1 ", woundTextBox.value)
        return false

    }
    else if (woundTextBox != "" && str == true) {

    woundTextBox == woundTextBox
    console.log("enter if 2 ", woundTextBox)
    }

    else {
        woundTextBox = "No additional comments."
        //alert("Are you sure you wish to continue without entering any additional comments in the wound text box")
        console.log("enter if 3 ", woundTextBox.value)
    }   


// !=
// if(woundTextBox != "") {

//     for (i = 0; i <= str.length; i++) {

//         if(str.charAt(i) >= "a" && str.charAt(i) <= "z") {
//             woundTextBox == str
            
//         }
//         if (str.charAt(i) >= "A" && str.charAt(i) <= "Z") {
//             woundTextBox == str
//         }
//         // else {
//         //     // if(str == false)
            
//         //     alert('You must include a small comment about scratches present on the wound. Please ensure all spelling is correct.')
//         //     return true
//         // }
//     }
// }
// else if(woundTextBox == ""){
//     woundTextBox = "No additional comments."

// }
// else if(woundTextBox != "" && str == false) {
//     // if(str == false)
    
//     alert('You must include a small comment about scratches present on the wound. Please ensure all spelling is correct.')
//     return true
// }


    if (microValue != document.getElementById('micro-three').value) {
        alert("Incorrect answer: please try again and choose the correct answer from the Micro for wound radio buttons")
    }

    else if (drainSitesDropdown != document.getElementById('drain-sites-dropdown-correct').value) {
        alert("Incorrect answer: please try again and choose the correct answer from the Drain sites dropdown menu")
    }

    else if (removalDate == "" || removalDate == "NaN/NaN/NaN") {
        // removalDate != dischargeDate
        alert("Please enter a removal date")
    }

    else if (checkedImg != document.getElementById('wound-photo-four-img')) {
        //alert("Incorrect answer: please try again and choose the correct image")
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

    // else if (consultantName == "") {
    //     alert("Please enter your name")
    // }

    else if (consultantName != document.getElementById('consultant-correct').value) {
        alert("Please enter the correct consultant")
    }

    else {



        p1.innerHTML = dischargeDate + " " + microValue 
        + " " + normalSwellingText + " " + woundDropdown 
        + " " + "Wound is closed using: " + woundClosureMaterialDropdown 
        + " along the central incision." + " " + drainSitesDropdown + " " + "on: "
        + removalDate


        woundTbComments.innerHTML = woundTextBox

        consultant.innerHTML = consultantName
        additionalResources.innerHTML = vals

        // New Doc
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