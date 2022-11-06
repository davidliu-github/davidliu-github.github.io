const container = document.querySelector('.resume');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');
const home = document.querySelector('.logo');
const krishi = document.getElementById('krishi');
const senti = document.getElementById('senti');
const battlecode = document.getElementById('battlecode');

header1.addEventListener('click',()=>{
    document.getElementById('section2').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

header2.addEventListener('click',()=>{
    document.getElementById('section3').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

header3.addEventListener('click',()=>{
    document.getElementById('section4').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

home.addEventListener('click',()=>{
    document.getElementById('section1').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})


container.addEventListener('click',()=>{
    window.open("https://drive.google.com/file/d/1DExl8IxSiO7YHcUIHgRfyTCgP-8bPzAD/view?usp=sharing","_blank");
})

krishi.addEventListener('click',()=>{
    window.open("https://devpost.com/software/ceres-r7v8cn","_blank");

});

senti.addEventListener('click',()=>{
    window.open("https://devpost.com/software/senti-pqio3z","_blank");

});

battlecode.addEventListener('click',()=>{
    window.open("https://battlecode.org/","_blank");

});