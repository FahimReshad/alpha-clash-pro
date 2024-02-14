function hideElementById (element){
    const hide= document.getElementById(element);
    hide.classList.add('hidden');
}

function showElementById (element){
    const show = document.getElementById(element);
    show.classList.remove('hidden');
}

function setBackgroundColor (element){
    const elements = document.getElementById(element);
    elements.classList.add('bg-orange-400');
}

function deleteBackground (element){
    const elements = document.getElementById(element);
    elements.classList.remove('bg-orange-400');
}

function getElementValueById (element){
    const elements = document.getElementById(element);
    const elementvalueText = elements.innerText;
    const value = parseInt(elementvalueText);
    return value;
}

function setTextElementById (element, value){
    const elements = document.getElementById(element);
    elements.innerText = value;
}

function getElementTextById (element){
    const elements = document.getElementById(element);
    const text = elements.innerText;
    return text;
}

function getARandomAlphabet (){
    // creat a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}