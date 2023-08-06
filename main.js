window.addEventListener("scroll", function() {
    let logoImg = this.document.getElementById("main-logo");
    let scrollPosition = this.window.scrollY;

    if(scrollPosition > 200) {
        logoImg.src = './assets/1925.jpg';
        logoImg.style.width = "120px"
       
    }else {
        logoImg.src = './assets/Champneys_LogoV2.svg'; 
        logoImg.style.width = '220px'
        
    }
})



