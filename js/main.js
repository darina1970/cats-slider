console.log('Я учу JavaScript!')
const listImages = [
    {
        src: './img/01.jpg',
        nameImg: 'Кот 1',
    },
    {
        src: './img/02.jpg',
        nameImg: 'Кот 2',
    },
    {
        src: './img/03.jpg',
        nameImg: 'Кот 3',
    },
    {
        src: './img/04.jpg',
        nameImg: 'Кот 4',
    },
    {
        src: './img/05.jpg',
        nameImg: 'Кот 5',
    },
    {
        src: './img/06.jpg',
        nameImg: 'Кот 6',
    },
    {
        src: './img/07.jpg',
        nameImg: 'Кот 7',
    },
    {
        src: './img/08.jpg',
        nameImg: 'Кот 8',
    },
];

console.log(listImages);

const img = document.querySelector('img');

const setImg = currentDataImg => {
    img.src = currentDataImg.src;
    img.alt = currentDataImg.nameImg;
}

setImg(listImages[0]);


// Создаем переменную для счётчика вперёд
let countNext = 0;

function btnNext() {
    if (countNext === listImages.length - 1) {
        countNext = 0;
    } else {
    countNext += 1;
    }
    setImg(listImages[countNext]);
}

// Создаём переменную для счётчика назад
let countBack = 7;

function btnPrev() {
    if (countBack === 0) {
        countBack = 7;
    } else {
        countBack -= 1;
    }
    
    setImg(listImages[countBack]);
}




