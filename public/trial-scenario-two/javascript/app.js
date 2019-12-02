
let todaysDate = new Date()
let day = String(todaysDate.getDate())
let month = String(todaysDate.getMonth() + 1)
let year = String(todaysDate.getFullYear())
todaysDate = day + "/" + month + "/" + year
console.log("todays date is: ", todaysDate)
document.getElementById('todays-date').innerHTML = "Todays date: " + todaysDate

let logo = document.getElementById('logo')

let demoImg = document.getElementById('demo-img')

function checkWoundTypeCorrect() {
    // make pressure ulcer row appear when the correct wound type radio answer is chosen 
    let woundTypeRadioCorrect = document.getElementById('wound-type-radio-correct') 
    let pressureUlcerRow = document.getElementById('pressure-ulcer-row')
    let occurenceRow = document.getElementById('occurence-row')

    if (woundTypeRadioCorrect.checked == true){
        pressureUlcerRow.classList.add("display-table-row")
        occurenceRow.classList.add("display-table-row")
        console.log("true")
    }
    else if (woundTypeRadioCorrect.checked == false) {
        pressureUlcerRow.classList.remove("display-table-row")
        occurenceRow.classList.remove("display-table-row")
        console.log("not true")
    }
}

function checkWoundDescCorrect() {

    let woundDescPyrexiaCorrect = document.getElementById('wound-description-pyrexia-correct')
    let woundDescSloughCorrect = document.getElementById('wound-description-slough-correct')
    let woundDescOdourCorrect = document.getElementById('wound-description-odour-correct')

    let possiblySepsisRow = document.getElementById('possibly-sepsis-row')
    let sepsisRedFlagRow = document.getElementById('sepsis-red-flag-row')

    let sepsisSubheading = document.getElementById('sepsis-subheading')

    if(woundDescPyrexiaCorrect.checked == true) {
        possiblySepsisRow.classList.add("display-table-row")
        sepsisSubheading.classList.add("display-table-heading")
        sepsisRedFlagRow.classList.add("display-table-row")
    }
    else if (woundDescPyrexiaCorrect.checked == false) {
        possiblySepsisRow.classList.remove("display-table-row")
        sepsisSubheading.classList.remove("display-table-heading")
        sepsisRedFlagRow.classList.remove("display-table-row")
    }
}

function checkRedFlagFormAnswer() {

    let redFlagCorrect = document.getElementById('red-flag-correct')
    let redFlagRow = document.getElementById('red-flag-row')

    if (redFlagCorrect.checked == false) {
        redFlagRow.classList.add("display-table-row")
    }
    else if (redFlagCorrect.checked == true) {
        redFlagRow.classList.remove("display-table-row")
    }
}


function checkWoundDressingAnswer() {
    
    let woundDressingCorrect = document.getElementById('wound-dressing-form-correct')
    let negativePressureRow = document.getElementById('negative-pressure-row')
    let vacIdNumberRow = document.getElementById('vac-id-number-row')
    let vacVolumeRow = document.getElementById('vac-volume-row')

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





function generatePDF() {
    

    // pdf validation

    // if () { } else { }


    // doc section
    let options = {unit: 'px', format: 'a4'}
    let doc = new jsPDF(options)
    doc.setFontSize(14)
    doc.text('WOUNDCARE1', doc.internal.pageSize.getWidth() / 2, 60, null, null, 'center');


    doc.addImage(logo, 'JPEG', 330, 10, 100, 35.71);

    doc.setFontSize(10)
    doc.text("test text", 20, 20)

    doc.addImage(demoImg, 'JPEG', 280, 100, 150, 300);


    doc.save('WoundCare1.pdf')
}