function menu(container, button) {
    let main = document.getElementsByClassName('main');
    for (let elem of main)
        elem.style.display = 'none';
    let el = document.getElementById(container);
    el.style.display = 'block';
    const buttons = document.querySelectorAll('.nav-container button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
button1.addEventListener('click', () => {menu('content1', button1)});
button2.addEventListener('click', () => {menu('content2', button2)});
button3.addEventListener('click', () => {menu('content3', button3)});
button4.addEventListener('click', () => {menu('content4', button4)});
menu('content1', button1);