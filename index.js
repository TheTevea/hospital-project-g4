
    const btnOpen = document.querySelector('.humbergur');
    const btnClose = document.querySelector('.cross');
    const navMobile = document.querySelector('.navbar');
    const listItem = document.querySelectorAll('.unorderList li');

    btnOpen.addEventListener("click",()=>{
        navMobile.classList.add("navbar-mobile");
        btnClose.style.display="block";
        for(let a = 0; a< listItem.length; a++){
            listItem[a].style.display="block";
        }
        
    });

    btnClose.addEventListener("click",()=>{
        navMobile.classList.remove("navbar-mobile");
        btnClose.style.display="none";
        // for(let a = 0; a< listItem.length; a++){
        //     listItem[a].style.display="none";
        // }
    });
   
    // btnOpen.addEventListener('click', openFunction);
    // btnClose.addEventListener('click', closeFunction);

    // function openFunction() {
    //     navMobile.classList.add('navbar-mobile');
    //     console.log('clicked')
    // }

    // function closeFunction() {
    //     navMobile.classList.remove('navbar-mobile');
    //     // btnClose.classList.remove('cross');
    //     console.log('clicked')
    // }
  


