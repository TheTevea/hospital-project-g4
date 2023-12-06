
    const btnOpen = document.querySelector('.humbergur');
    const btnClose = document.querySelector('.cross');
    const navMobile = document.querySelector('.navbar-mobile');
    const listItem = document.querySelectorAll('.unorderList li');

    // btnOpen.addEventListener("click",()=>{
    //     navMobile.classList.add("navbar-mobile");
    //     btnClose.style.display="block";
    //     for(let a = 0; a< listItem.length; a++){
    //         listItem[a].style.display="block";
    //     }
        
    // });

    // btnClose.addEventListener("click",()=>{
    //     navMobile.classList.remove("navbar-mobile");
    //     btnClose.style.display="none";
        // for(let a = 0; a< listItem.length; a++){
        //     listItem[a].style.display="none";
        // }
    // });
   
    btnOpen.addEventListener('click', ()=>{
    navMobile.style.display = "block";
    btnClose.style.display = "block";
    });

    btnClose.addEventListener('click', closeFunction);


    function closeFunction() {
        navMobile.style.display = "none";
        btnClose.style.display = "none";
    }
  


