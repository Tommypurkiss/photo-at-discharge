
// Todays date 
let todaysDate = new Date()
let day = String(todaysDate.getDate())
let month = String(todaysDate.getMonth() + 1)
let year = String(todaysDate.getFullYear())
todaysDate = day + "/" + month + "/" + year
console.log("todays date is: ", todaysDate)
document.getElementById('todays-date').innerHTML = "Todays date: " + todaysDate

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
let possiblySepsisRow = document.getElementById('possibly-sepsis-row')
let sepsisRedFlagRow = document.getElementById('sepsis-red-flag-row')
let sepsisSubheading = document.getElementById('sepsis-subheading')

function checkWoundDescCorrect() {

    if(woundDescPyrexiaCorrect.checked == true) {
        possiblySepsisRow.classList.add("display-table-row")
        sepsisSubheading.classList.add("display-table-heading")
        sepsisRedFlagRow.classList.add("display-table-row")
    }
    else if (woundDescPyrexiaCorrect.checked == false) {
        possiblySepsisRow.classList.remove("display-table-row")
        sepsisSubheading.classList.remove("display-table-heading")
        sepsisRedFlagRow.classList.remove("display-table-row")
        redFlagRow.classList.remove("display-table-row")
    }
}



let redFlagCorrect = document.getElementById('red-flag-correct')
let redFlagRow = document.getElementById('red-flag-row')

function checkRedFlagFormAnswer() {

    if (redFlagCorrect.checked == false) {
        redFlagRow.classList.add("display-table-row")
    }
    else if (redFlagCorrect.checked == true) {
        redFlagRow.classList.remove("display-table-row")
    }
}



let woundDressingCorrect = document.getElementById('wound-dressing-form-correct')
let negativePressureRow = document.getElementById('negative-pressure-row')
let vacIdNumberRow = document.getElementById('vac-id-number-row')
let vacVolumeRow = document.getElementById('vac-volume-row')

function checkWoundDressingAnswer() {
    
    if (woundDressingCorrect.checked == true) {
        negativePressureRow.classList.add("display-table-row")
        vacIdNumberRow.classList.add("display-table-row")
        vacVolumeRow.classList.add("display-table-row")
    }
    else if (woundDressingCorrect.checked == false) {
        negativePressureRow.classList.remove("display-table-row")
        vacIdNumberRow.classList.remove("display-table-row")
        vacVolumeRow.classList.remove("display-table-row")
    }
}




let exudateFormRadioCorrect = document.getElementById('exudate-form-serous-correct')

function setExudateValue() {
    if (exudateFormRadioCorrect.checked == true) {
        exudateFormRadioCorrectValue = exudateFormRadioCorrect.value
    }
}






function generatePDF() {
    
    // functions
    setWoundTypeValue()
    setExudateValue()

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


    //pressure ulcer dropdown
    let pressureUlcerDropdown = document.getElementById('pressure-ulcer-dropdown').value

    // occurence dropdown
    let occurenceDropdown = document.getElementById('occurence-dropdown').value

    //body location
    let bodyLocationDropdown = document.getElementById('body-location-dropdown').value

    //wound description checkbox
    let woundDescriptionCheckbox = document.getElementsByName('wound-checkbox')
    let woundDescriptionCheckboxValue = ""
    let woundDescriptionCheckboxSlough = document.getElementById('wound-description-slough-correct')
    let woundDescriptionCheckboxPyrexia = document.getElementById('wound-description-pyrexia-correct')
    let woundDescriptionCheckboxOdour = document.getElementById('wound-description-odour-correct')
    let woundDescriptionCheckboxCorrect = woundDescriptionCheckboxSlough && woundDescriptionCheckboxPyrexia && woundDescriptionCheckboxOdour


    // if (woundDescriptionCheckbox.checked == woundDescriptionCheckboxCorrect) {
    //     woundDescriptionCheckboxValue == woundDescriptionCheckboxCorrect.value
    // }


    for (var i=0, n=woundDescriptionCheckbox.length;i<n;i++) {
        if (woundDescriptionCheckbox[i].checked) {
            // alert("No additional resources should be checked at this time.")

            woundDescriptionCheckboxValue += ","+ woundDescriptionCheckbox[i].value;
            console.log("vals value?", woundDescriptionCheckboxValue)

            // // return false
            // return;
        }

        // if ((woundDescriptionCheckboxSlough && woundDescriptionCheckboxPyrexia && woundDescriptionCheckboxOdour).checked) {
        //     // alert("No additional resources should be checked at this time.")

        //     woundDescriptionCheckboxValue += ","+ woundDescriptionCheckboxSlough && woundDescriptionCheckboxPyrexia && woundDescriptionCheckboxOdour.value;
        //     console.log("vals value?", woundDescriptionCheckboxValue)

        //     // // return false
        //     // return;
        // }


    //     if (woundDescriptionCheckbox[i].checked == woundDescriptionCheckboxCorrect) {
    //         // alert("No additional resources should be checked at this time.")

    //         woundDescriptionCheckboxValue +=  woundDescriptionCheckboxCorrect.value;
    //         console.log("vals value?", woundDescriptionCheckboxValue)

    //         // // return false
    //         // return;
    //     }

    }
    if (woundDescriptionCheckboxValue) woundDescriptionCheckboxValue = woundDescriptionCheckboxValue.substring(1);

    // else if (woundDescriptionCheckboxValue == "") {
    //     //woundDescriptionCheckboxValue = "No additional resources."
    //     alert("check the correct wound description options")
        
    //     console.log("vals != value",woundDescriptionCheckboxValue)
    // }


    
    //let exudateFormRadio = document.getElementById('exudate-form')




    // pdf wound assessment
    let pdfWoundAssessment = document.getElementById('pdf-wound-assessment')
    console.log("pdf wound assessment value is: ", pdfWoundAssessment)

    // pdf wound type answer 
    let pdfWoundTypeAnswer = document.getElementById('pdf-wound-type-answer')
    console.log("pdf wound type answer is: ", pdfWoundTypeAnswer)

    let pdfPressureUlcerGradeAnswer = document.getElementById('pdf-pressure-ulcer-grade-answer')
    console.log("pdf pressure ulcer grade answer is: ", pdfPressureUlcerGradeAnswer)

    let pdfOccurenceAnswer = document.getElementById('pdf-occurence-answer')
    console.log("pdf occurence answer is: ", pdfOccurenceAnswer)

    let pdfBodyLocationAnswer = document.getElementById('pdf-body-location-answer')
    console.log("pdf body location answer is: ", pdfBodyLocationAnswer)

    let pdfWoundDescriptionAnswer = document.getElementById('pdf-wound-description-answer')
    console.log("pdf wound description answer is: ", pdfWoundDescriptionAnswer)

    let pdfExudateAnswer = document.getElementById('pdf-exudate-answer')
    console.log("pdf exudate answer is: ", pdfExudateAnswer)
    // pdf wound assessment end





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
    else if (pressureUlcerDropdown != document.getElementById('pressure-ulcer-dropdown-correct').value) {
        alert("Mrs Olay's Pressure Ulcer is a Grade III, please make sure you've selected the correct option")
    }
    else if (occurenceDropdown != document.getElementById('occurence-dropdown-correct').value) {
        alert("Mrs Olay was admitted with, please make sure you've selected the correct option")
    }

    else if (bodyLocationDropdown != document.getElementById('body-location-sacrum-correct').value) {
        alert("Mrs Olay Ulcer is located on her Sacrum, please make sure you have selected the correct option")
    }
    
    // else if (pdfWoundDescriptionAnswer != ) {

    // }

    else if (woundDescriptionCheckboxValue == "") {
        //woundDescriptionCheckboxValue = "No additional resources."
        alert("check the correct wound description options")
        
        console.log("vals != value",woundDescriptionCheckboxValue)
    }

    else if (exudateFormRadioCorrect.checked == false) {
        alert("The cannister has drained 110mls of serous exudate, please make sure you have selected the correct option  ")
    }


    // PDF VALIDATION ENDS HERE


    else { // creates pdf if all answers are accepted okay

        // html pdf section answers

        pdfWoundTypeAnswer.innerHTML = woundTypeRadioCorrectValue
        console.log("pdfwoundtypeanswer", pdfWoundTypeAnswer)

        pdfPressureUlcerGradeAnswer.innerHTML = pressureUlcerDropdown
        pdfOccurenceAnswer.innerHTML = occurenceDropdown
        pdfBodyLocationAnswer.innerHTML = bodyLocationDropdown
        pdfWoundDescriptionAnswer.innerHTML = woundDescriptionCheckboxValue
        pdfExudateAnswer.innerHTML = exudateFormRadioCorrectValue

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

        doc.addImage(demoImg, 'JPEG', 280, 80, 150, 300); // demo side image to be changed

        doc.save('WoundCare1.pdf') //save the pdf


    }

    // // doc section
    // let options = {unit: 'px', format: 'a4'}
    // let doc = new jsPDF(options)

    // doc.addImage(logo, 'JPEG', 330, 10, 100, 35.71); // logo

    // doc.setFontSize(14) // set title font size
    // doc.text('WOUND TYPE - BODY LOCATION', doc.internal.pageSize.getWidth() / 2, 60, null, null, 'center') //title
    
    // doc.setFontSize(10) // set normal font size
    
    // // patient details text
    // doc.text("Name: Mrs Francine Olay", 20, 80)
    // doc.text("NHS Number: 242 330 303", 20, 90)
    // doc.text("DOB: 20/12/1969", 20, 100)
    // doc.text("Today's date: " + todaysDate, 20, 110)

    // doc.text("Responsible clinician: " + clinicianValue, 20, 130)
    // doc.text("Current Ward and Bed Number: " + wardValue + " | " + bedNumber, 20, 140)

    // doc.fromHTML($('#pdf-wound-assessment').get(0), 20, 150, {
    //     'width' : 250,
    // })

    // doc.addImage(demoImg, 'JPEG', 280, 80, 150, 300); // demo side image to be changed

    // doc.save('WoundCare1.pdf') //save the pdf


}