
// Todays date 
let todaysDate = new Date()
let day = String(todaysDate.getDate())
let month = String(todaysDate.getMonth() + 1)
let year = String(todaysDate.getFullYear())
todaysDate = day + "/" + month + "/" + year
console.log("todays date is: ", todaysDate)
document.getElementById('todays-date').innerHTML = "Today's date: " + todaysDate






// yesterdays date 
let yesterdaysDate = new Date()
yesterdaysDate = ((day) - 1) + "/" + month + "/" + year
console.log("yesterdays date is: ",yesterdaysDate)



// date planned next review
let threeDays = 1
let nextReviewDateTime = new Date()
nextReviewDateTime.setDate(nextReviewDateTime.getDate() + threeDays * 3)
let nextReviewDateFormatted = nextReviewDateTime.getDate() + "/" + (nextReviewDateTime.getMonth() + 1) + "/" + nextReviewDateTime.getFullYear()
console.log("3 days time removal date: ", nextReviewDateFormatted)



// Images 
let logo = document.getElementById('logo')
let demoImg = document.getElementById('demo-img')



let woundTypeRadioCorrect = document.getElementById('wound-type-radio-correct') 
let pressureUlcerRow = document.getElementById('pressure-ulcer-row')
let occurenceRow = document.getElementById('occurence-row')

let pdfPressureUlcerP = document.getElementById('pdf-p-pressure-ulcer')
let pdfOccurenceP = document.getElementById('pdf-p-occurence')

function checkWoundTypeCorrect() {

    //setWoundTypeValue()
    // make pressure ulcer row appear when the correct wound type radio answer is chosen 
    if (woundTypeRadioCorrect.checked == true){
        pressureUlcerRow.classList.add("display-table-row")
        occurenceRow.classList.add("display-table-row")
        console.log("true")

        pdfPressureUlcerP.classList.add("display-block")
        pdfOccurenceP.classList.add("display-block")

    }
    else if (woundTypeRadioCorrect.checked == false) {
        pressureUlcerRow.classList.remove("display-table-row")
        occurenceRow.classList.remove("display-table-row")
        console.log("not true")

        pdfPressureUlcerP.classList.remove("display-block")
        pdfOccurenceP.classList.remove("display-block")
    }
}



// this sets the value of the wound type checked value 
function setWoundTypeValue() {

    if (woundTypeRadioCorrect.checked == true) {
        woundTypeRadioCorrectValue = woundTypeRadioCorrect.value
    }
}



let woundDescPyrexiaCorrect = document.getElementById('wound-description-pyrexia-correct')
let woundDescSloughCorrect = document.getElementById('wound-description-slough-correct')
let woundDescOdourCorrect = document.getElementById('wound-description-odour-correct')
let woundDescAllCorrect = woundDescPyrexiaCorrect && woundDescSloughCorrect && woundDescOdourCorrect
let possiblySepsisRow = document.getElementById('possibly-sepsis-row')
let sepsisRedFlagRow = document.getElementById('sepsis-red-flag-row')
let sepsisSubheading = document.getElementById('sepsis-subheading')

function checkWoundDescCorrect() {

    if(woundDescPyrexiaCorrect.checked == true) {
        possiblySepsisRow.classList.add("display-table-row")
        sepsisSubheading.classList.add("display-table-heading")
        //sepsisRedFlagRow.classList.add("display-table-row")
    }
    else if (woundDescPyrexiaCorrect.checked == false) {
        possiblySepsisRow.classList.remove("display-table-row")
        sepsisSubheading.classList.remove("display-table-heading")
        sepsisRedFlagRow.classList.remove("display-table-row")
        redFlagRow.classList.remove("display-table-row")
    }
}

// let sepsisRedFlagValue = ""
let possiblySepsisForm = document.getElementById('possibly-sepsis-form')




let possiblySepsisNo = document.getElementById('possibly-sepsis-no')
let possibSepsisTreatment = document.getElementById('possibly-sepsis-treatment')
let possiblySepsisYes = document.getElementById('possibly-sepsis-yes')
let possiblySepsisUnsure = document.getElementById('possibly-sepsis-unsure')
let allPossiblySepsisOptions = possiblySepsisNo && possibSepsisTreatment && possiblySepsisYes && possiblySepsisUnsure


function checkPossiblySepsis() {
    
    if (document.getElementById('possibly-sepsis-yes').checked == true) {
        sepsisRedFlagRow.classList.add("display-table-row")


    }
    if (document.getElementById('possibly-sepsis-no').checked == true) {

        sepsisRedFlagRow.classList.remove("display-table-row")
        redFlagRow.classList.remove("display-table-row")
        //sepsisRedFlagValue == sepsisRedFlagValue.value


        //document.getElementById('red-flag-form').checked == false
        // sepsisRedFlagValue = document.querySelector('input[name="sepred"]:checked').checked == false;
    }
    if (document.getElementById('possibly-sepsis-unsure').checked == true) {
        sepsisRedFlagRow.classList.add("display-table-row")

    }
    if (document.getElementById('possibly-sepsis-treatment').checked == true) {
        //document.querySelector('input[name="sepred"]:checked').checked == false;
        sepsisRedFlagRow.classList.remove("display-table-row")
        redFlagRow.classList.remove("display-table-row")

        // sepsisRedFlagValue = document.querySelector('input[name="sepred"]:checked').checked == false;

        //document.getElementById('red-flag-form').checked == false
    }
}





let redFlagCorrect = document.getElementById('red-flag-correct')
let redFlagRow = document.getElementById('red-flag-row')

function checkRedFlagFormAnswer() {

    if (redFlagCorrect.checked == false) {
        redFlagRow.classList.add("display-table-row")
        //sepsisRedFlagValue = document.querySelector('input[name="sepred"]:checked').value;


    }
    else if (redFlagCorrect.checked == true) {
        redFlagRow.classList.remove("display-table-row")
        //sepsisRedFlagValue = document.querySelector('input[name="sepred"]:checked').value;

    }
}



let woundDressingCorrect = document.getElementById('wound-dressing-form-correct')
let negativePressureRow = document.getElementById('negative-pressure-row')
let vacIdNumberRow = document.getElementById('vac-id-number-row')
let vacIntensityRow = document.getElementById('vac-intensity-row')
let vacVolumeRow = document.getElementById('vac-volume-row')

function checkWoundDressingAnswer() {
    
    if (woundDressingCorrect.checked == true) {
        negativePressureRow.classList.add("display-table-row")
        vacIdNumberRow.classList.add("display-table-row")
        vacIntensityRow.classList.add("display-table-row")
        vacVolumeRow.classList.add("display-table-row")
    }
    else if (woundDressingCorrect.checked == false) {
        negativePressureRow.classList.remove("display-table-row")
        vacIdNumberRow.classList.remove("display-table-row")
        vacIntensityRow.classList.remove("display-table-row")
        vacVolumeRow.classList.remove("display-table-row")
    }
}




let exudateFormRadioCorrect = document.getElementById('exudate-form-serous-correct')
function setExudateValue() {
    if (exudateFormRadioCorrect.checked == true) {
        exudateFormRadioCorrectValue = exudateFormRadioCorrect.value
    }
}

let managementConsentCorrect = document.getElementById('management-consent-correct')
function setConsentValue() {
    if(managementConsentCorrect.checked == true) {
        managementConsentCorrectValue = managementConsentCorrect.value
    }
}

let analgesiaFormCorrect = document.getElementById('analgesia-form-correct')
function setAnalgesiaCorrect() {
    if(analgesiaFormCorrect.checked == true) {
        analgesiaFormCorrectValue = analgesiaFormCorrect.value
    }
}

let woundCleansingFormCorrect = document.getElementById('wound-cleansing-form-correct')
function setWoundCleansingCorrect() {
    if(woundCleansingFormCorrect.checked == true) {
        woundCleansingFormCorrectValue = woundCleansingFormCorrect.value
    }
}


let woundDressingFormCorrect = document.getElementById("wound-dressing-form-correct")
function setWoundDressingCorrect() {
    if(woundDressingFormCorrect.checked == true) {
        woundDressingFormCorrectValue = woundDressingFormCorrect.value
    }
}


let negativePressureFormCorrect = document.getElementById('negative-pressure-form-correct')
function setNegativePressureFormCorrect() {
    if(negativePressureFormCorrect.checked == true) {
        negativePressureFormCorrectValue = negativePressureFormCorrect.value
    }
}





// let possiblySepsisNo = document.getElementById('possibly-sepsis-no')
// let possibSepsisTreatment = document.getElementById('possibly-sepsis-treatment')
// let possiblySepsisYes = document.getElementById('possibly-sepsis-yes')
// let possiblySepsisUnsure = document.getElementById('possibly-sepsis-unsure')
// let allPossiblySepsisOptions = possiblySepsisNo && possibSepsisTreatment && possiblySepsisYes && possiblySepsisUnsure

// function possiblySepsisFunc() {

//     let possiblySepsisNo = document.getElementById('possibly-sepsis-no')
//     let possibSepsisTreatment = document.getElementById('possibly-sepsis-treatment')
//     let possiblySepsisYes = document.getElementById('possibly-sepsis-yes')
//     let possiblySepsisUnsure = document.getElementById('possibly-sepsis-unsure')
//     //let allPossiblySepsisOptions = possiblySepsisNo && possibSepsisTreatment && possiblySepsisYes && possiblySepsisUnsure

//     let sepsisRadio = document.querySelector('input[name="possep"]:checked')
//     let sepsisRadioValue = ""


//     if (sepsisRadio == possiblySepsisNo.checked) {
//         sepsisRadioValue == document.getElementById('possibly-sepsis-no').value
//     }
//     else if (sepsisRadio == possibSepsisTreatment.checked) {
//         alert("please choose another option")
//     }
//     else if (sepsisRadio == possiblySepsisYes.checked) {
//         sepsisRadioValue == document.getElementById('possibly-sepsis-yes').value
//     }
//     else if (sepsisRadio == possiblySepsisUnsure.checked) {
//         sepsisRadioValue == document.getElementById('possibly-sepsis-unsure').value
//     }

//     // if (possibSepsisTreatment.checked) {
//     //     alert("Incorrect option please try another option")
//     //     return
//     // }
//     // else if (possiblySepsisNo.checked) {
//     //     sepsisRadioValue = possiblySepsisNoValue
//     // }
// }



function possiblySepsisFunc() {

    if(document.getElementById('possibly-sepsis-no').checked == true) {
        sepsisRadioValue = document.getElementById('possibly-sepsis-no').value

        sepsisRedFlagValue = "" 

    }
    else if(document.getElementById('possibly-sepsis-yes').checked == true) {
        sepsisRadioValue = document.getElementById('possibly-sepsis-yes').value

        sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

    }
    else if(document.getElementById('possibly-sepsis-unsure').checked == true) {
        sepsisRadioValue = document.getElementById('possibly-sepsis-unsure').value    

        sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value


    }

    

}


   // else if (possiblySepsisYes.checked == true) {
    
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value
    // }
        
    // else if (possiblySepsisUnsure.checked == true) {
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

    // }


/* 


        if(document.querySelector('input[name="sepred"]:checked')){
            // alert("checked true ")
        sepsisRedFlagValue = "N/A" 

        } 
if(document.querySelector('input[name="sepred"]:checked')){
        alert("checked true ")
        sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

        } 
 if(document.querySelector('input[name="sepred"]:checked')){
        alert("checked true ")
        sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

        } 

*/

//let sepsisRedFlagValue = ""

// function sepsisRedFlagFunc() {
//     if(document.querySelector('input[name="sepred"]:checked')){
//         // alert("checked true ")
//     sepsisRedFlagValue = "N/A" 

//     } 
// else if(document.querySelector('input[name="sepred"]:checked')){
//     alert("checked true ")
//     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]').value

//     } 
// else if(document.querySelector('input[name="sepred"]:checked')){
//     alert("checked true ")
//     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]').value

//     } 
// }




function generatePDF() {
    
    // functions
    setWoundTypeValue()
    setExudateValue()
    setConsentValue()
    setAnalgesiaCorrect()
    setWoundCleansingCorrect()
    setWoundDressingCorrect()
    setNegativePressureFormCorrect()
    checkPossiblySepsis()
    possiblySepsisFunc()

    // date wound sample
    let woundSampleDate = new Date(document.getElementById('wound-sample-date').value)
    let dd = String(woundSampleDate.getDate())
    let mm = String(woundSampleDate.getMonth() + 1) //January is 0!
    let yyyy = woundSampleDate.getFullYear();
    woundSampleDate = dd + '/' + mm + '/' + yyyy;
    console.log("wound sample date is: ", woundSampleDate)

    // next review date

    let nextReviewDate = new Date(document.getElementById('next-review-date').value);
    let dd2 = String(nextReviewDate.getDate())
    let mm2 = String(nextReviewDate.getMonth() + 1) //January is 0!
    let yyyy2 = nextReviewDate.getFullYear();
    
    nextReviewDate = dd2 + '/' + mm2 + '/' + yyyy2;
    console.log("Removal  Date is: ", nextReviewDate)


    // vars  

    // Name of consultant / responsible clinician 
    let clinicianValue = document.getElementById('consultant-dropdown').value
    console.log("clinician value is: ", clinicianValue)

    // Current ward chosen
    let wardValue = document.getElementById('ward-options').value
    console.log("ward value is: ", wardValue)

    // Current bed number set
    let bedNumber = document.getElementById('bed-number').value
    console.log("bed number value is: ", bedNumber)

    //  Wound type form 
    let woundTypeForm = document.getElementById('wound-type-form').value
    console.log("wound type form value is: ", woundTypeForm)


    //pressure ulcer form
    let pressureUlcerForm = document.getElementById('pressure-ulcer-form').value
    console.log("pressure ulcer form value is: ", pressureUlcerForm)

    // occurence dropdown
    let occurenceDropdown = document.getElementById('occurence-dropdown').value

    //body location
    let bodyLocationDropdown = document.getElementById('body-location-dropdown').value

    //wound description checkbox
    let woundDescriptionCheckbox = document.getElementsByName('wound-checkbox')
    // let woundDescriptionCheckbox =  document.getElementById("wound-description-form")
    let woundDescriptionCheckboxValue = ""
    //let woundDescriptionCheckboxValue

    // let woundDescriptionCheckboxSlough = document.getElementById('wound-description-slough-correct')
    // let woundDescriptionCheckboxPyrexia = document.getElementById('wound-description-pyrexia-correct')
    // let woundDescriptionCheckboxOdour = document.getElementById('wound-description-odour-correct')
    // let woundDescriptionCheckboxCorrect = woundDescriptionCheckboxSlough && woundDescriptionCheckboxPyrexia && woundDescriptionCheckboxOdour
    // console.log("woundDescriptionCheckboxCorrect value is: ", woundDescriptionCheckboxCorrect.value)


    // Value version
    let woundDescriptionCheckboxSloughValue = document.getElementById('wound-description-slough-correct').value
    let woundDescriptionCheckboxPyrexiaValue = document.getElementById('wound-description-pyrexia-correct').value
    let woundDescriptionCheckboxOdourValue = document.getElementById('wound-description-odour-correct').value
    let woundDescriptionCheckboxCorrectValue = woundDescriptionCheckboxSloughValue + ", " + woundDescriptionCheckboxPyrexiaValue + ", " + woundDescriptionCheckboxOdourValue
    // console.log("woundDescriptionCheckboxCorrect value is: ", woundDescriptionCheckboxCorrect)

    // Original works adds all check box values
    // for (var i=0, n=woundDescriptionCheckbox.length; i<n; i++) {
    //     if (woundDescriptionCheckbox[i].checked) {

    //         woundDescriptionCheckboxValue += ", "+ woundDescriptionCheckbox[i].value;
    //         console.log("wound desc checkbox checked value", woundDescriptionCheckboxValue)

    //     }

    // }
    // if (woundDescriptionCheckboxValue) woundDescriptionCheckboxValue = woundDescriptionCheckboxValue.substring(1);

    // let testVal = ""
    // var str = ""
    // for (var i=0, n=woundDescriptionCheckbox.length; i<n; i++) {
    //     if (woundDescriptionCheckbox[i].checked) {

    //         // woundDescriptionCheckboxValue += ", "+ woundDescriptionCheckbox[i].value;
    //         // console.log("wound desc checkbox checked value", woundDescriptionCheckboxValue)

    //         str += woundDescriptionCheckbox[i].value
    //         console.log("str val: ", str)

    //     }

           
    // }
    // if (str) str = str.substring(1);

 
    
    //let exudateFormRadio = document.getElementById('exudate-form')

    let vacIdNumberTextbox = document.getElementById('vac-id-number-textbox').value

    let vacVolumeTextbox = document.getElementById('vac-volume-textbox').value
    
    let microbiologyDropdown = document.getElementById('microbiology-dropdown').value
    

    let possiblySepsisNoValue = document.getElementById('possibly-sepsis-no').value
    let possibSepsisTreatmentValue = document.getElementById('possibly-sepsis-treatment').value
    let possiblySepsisYesValue = document.getElementById('possibly-sepsis-yes').value
    let possiblySepsisUnsureValue = document.getElementById('possibly-sepsis-unsure').value
    let allPossiblySepsisOptionsValue = possiblySepsisNoValue && possibSepsisTreatmentValue && possiblySepsisYesValue && possiblySepsisUnsureValue


    // if (possiblySepsisNo.checked == true) {
    
    //         sepsisRedFlagValue = ""
    // }
    // else if (possibSepsisTreatment.checked == true) {
    //     alert("Incorrect option please try another option")
    //     return
    // }

    
    // else if (possiblySepsisYes.checked == true) {
    
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value
    // }
        
    // else if (possiblySepsisUnsure.checked == true) {
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

    // }


    // let sepsisRadio = document.querySelector('input[name="possep"]:checked')
    // let sepsisRadioValue = ""

    // console.log("sepsis Radio is: ", sepsisRadio)
    // // if (sepsisRadio == possiblySepsisNo.checked) {
    // //     sepsisRadioValue == document.getElementById('possibly-sepsis-no').value
    // // }




    // pdf wound assessment
    let pdfWoundAssessment = document.getElementById('pdf-wound-assessment')
    //console.log("pdf wound assessment value is: ", pdfWoundAssessment)

    // pdf wound type answer 
    let pdfWoundTypeAnswer = document.getElementById('pdf-wound-type-answer')
    //console.log("pdf wound type answer is: ", pdfWoundTypeAnswer)

    let pdfPressureUlcerGradeAnswer = document.getElementById('pdf-pressure-ulcer-grade-answer')
    //console.log("pdf pressure ulcer grade answer is: ", pdfPressureUlcerGradeAnswer)

    let pdfOccurenceAnswer = document.getElementById('pdf-occurence-answer')
    //console.log("pdf occurence answer is: ", pdfOccurenceAnswer)

    let pdfBodyLocationAnswer = document.getElementById('pdf-body-location-answer')
    //console.log("pdf body location answer is: ", pdfBodyLocationAnswer)

    let pdfWoundDescriptionAnswer = document.getElementById('pdf-wound-description-answer')
    //console.log("pdf wound description answer is: ", pdfWoundDescriptionAnswer)

    let pdfExudateAnswer = document.getElementById('pdf-exudate-answer')
    //console.log("pdf exudate answer is: ", pdfExudateAnswer)
    // pdf wound assessment end

    // sepsis

    let pdfPossiblySepsisAnswer = document.getElementById('pdf-possibly-sepsis-answer')
    let pdfRedFlagAnswer = document.getElementById('pdf-red-flag-answer')
    
    // sepsis end

    // pdf management
    let pdfManagement = document.getElementById('pdf-management')
    //console.log("pdfManagement: ", pdfManagement)

    // pdf management consent answer
    let pdfManagementConsentAnswer = document.getElementById('pdf-management-consent-answer')
    //console.log("pdf management consent answer is: ", pdfManagementConsentAnswer)

    // pdf management analgesia answer
    let pdfManagementAnalgesiaAnswer = document.getElementById('pdf-management-analgesia-answer')
    //console.log("pdf management analgesia answer is: ", pdfManagementAnalgesiaAnswer)

    // pdf management wound cleansing answer
    let pdfManagementWoundCleansingAnswer = document.getElementById('pdf-management-wound-cleansing-answer')
    //console.log("pdf management wound cleansing answer is: ", pdfManagementWoundCleansingAnswer)

    // pdf management wound dressing answer
    let pdfManagementWoundDressingAnswer = document.getElementById('pdf-management-wound-dressing-answer')
    //console.log("pdf management wound dressing answer is: ", pdfManagementWoundDressingAnswer)

    // pdf management status npt answer
    let pdfManagementStatusNptAnswer = document.getElementById('pdf-management-status-npt-answer')
    //console.log("pdf management status npt answer is: ", pdfManagementStatusNptAnswer)

    // pdf management vac id answer
    let pdfManagementVacIdAnswer = document.getElementById('pdf-management-vac-id-answer')
    //console.log("pdf management vac id answer is: ", pdfManagementVacIdAnswer)

    // pdf management vac mode answer
    let pdfManagementVacModeAnswer = document.getElementById('pdf-management-vac-mode-answer')
    //console.log("pdf management vac mode answer is: ", pdfManagementVacModeAnswer)

    // pdf management vac vol answer
    let pdfManagementVacVolAnswer = document.getElementById('pdf-management-vac-vol-answer')
    //console.log("pdf management vac vol answer is: ", pdfManagementVacVolAnswer)

    // pdf management wound sample date answer 
    let pdfManagementWoundSampleDateAnswer = document.getElementById('pdf-management-wound-sample-date-answer')
    //console.log("pdf management wound sample date answer is: ", pdfManagementWoundSampleDateAnswer)

    // pdf management microbiology answer
    let pdfManagementMicrobiologyAnswer = document.getElementById('pdf-management-microbiology-answer')
    //console.log("pdf management microbiology answer is: ", pdfManagementMicrobiologyAnswer)

    // pdf management next review date answer
    let pdfManagementNextReviewDateAnswer = document.getElementById('pdf-management-next-review-date-answer')
    //console.log("pdf management next review date answer is: ", pdfManagementNextReviewDateAnswer)

    let redFlagForm = document.getElementById('red-flag-form')

    //let sepsisReadioValue = document.querySelector('input[name="possep"]:checked').value;



    // PDF VALIDATION STARTS HERE

    // patient and ward details
    if (clinicianValue != document.getElementById("consultant-correct").value) {
        alert("You are caring for M T Stark's patient, please make sure you have chosen the correct Responsible clinician")
    }
    else if (wardValue != document.getElementById('maple-ward-correct').value) {
        alert("The ward you are caring for Mrs Olay on is Maple, please make sure you have chosen the correct Ward")
    }
    else if (bedNumber != "6") {
        alert("Mrs Olay is in bed 6, please make sure you have entered the correct Bed Number")
    }

    // wound assessment details

    else if (woundTypeRadioCorrect.checked == false) {
        alert("Mrs Olay is a patient for a Pressure Ulcer, please make sure you have chosen the correct wound type")
    }
    else if (pressureUlcerForm != document.getElementById('pressure-ulcer-dropdown-correct').value) {
        alert("Mrs Olay's Pressure Ulcer is a Grade III, please make sure you've selected the correct option")
    }
    else if (occurenceDropdown != document.getElementById('occurence-dropdown-correct').value) {
        alert("Mrs Olay was admitted with, please make sure you've selected the correct option")
    }

    else if (bodyLocationDropdown != document.getElementById('body-location-sacrum-correct').value) {
        alert("Mrs Olay Ulcer is located on her Sacrum, please make sure you have selected the correct option")
    }
    

    //  TODO: FIX THIS 
    // This works

    // else if (woundDescSloughCorrect.checked == false && woundDescPyrexiaCorrect.checked == false) {
    //     alert("pick slough & pyrexia")
    // }


    

    else if (woundDescAllCorrect.checked == false) {
        alert("please check the correct options")
    }
    
    
    else if (exudateFormRadioCorrect.checked == false) {
        alert("The cannister has drained 110mls of serous exudate, please make sure you have selected the correct option")
    }
    


    // else if (woundDescriptionCheckbox == woundDescriptionCheckboxCorrect) {
    //     console.log("correct pls", woundDescriptionCheckboxValue)
    //             alert("correct wound description options")
    // }


    // else if (woundDescriptionCheckbox.checked != woundDescriptionCheckboxCorrect) {
    //     //woundDescriptionCheckboxValue = "No additional resources."
    //     alert("check the correct wound description options")
        
    //     console.log("wound desc checkbox not checked value",woundDescriptionCheckboxValue)
    // }
    // else if (woundDescriptionCheckbox.checked == woundDescriptionCheckboxCorrect) {
    //     woundDescriptionCheckboxValue == woundDescriptionCheckbox.checked
    // }



    // let possiblySepsisNoValue = document.getElementById('possibly-sepsis-no').value
    // let possibSepsisTreatmentValue = document.getElementById('possibly-sepsis-treatment').value
    // let possiblySepsisYesValue = document.getElementById('possibly-sepsis-yes').value
    // let possiblySepsisUnsureValue = document.getElementById('possibly-sepsis-unsure').value
    // let allPossiblySepsisOptionsValue = possiblySepsisNoValue && possibSepsisTreatmentValue && possiblySepsisYesValue && possiblySepsisUnsureValue


    



    // end wound assessment details 


    // sepsis details


    else if (possibSepsisTreatment.checked) {
        alert("Incorrect option please try another option")
        return
    }



    // else if (possiblySepsisNo.checked) {
    //     sepsisRadioValue = possiblySepsisNoValue
    // }
    


    // else if (possiblySepsisNo.checked) {
    //     sepsisReadioValue = document.getElementById('possibly-sepsis-no').value
    // }
    // else if (possibSepsisTreatment.checked) {
    //     alert("Incorrect option please try another option")
    //     return
    // }
    

    // else if (possiblySepsisYes.checked) {
    //     sepsisReadioValue = document.getElementById('possibly-sepsis-yes').value
    // }
        
    // else if (possiblySepsisUnsure.checked) {
    //     sepsisReadioValue = document.getElementById('possibly-sepsis-unsure').value
    // }


    // else if (possiblySepsisNo.checked != document.getElementById('possibly-sepsis-no')) {
    //     alert('no')
    //     // sepsisReadioValue = document.getElementById('possibly-sepsis-no').value
    // }
    // else if (possibSepsisTreatment.checked) {
    //     alert("Incorrect option please try another option")
    //     return
    // }
    

    // else if (possiblySepsisYes.checked != document.getElementById('possibly-sepsis-yes')) {
    //     alert('yes')

    //     //sepsisReadioValue = document.getElementById('possibly-sepsis-yes').value
    // }
        
    // else if (possiblySepsisUnsure.checked != document.getElementById('possibly-sepsis-unsure')) {
    //     alert('unsure')

    //     // sepsisReadioValue = document.getElementById('possibly-sepsis-unsure').value
    // }


    // else if (possiblySepsisForm.checked == document.getElementById('possibly-sepsis-no')) {
    //     alert('no')
    //     // sepsisReadioValue = document.getElementById('possibly-sepsis-no').value
    // }
    // else if (possibSepsisTreatment.checked) {
    //     alert("Incorrect option please try another option")
    //     return
    // }
    // else if (possiblySepsisForm.checked == document.getElementById('possibly-sepsis-yes')) {
    //     alert('yes')

    //     //sepsisReadioValue = document.getElementById('possibly-sepsis-yes').value
    // }    
    // else if (possiblySepsisForm.checked == document.getElementById('possibly-sepsis-unsure')) {
    //     alert('unsure')
    //     // sepsisReadioValue = document.getElementById('possibly-sepsis-unsure').value
    // }




    // else if (possiblySepsisNo.checked == false) {
    //     // sepsisReadioValue = document.querySelector('input[name="possep"]:checked').value;
    //     alert("Please make sure you have chosen and option if possibly sepsis")
    // }
    // else if (possibSepsisTreatment.checked == true) {
    //     alert("Incorrect option please try another option")
    //     return
    // }
    

    // else if (possiblySepsisYes.checked == false) {
    //     // sepsisReadioValue = document.querySelector('input[name="possep"]:checked').value;
    //     alert("Please make sure you have chosen and option if possibly sepsis")

    // }
        
    // else if (possiblySepsisUnsure.checked == false) {
    //     // sepsisReadioValue = document.querySelector('input[name="possep"]:checked').value;
    //     alert("Please make sure you have chosen and option if possibly sepsis")

    // }




    // else if (possiblySepsisNo.checked == true) {
    //     sepsisRedFlagValue = ""
    // }
    // else if (possibSepsisTreatment.checked == true) {
    //     alert("Incorrect option please try another option")
    //     return
    // }

    // else if (possiblySepsisYes.checked == true) {
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value
    // }
        
    // else if (possiblySepsisUnsure.checked == true) {
    //     sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value
    // }




    // else if(redFlagForm.checked == false) {
    //     alert("Please check any Red Flag(s) option")
    // }
    // else if(redFlagForm.checked) {
    //     possiblySepsisValue = document.querySelector('input[name="sepred"]:checked').value
    // }


//    else if (possiblySepsisYes.checked == true) {
    
//         sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value
//     }
        
//     else if (possiblySepsisUnsure.checked == true) {
//         sepsisRedFlagValue = "Red Flag option selected is: " + document.querySelector('input[name="sepred"]:checked').value

//     }

    // else if (document.querySelector('input[name="sepred"]:checked') == false){
    //     alert("Please choose an option")   
    // }
    // else if (sepsisRedFlagValue === null){
    //     alert("Please choose an option")   
    // }


    // end sepsis details

    // management details

    else if (managementConsentCorrect.checked == false) {
        alert("The appropriate consent given is written, please make sure you have chosen the correct option")
    }
    else if (analgesiaFormCorrect.checked == false) {
        alert("Mrs Olay declined pain killers for the VAC dressing change, please make sure you have chosen the correct option")
    }
    else if (woundCleansingFormCorrect.checked == false) {
        alert("The wound has been cleaned with normal saline, please make sure you have chosen the correct option")
    }
    else if (woundDressingFormCorrect.checked == false) {
        alert("The wound dressing is vacuum assisted closure (VAC) dressing, please make sure you have chosen the correct option")
    }
    else if (negativePressureFormCorrect.checked == false) {
        alert("Therapy is continued, please make sure you have chosent he correct option")
    }
    else if (vacIdNumberTextbox != "12345") {
        alert("The correct unit number is 12345, please enter the correct VAC ID/Number")
    }
    else if (vacVolumeTextbox != "110") {
        alert("The correct amount is 110mls, please enter the correct amount")
    }

    else if (woundSampleDate == "" || woundSampleDate == "NaN/NaN/NaN") {
        alert("Please enter the wound sample date.")
        
    }
    else if (woundSampleDate != yesterdaysDate) {
        alert("The date of the wound sample was yesterday, please make sure you have entered the correct date")
    }
    else if (microbiologyDropdown != document.getElementById('microbiology-dropdown-ecoli-correct').value) {
        alert("The swab test result showed positive for Escherichia coli, please make sure you have chosen the correct option")
    }
    else if (nextReviewDate == "" || nextReviewDate == "NaN/NaN/NaN") {
        alert("Please enter the next review date.")
    }
    else if (nextReviewDate != nextReviewDateFormatted) {
        alert("The date of for the next review is in 3 days time, please make sure you have entered the correct date")
    }


    // end management details 

    // PDF VALIDATION ENDS HERE


    else { // creates pdf if all answers are accepted okay

        // html pdf section answers
        // wound assessment 
        pdfWoundTypeAnswer.innerHTML = woundTypeRadioCorrectValue
        pdfPressureUlcerGradeAnswer.innerHTML = pressureUlcerForm
        pdfOccurenceAnswer.innerHTML = occurenceDropdown
        pdfBodyLocationAnswer.innerHTML = bodyLocationDropdown
        pdfWoundDescriptionAnswer.innerHTML = woundDescriptionCheckboxCorrectValue
        //pdfWoundDescriptionAnswer.innerHTML = woundDescriptionCheckboxSloughValue + " " + woundDescriptionCheckboxPyrexiaValue
        // + " " + woundDescriptionCheckboxPyrexia + " " + woundDescriptionCheckboxOdour


        pdfExudateAnswer.innerHTML = exudateFormRadioCorrectValue


        // pdf sepsis
        pdfPossiblySepsisAnswer.innerHTML = sepsisRadioValue



        pdfRedFlagAnswer.innerHTML = sepsisRedFlagValue
        
        
        
        // pdfPossiblySepsisAnswer.innerHTML = possiblySepsisValue // this should be equal to yes/ no/ unsure/ treatment
        //pdfRedFlagAnswer.innerHTML = sepsisRedFlagValue // "Is a red flag present? " + 
        
        /*
        
        if yes unsure 
        innerhtml = value
        
        if no treatment
        innher httml = vallue ""

        */


        
        // management 
        pdfManagementConsentAnswer.innerHTML = managementConsentCorrectValue
        pdfManagementAnalgesiaAnswer.innerHTML = analgesiaFormCorrectValue
        pdfManagementWoundCleansingAnswer.innerHTML = woundCleansingFormCorrectValue
        pdfManagementWoundDressingAnswer.innerHTML = woundDressingFormCorrectValue
        pdfManagementStatusNptAnswer.innerHTML = negativePressureFormCorrectValue
        pdfManagementVacIdAnswer.innerHTML = vacIdNumberTextbox
        pdfManagementVacVolAnswer.innerHTML = vacVolumeTextbox
        pdfManagementWoundSampleDateAnswer.innerHTML = woundSampleDate
        pdfManagementMicrobiologyAnswer.innerHTML = microbiologyDropdown
        pdfManagementNextReviewDateAnswer.innerHTML = nextReviewDate
        // html pdf section answers ends here



        // doc section
        let options = {unit: 'px', format: 'a4'}
        let doc = new jsPDF(options)

        doc.addImage(logo, 'JPEG', 330, 10, 100, 35.71); // logo

        doc.setFontSize(14) // set title font size
        doc.text('WOUND TYPE - BODY LOCATION', doc.internal.pageSize.getWidth() / 2, 60, null, null, 'center') //title
        
        doc.setFontSize(10) // set normal font size
        
        // patient details text
        doc.text("Name: Mrs Francine Olay", 20, 80)
        doc.text("NHS Number: 242 330 303", 20, 90)
        doc.text("DOB: 20/12/1969", 20, 100)
        doc.text("Today's date: " + todaysDate, 20, 110)

        doc.text("Responsible clinician: " + clinicianValue, 20, 130)
        doc.text("Current Ward and Bed Number: " + wardValue + " | " + bedNumber, 20, 140)

        doc.fromHTML($('#pdf-wound-assessment').get(0), 20, 145, {
            'width' : 250,
        })

        doc.fromHTML($('#pdf-sepsis').get(0), 20, 275, {
            'width' : 250
        })

        doc.fromHTML($('#pdf-management').get(0), 20, 350, {
            'width' : 250,
        })

        doc.addImage(demoImg, 'JPEG', 280, 80, 150, 300); // demo side image to be changed

        doc.save('WoundCare1.pdf') //save the pdf


    }



}