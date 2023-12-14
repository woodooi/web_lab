const OPEN_CLASSNAME = "open";

function toggleMenu() {

    const navRefs = document.getElementById('nav_refs');
    if (navRefs.classList.contains(OPEN_CLASSNAME)) {
        navRefs.classList.remove(OPEN_CLASSNAME);
    } else {
        navRefs.classList.add(OPEN_CLASSNAME);
    }
}
