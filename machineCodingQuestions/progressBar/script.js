const btnAdd = document.getElementById('btn_add');
const progressbar = document.getElementById('progress__bar__style2');
let currentProgress = 20;
const btnRemove = document.getElementById('btn_reduce');
const btnRemovestyle2 = document.getElementById('btn_reduce__style2');
const btnAddtyle2 = document.getElementById('btn_add__style2')
const innerProgressbar = document.getElementById('progress__inner__bar');

btnAdd.addEventListener('click', (event) => {
    if (currentProgress + 10 <= 100) {
        currentProgress = currentProgress + 10;
        document.documentElement.style.setProperty('--progressBarWidth', `${currentProgress}%`);
        console.log(event);
    }

});

btnRemove.addEventListener('click', () => {
    if (currentProgress - 10 >= 0) {
        currentProgress = currentProgress - 10;
        document.documentElement.style.setProperty('--progressBarWidth', `${currentProgress}%`)
    }
})

btnAddtyle2.addEventListener('click', () => {
    console.log(progressbar.clientWidth);
    if (progressbar.clientWidth >= innerProgressbar.clientWidth + 100) {
        innerProgressbar.style.width = `${innerProgressbar.clientWidth + 100}px`
    }
})

btnRemovestyle2.addEventListener('click', () => {
    console.log(progressbar.clientWidth);
    if (innerProgressbar.clientWidth - 100 >= 0) {
        innerProgressbar.style.width = `${innerProgressbar.clientWidth - 100}px`
    }
})

//using interval
// setInterval(() => {
//     if (progress < 100) {
//         progress += 10;
//         updateProgressBar(progress);
//     }
// }, 1000);