let menu_el = document.getElementById("menu")
let menu_close_el = document.getElementById("menu-close")
let nav = document.getElementById("links");
function openFunction() {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      console.log("otondo")
    }
    if (menu_el.style.display === "none"){
        menu_el.style.display = "block"
    }
    else{
        menu_el.style.display="none"
        menu_close_el.style.display = "block"
    }
}
function closeFunction(){
    if (nav.style.display === "block") {
        nav.style.display = "none";
      } else {
        nav.style.display = "none";
      }
      if (menu_el.style.display === "block"){
          menu_el.style.display = "none"
      }else{
        menu_el.style.display="block"
        menu_close_el.style.display = "none"
    }
}