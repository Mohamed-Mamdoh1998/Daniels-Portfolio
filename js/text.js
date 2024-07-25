var lastScrollTop = 0;
    navbar = document.getElementById("nav");
window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        nav.style.top = "-80px";
    } else {
        nav.style.top="0";
    }
    lastScrollTop = scrollTop
})