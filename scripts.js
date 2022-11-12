const container = document.querySelector('.resume');
const header0 = document.getElementById('header0');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');
const home = document.querySelector('.logo');
const krishi = document.getElementById('krishi');
const senti = document.getElementById('senti');
const battlecode = document.getElementById('battlecode');

VANTA.BIRDS({
    el: "#section0",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x18183a,
    separation: 50.00,
    birdSize:1,
    quantity: 4
  })

  var options = {
    strings:['I am a developer.', 'I am a designer.','I am a student.'],
    loop:true,
    typeSpeed:50,
    backSpeed:20
  }

  var typed = new Typed('#typed',options);

  header0.addEventListener('click',()=>{
    document.getElementById('section1').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

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