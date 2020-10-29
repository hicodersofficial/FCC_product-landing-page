document.addEventListener("scroll", (e) => {
    if (this.scrollY > 180) {
        document.querySelector("#nav-bar").style.background = "rgba(0,0,0,.8)";
        document
            .querySelectorAll("#nav-bar a")
            .forEach((a) => (a.style.color = "#fff"));
    } else {
        document.querySelector("#nav-bar").style.background = "unset";
        document
            .querySelectorAll("#nav-bar a")
            .forEach((a) => (a.style.color = "#000"));
    }
});
const THEME_MODE_KEY = "thememode";
let themeMode = localStorage.getItem(THEME_MODE_KEY);
if (themeMode && themeMode === "dark") {
    darkMode();
} else {
    lightMode();
}
mode.addEventListener("click", (e) => {
    themeMode = localStorage.getItem(THEME_MODE_KEY);
    if (themeMode && themeMode === "dark") {
        localStorage.setItem(THEME_MODE_KEY, "light");
        lightMode();
    } else {
        localStorage.setItem(THEME_MODE_KEY, "dark");
        darkMode();
    }
});
function darkMode() {
    document.body.style.filter = "invert(1)";
    document
        .querySelectorAll("iframe")
        .forEach((iframe) => (iframe.style.filter = "invert(1)"));
    document
        .querySelectorAll("img")
        .forEach((img) => (img.style.filter = "invert(1)"));
    document.querySelector("#mode").innerText = "Light Mode";
    document.querySelector("#header-img").style.filter = "unset";
}
function lightMode() {
    document.body.style.filter = "unset";
    document.querySelector("#header-img").filter = "unset";
    document
        .querySelectorAll("iframe")
        .forEach((iframe) => (iframe.style.filter = "unset"));
    document
        .querySelectorAll("img")
        .forEach((img) => (img.style.filter = "unset"));
    document.querySelector("#mode").innerText = "Dark Mode";
}
