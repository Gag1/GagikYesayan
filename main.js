

///////////////////////////////////////
let check = true
window.addEventListener('scroll', () =>{
    if(window.scrollY > 2200 && window.scrollY < 3500 && check){
        console.log('checked');
        foo()
        check = !check;
    }
 })


function foo(){
    let circle = document.querySelector('.progress')
    let i = 600;
    let intervalCircle = setInterval(() =>{
         i += -10;
           circle.style.strokeDashoffset = i;
        i <= 10 ? clearInterval(intervalCircle) : "error";
    },20)
    let circle2 = document.querySelector('#progress2')
    let j = 600;
    let intervalCircle2 = setInterval(() =>{
        j += -10;
           circle2.style.strokeDashoffset = i;
        j <= 100 ? clearInterval(intervalCircle2) : "error";
    },20)
    let circle3 = document.querySelector('#progress3')
    let k = 600;
    let intervalCircle3 = setInterval(() =>{
         k += -10;
           circle3.style.strokeDashoffset = k;
        i <= 160 ? clearInterval(intervalCircle3) : "error";
    },20)
    let circle4 = document.querySelector('#progress4')
    let d = 600;
    let intervalCircle4 = setInterval(() =>{
         d += -10;
         circle4.style.strokeDashoffset = d;
       d <=170 ? clearInterval(intervalCircle4) : "error";
    },20)
    let circle5 = document.querySelector('#progress5')
    let f = 600;
    let intervalCircle5 = setInterval(() =>{
         f += -10;
         circle5.style.strokeDashoffset = f;
        f <= 100 ? clearInterval(intervalCircle5) : "error";
    },20)
    let circle6 = document.querySelector('#progress6')
    let e = 600;
    let intervalCircle6 = setInterval(() =>{
         e += -10;
         circle6.style.strokeDashoffset = e;
        e <= 100 ? clearInterval(intervalCircle6) : "error";
    },20)
    let number = document.querySelectorAll('.number');
    let x = 0;
    number.textContent = `${x}%`;
    let progressInterval = setInterval(() =>{
      number[0].textContent = `${++x}%`;
        x >= 98 ? clearInterval(progressInterval) : "error";
    },12)
    let y = 0;
    number.textContent = `${y}%`;
    let progressInterval2 = setInterval(() =>{
        number[1].textContent = `${++y}%`;
        y >= 90 ? clearInterval(progressInterval2) : "error";
    },12)
    let z = 0;
    let progressInterval3 = setInterval(() =>{
         number[2].textContent = `${++z}%`;
        z >= 75 ? clearInterval(progressInterval3) : "error";
    },12)
    let h = 0;
    let progressInterval4 = setInterval(() =>{
      number[3].textContent = `${++h}%`;
        h >= 73 ? clearInterval(progressInterval4) : "error";
    },12)
    let s = 0;
    let progressInterval5 = setInterval(() =>{
      number[4].textContent = `${++s}%`;
        s >= 80 ? clearInterval(progressInterval5) : "error";
    },12)
    let g = 0;
    let progressInterval6 = setInterval(() =>{
      number[5].textContent = `${++g}%`;
        g >= 80 ? clearInterval(progressInterval6) : "error";
    },12)
   
}










const mobileBtn = document.querySelector('.mobile-btn');
const allSpans = document.querySelectorAll('.mobile-btn span');

let mobileBtnBool = true;
mobileBtn.addEventListener('click', () =>{
    const hidden = document.querySelector('.hidden');
    if(mobileBtnBool){
        hidden.classList.add('hidden-bar');
        hidden.innerHTML = `
            <nav>
                <ul>
                     <li> <a href="#1">Home</a> </li>
                     <li> <a href="#2">About</a></li>
                     <li> <a href="#3">Services</a></li>
                     <li> <a href="#4">Portfolio</a></li>
                     <li> <a href="#5">Contact</a></li>
                 </ul>
            </nav>
        `;

        document.body.style.overflowY = "hidden";
        allSpans[0].style.transition = "1s";
        allSpans[1].style.transition = "1s";
        allSpans[0].style.transform = 'rotate(30deg)';
        allSpans[1].style.transform = 'rotate(120deg)';
        mobileBtnBool = !mobileBtnBool;
       
        const lists = hidden.querySelectorAll('nav ul li')
        //const a = hidden.querySelector('nav ul li a')

        for (let i = 0; i < lists.length; i++) {
            lists[i].onclick = () =>{
                document.body.style.overflowY = "scroll";
                hidden.innerHTML = ``
                hidden.className = "hidden";

                allSpans[0].style.transform = 'rotate(0deg)';
                allSpans[1].style.transform = 'rotate(0deg)';
            }
            
        }



    }else if(!mobileBtnBool){
        hidden.innerHTML = ``
        hidden.className = "hidden";
        document.body.style.overflowY = "scroll";
        allSpans[0].style.transform = 'rotate(0deg)';
        allSpans[1].style.transform = 'rotate(0deg)';
        mobileBtnBool = !mobileBtnBool;
    }
  

})    


function openHirePage(){
    let url = "https://www.upwork.com/freelancers/~012b46be63d1d95985"
    window.open(url , '_blank');
}


function openInstaPage(){
    let url = "https://www.instagram.com/yesayan_77/"
    window.open(url , '_blank');
}

function openLinkedinPage(){
    let url = "https://www.linkedin.com/in/gagik-yesayan-a40951208/"
    window.open(url , '_blank');
}


function openGamePage(){
    let url = ' https://gag1.github.io/browserGame.github.io/'
    window.open(url, '_blank')
}


function openWebPage(){
    let url = 'https://gag1.github.io/portfolio2.github.io/'
    window.open(url, '_blank')
}
