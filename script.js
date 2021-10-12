if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const nav = document.getElementById("navbar");
    nav.classList.remove("navbar-light");
    nav.classList.add("navbar-dark");
}