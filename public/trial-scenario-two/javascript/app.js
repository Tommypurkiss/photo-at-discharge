




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
