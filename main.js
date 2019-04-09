'use strict';

const face = document.querySelector('.face');

const wink = () => {
    face.innerHTML = ';)';
}

const smile = () => {
    face.innerHTML = ':)';
}

face.addEventListener('click', wink);
face.addEventListener('mouseout', smile);