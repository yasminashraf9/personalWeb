
let heading = document.querySelector("h1")
let headingText = "Hey, /I'm Yasmin /UI developer/"

for(let index in headingText){
    let letter = headingText[index]
    let span = document.createElement('span')
    span.textContent = letter
    if(letter == "/" ){
        span.innerHTML= `<br>`
    }else if(letter === "Y"){
        span.classList.add("special")
    }
    heading.appendChild(span)
    span.classList.add('openning')
    span.style.animationDelay = `${index/6}s`
}

let title = document.createElement('span')
title.textContent=`<p> front-end developer(Angular|vueJs) </p>`
title.classList.add('#title')
heading.appendChild(title)

let spans = document.querySelectorAll('span')
 

setTimeout(()=>{
    for(let span of spans){
        span.classList.remove('openning')
        span.addEventListener("mouseover",(el)=>{
            if(!el.target.classList.contains('special')){
                el.target.classList.remove('openning')
                el.target.classList.add('corn')
                setTimeout(()=>{
                    el.target.classList.remove('corn')
                },500)
            }
        })
    }
},5000)

let showSection = document.querySelector('section')

document.querySelector('#projects').addEventListener('click',()=>{
    imgVanish()
    contactsVanish()
    skillsVanish()
    setTimeout(()=>{
    showSection.innerHTML=`
    <div class="project">
        <h5>YouTube clone</h5>
        <p>A responsive clone, using only Html5, Css3 and Js </p>
        <a href="https://superb-cheesecake-e32d62.netlify.app">Live show</a>
    </div>
    <div class="project">
        <h5>TodoList (Angular)</h5>
        <p>Applying CRUD methods with a json file as a local server </p>
        <a href="https://github.com/yasminashraf9/todoList.git">GitHub repo</a>
    </div>
    <div class="project ">
        <h5>Muli-section LandingPage</h5>
        <p> by using Animate Css, jQuery Plugin and basic markup </p>
        <a href="https://loquacious-shortbread-7942d6.netlify.app">Live show</a>
    </div>
    `
    },1100)
})

document.querySelector('#contacts').addEventListener('click',()=>{
    imgVanish()
    projectsVanish()
    skillsVanish()
    setTimeout(()=>{
        showSection.innerHTML=`
        <div class="contacts">
            <div >
            <i class="fa-solid fa-phone"></i> <a href="">01096045934</a>
            </div>
            <div >
                <i class="fa-solid fa-g"></i> 
                <a href="yasmin.ashraf.77985@gmail.com">yasmin.ashraf.77985@gmail.com</a>
            </div>
            <div >
                <i class="fa-brands fa-linkedin"></i> 
                <a href="linkedin.com/in/yasmin-ashraf-22a08b1b7">linkedin.com/in/yasmin-ashraf-22a08b1b7</a>
            </div>
            <div >
                <i class="fa-brands fa-github"></i> 
                <a href="https://github.com/yasminashraf9">https://github.com/yasminashraf9</a>
            </div>
        </div>
        `
    },1100)
})

document.querySelector('#skills').addEventListener('click',()=>{
    imgVanish()
    projectsVanish()
    contactsVanish()
    setTimeout(()=>{
        showSection.innerHTML=`
        <div id="orbit">
            <div class="skill tech" > TechnicalSkills </div>
            <div class="skill">Html5</div>
            <div class="skill">Git</div>
            <div class="skill">Oop</div>
            <div class="skill">Bootstrap</div>
            <div class="skill">JavaScript</div>
            <div class="skill">Css3</div>
            <div class="skill">ES6</div>
            <div class="skill">Angular</div>
            <div class="skill">Sass</div>
            <div class="skill">Scss</div>
            <div class="skill">Jquery</div>
            <div class="skill">GitHub</div>

        </div>
        `
    },1100)
})


function imgVanish(){
    let img =showSection.querySelector('img')
    if(img){ 
        img.classList.add('vanish')
    }
}
function projectsVanish(){
    let projects = showSection.querySelectorAll('.project')
    if(projects){
        let delay = 0
        for(let project of projects){
            setTimeout(()=>{project.classList.add('vanish')},(delay++)*200)
        }
    }
}
function contactsVanish(){
    let contacts =document.querySelector('.contacts')
    if(contacts){
        let delay = 0
        for(let contact of contacts.children){
            console.log(contact)
            setTimeout(()=>{contact.classList.add('vanish')},(delay++)*200)
        }
    }
}
function skillsVanish(){
    let skills = document.querySelectorAll('.skill')
    if(skills){
        let delay = 0
        for(let skill of skills){
            skill.classList.contains('tech')? "" : setTimeout(()=>{skill.classList.add('hide')},(delay++)*300)
            
        }
    }
}