// function radioOptionsValue() {

//     if (document.getElementById('radio-option-one').checked == true) {
//         radioValue = document.getElementById('radio-option-one').value;
//     } else if (document.getElementById('radio-option-two').checked == true) {
//         radioValue = document.getElementById('radio-option-two').value;
//     } else if (document.getElementById('radio-option-three').checked == true) {
//         radioValue = document.getElementById('radio-option-three').value;
//     }
//     document.getElementById('radio-option').innerHTML = "" + radioValue;
// }


// function woundPhotoCheck() {
//     // wound photos
//     var woundPhotoOne = document.getElementById('wound-photo-one');

//     // answer message
//     var answerMessage = document.getElementById('wound-photo-answer');
//     var correctAnswer = "correct";
//     var incorrectAnswer = "";

//     if ((woundPhotoOne).checked == true) {
//         answerMessage.innerHTML == correctAnswer;
//         console.log(correctAnswer);
//     }


// }


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


    document.getElementById('wound-photo-answer').innerHTML = "" + photoValue;
}