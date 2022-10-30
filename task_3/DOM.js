//NOMOR 1
let changeText = document.getElementById('caption');
changeText.innerText = 'Informatics Engineering Student (Soal 1)';

//NOMOR 2 
let newElement = document.createElement('p');
newElement.innerHTML = 'ini adalah text baru yang dibuat (Soal 2)';
console.log(newElement);
let newClass = document.querySelector('#text');
newClass.append(newElement);

//NOMOR 3
const colour = ["#FFE1E1", "#90A17D", "#829460", "#3F3B6C", "#624F82", "#9F73AB" ];
let i = 0;
document.querySelector('#btn').addEventListener('click', 
function(event){
    i++;
    if (i >= colour.length) {
        i = 0;
    }
    document.querySelector("body").style.background = colour[i];
});