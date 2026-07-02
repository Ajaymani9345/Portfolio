/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/* ==========================
   NAVBAR SHADOW
========================== */

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 15px rgba(0,0,0,0.2)";

    }

    else{

        header.style.boxShadow="none";

    }

});

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topButton";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="12px 18px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#0d6efd";
topButton.style.color="#fff";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="18px";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>250){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const inputs=form.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.border="2px solid red";

}

else{

input.style.border="1px solid #ccc";

}

});

if(valid){

alert("Thank you! Your message has been sent.");

form.reset();

}

});

}

/* ==========================
   FADE-IN ANIMATION
========================== */

const cards=document.querySelectorAll(

".project-card,.skill-card,.certificate-card,.education-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="all .7s ease";

observer.observe(card);

});

/* ==========================
   TYPING EFFECT
========================== */

const text="Full Stack Developer";

let i=0;

function typing(){

const heading=document.querySelector(".hero-text h2");

if(heading){

heading.innerHTML=text.substring(0,i);

i++;

if(i<=text.length){

setTimeout(typing,120);

}

}

}

typing();

/* ==========================
   CURRENT YEAR
========================== */

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Akil | All Rights Reserved`;

}

console.log("Portfolio Loaded Successfully");