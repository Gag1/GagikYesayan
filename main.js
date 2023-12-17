

///////////////////////////////////////
const skills = document.querySelector("#main-c-skills");
const skillsY = skills.getClientRects()[0].y;
let check = true;
window.addEventListener('scroll', () =>{
    if(check && window.scrollY > skillsY - 100){
    
        foo();
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
        j <= 50 ? clearInterval(intervalCircle2) : "error";
    },20)
    let circle3 = document.querySelector('#progress3')
    let k = 600;
    let intervalCircle3 = setInterval(() =>{
         k += -10;
           circle3.style.strokeDashoffset = k;
        i <= 20 ? clearInterval(intervalCircle3) : "error";
    },20)
    let circle4 = document.querySelector('#progress4')
    let d = 600;
    let intervalCircle4 = setInterval(() =>{
         d += -10;
         circle4.style.strokeDashoffset = d;
       d <=19 ? clearInterval(intervalCircle4) : "error";
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
        e <= 60 ? clearInterval(intervalCircle6) : "error";
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
        y >= 93 ? clearInterval(progressInterval2) : "error";
    },12)
    let z = 0;
    let progressInterval3 = setInterval(() =>{
         number[2].textContent = `${++z}%`;
        z >= 95 ? clearInterval(progressInterval3) : "error";
    },12)
    let h = 0;
    let progressInterval4 = setInterval(() =>{
      number[3].textContent = `${++h}%`;
        h >= 96 ? clearInterval(progressInterval4) : "error";
    },12)
    let s = 0;
    let progressInterval5 = setInterval(() =>{
      number[4].textContent = `${++s}%`;
        s >= 85 ? clearInterval(progressInterval5) : "error";
    },12)
    let g = 0;
    let progressInterval6 = setInterval(() =>{
      number[5].textContent = `${++g}%`;
        g >= 90 ? clearInterval(progressInterval6) : "error";
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
    let url = 'https://upwork.com'
    window.open(url , '_blank');
}

function openLinkedinPage(){
    let url = 'https://upwork.com'
    window.open(url , '_blank');
}


function openGamePage(){
    let url = 'https://upwork.com'
    window.open(url, '_blank')
}


function openWebPage(){
    let url = 'https://gag1.github.io/Portfolio.github.io/'
    window.open(url, '_blank')
}

function animationScroll(){
    const specificPoint = document.querySelector(".main-c h3 ");
    const specificPointY = specificPoint.getClientRects()[0].y;
    const section3 = document.querySelector(".section-3")

    let bool = true;
    window.addEventListener("scroll",(e) =>{
        if(bool && window.scrollY > specificPointY - 500 ){
            section3.style.transition = "1s"
            section3.style.background = "black";
            specificPoint.style.color = "white";
            bool = !bool;
        }
    })

}

animationScroll()