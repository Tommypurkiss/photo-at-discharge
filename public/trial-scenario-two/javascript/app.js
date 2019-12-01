
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

function checkWoundDescPyrexiaCorrect() {

    let woundDescPyrexiaCorrect = document.getElementById('wound-description-pyrexia-correct')
    let possiblySepsisRow = document.getElementById('possibly-sepsis-row')

    if(woundDescPyrexiaCorrect.checked == true) {
        possiblySepsisRow.classList.add("display-table-row")
    }
    else if (woundDescPyrexiaCorrect.checked == false) {
        possiblySepsisRow.classList.remove("display-table-row")
    }
}

function checkRedFlagFormAnswer() {

    let redFlagForm = document.getElementById('red-flag-form')
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