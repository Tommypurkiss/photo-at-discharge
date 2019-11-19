// Date 
var today = new Date();
var dd = String(today.getDate())
var mm = String(today.getMonth() + 1) //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
console.log(today)


// function pdfValues() {
    

//     p1 = document.getElementById('p1');

//     dischargeDate = document.getElementById('start-date').required.value
//     console.log("dischargeDate", dischargeDate)
    
//     normalSwellingText = "Normal swelling at the top of the wound which will resolve over a few weeks."
//     console.log("normalSwellingText", normalSwellingText)

//     woundDropdown = document.getElementById('wound-dropdown').value
//     console.log("woundDropdown", woundDropdown)

//     drainSitesDropdown = document.getElementById('drain-sites-dropdown').value
//     console.log("drainSitesDropdown", drainSitesDropdown)

//     removalDate = document.getElementById('end-date').value
//     console.log("removalDate", removalDate)

//     legWoundsDropdown = document.getElementById('leg-wounds-dropdown').value
//     console.log("legWoundsDropdown", legWoundsDropdown)

//     p1.innerHTML = dischargeDate + " " + microValue 
//             + " " + normalSwellingText + " " + woundDropdown 
//             + " " + drainSitesDropdown + " " + removalDate
//             + " " + legWoundsDropdown + " " + removalDate

//     if ((dischargeDate === undefined) ) {
//         alert("Please enter a date")
//         console.log(" date undefined", dischargeDate)
//     }
//     else {
//         //return false
//         generatePDF()
//     }


// }


    // window.onload = function() {

    //     var bhisOption = document.getElementById('bhis-option')

    //         if(bhisOption.checked = true) {
    //             alert("mmm")
    //             console.log(bhisOption)
    //         }
            



    // }

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


    p1 = document.getElementById('p1');
    surgeon = document.getElementById('surgeon')

    woundTextBox = document.getElementById('wound-assessment-text').value
    woundTbComments = document.getElementById('wound-tb-comments')

    if (woundTextBox == "") {
        woundTextBox = "No additional comments."
        console.log("woundtb no addit comments", woundTextBox)
        //return true
    }

    


    additionalResources = document.getElementById('additional-resources')

    // For getting the values of the additional resources checkboxes
    var checkboxes = document.getElementsByName('resources');
    var vals = "";
    for (var i=0, n=checkboxes.length;i<n;i++) 
    {
        if (checkboxes[i].checked) 
        {
            //var text= sel.options[sel.selectedIndex].text;

            // vals += " " + checkboxes[i].value;

            vals += " " + checkboxes[i].value;


            //vals += " " + checkboxes.options[i.selectedIndex].text;

            //var text= vals.options[vals.selectedIndex].text;

            console.log("vals value?", vals)

        }
    }
    if (vals) vals = vals.substring(1);

    else if (vals == "") {
        vals = "No additional resources."
        console.log("vals != value",vals)
    }

    // if (text) text = text.substring(1);

    // else if (text == "") {
    //     text = "No additional resources."
    //     console.log("text != value",text)
    // }

    drainSites = document.getElementById('drain-sites-dropdown-correct')

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
    console.log("removal Date", removalDate)

    
    normalSwellingText = "Normal swelling at the top of the wound which will resolve over a few weeks."
    console.log("normalSwellingText", normalSwellingText)

    woundDropdown = document.getElementById('wound-dropdown').value
    console.log("woundDropdown", woundDropdown)

    drainSitesDropdown = document.getElementById('drain-sites-dropdown').value
    console.log("drainSitesDropdown", drainSitesDropdown)

    var logo = document.getElementById('logo')


    surgeonName = document.getElementById('doctor-name').value
    console.log("surgeon name", surgeonName)

    consultantName = document.getElementById('consultant-dropdown').value


    // Beginning of table validation
    if (dischargeDate == "" || dischargeDate == "NaN/NaN/NaN") {
        alert("Please enter a date of discharge")
    }

    // else if (removalDate == "" || removalDate == "NaN/NaN/NaN") {
    //     alert("Please enter a removal date")

    // }



    // if (woundTextBox != "") {
    //     woundTextBox == woundTextBox
    //     console.log("wountb 2 wountb")
    //     return false    
    // }
    // else if (woundTextBox == "") {
    //     woundTextBox = "No additional comments."
    //     console.log("woundtb no addit comments")
        
    // }

    // else if (woundTextBox == "") {
    //         woundTextBox = "No additional comments."
    //         console.log("woundtb no addit comments", woundTextBox)
    //         //return true
    //     }
    // if (woundTextBox != "") {
    //     woundTextBox == woundTextBox
    //     console.log("wountb 2 wountb")
    //     return false    
    // }
    



    // this checks if the correct drain site dropdown option has been chosen and if the removal date is not yet set
    // will then ask for a removal date if generate form is clicked
    // if both are fine then it will return false and continue
    else if (drainSitesDropdown == document.getElementById('drain-sites-dropdown-correct').value && removalDate == "NaN/NaN/NaN") {
        alert("Please enter a removal date")
        return false
    }
    else if (removalDate === "undefined") {
        removalDate == "No removal date entered."
        console.log("remov date", removalDate.value)
    }




    else {

        p1.innerHTML = dischargeDate + " " + microValue 
        + " " + normalSwellingText + " " + woundDropdown 
        + " " + drainSitesDropdown + " " + removalDate
        
        woundTbComments.innerHTML = woundTextBox

        consultant.innerHTML = consultantName
        additionalResources.innerHTML = vals

        //additionalResources.innerHTML = text


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
        microValue = document.getElementById('micro-two').value
    }
}











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