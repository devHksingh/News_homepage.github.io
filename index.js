const nav = document.querySelector('.primary-navigation') 
const navToggle = document.querySelector('.mobile-menu-toggle')



// when someone clicks the hamburger button

navToggle.addEventListener('click',()=>{

    // if the menu is closed, open it

    const visiblity = nav.getAttribute("data-visible")
    if (visiblity === "false"){
        nav.setAttribute("data-visible",true)
        navToggle.setAttribute("aria-expanded",true)
        document.querySelector('body').style.background="burlywood"
        
    }else{
        nav.setAttribute("data-visible",false)
        navToggle.setAttribute("aria-expanded",false)
        document.querySelector('body').style.background="none"
    }

    // console.log(visiblity)
    console.log(navToggle.getAttribute('aria-expanded'))

    // if the menu is open, close it


})

