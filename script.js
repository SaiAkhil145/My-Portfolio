const sidemenu = document.querySelector("#sideMenu");
const navBar=document.querySelector("nav");
const navlinks =document.querySelector("nav ul");
function openMenu(){
    sidemenu.style.transform='translateX(-16rem)';
}
function closeMenu(){
    sidemenu.style.transform='translateX(16rem)'
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navBar.classList.add('bg-white/30','bg-opacity-100','backdrop-blur-lg','shadow-sm','px-4','sm:px-8');
        navlinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','px-4','sm:px-8')
        navlinks.classList.add('bg-white/30','shadow-sm','bg-opacity-50');

    }
})

// light and darkmode
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark';
    }else{
        localStorage.theme='light';
    }
}