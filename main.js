'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');

const wink = () => {
    face.innerHTML = ';)';
}

const smile = () => {
    face.innerHTML = ':)';
}

head.addEventListener('click', wink);
head.addEventListener('mouseout', smile);