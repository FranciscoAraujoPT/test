let headerNavbarOptions=document.querySelectorAll("header .navbar li");headerNavbarOptions.forEach(e=>{var a=e.querySelector("a");let r=e.querySelector("img");a.addEventListener("mouseover",e=>{r.classList.add("show")}),a.addEventListener("mouseleave",e=>{r.classList.remove("show")})});