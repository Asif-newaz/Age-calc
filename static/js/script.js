// Challenge 1: Your age in days


// This function is for calculating age
function ageInDays() {

    var birthYear = prompt('What year were you born... Good friend?');

    var ageInDaysCal = (2020 - birthYear) * 365;

    var h1 = document.createElement('h1');

    var textAnswer = document.createTextNode('You are' + ' ' + ageInDaysCal + ' ' + 'days old.');

    h1.setAttribute('id', 'ageInDays');

    h1.appendChild(textAnswer);


    document.getElementById('flex-box-result').appendChild(h1);

}

// This function is for reset data
function reset() {

    document.getElementById('ageInDays').remove();

}