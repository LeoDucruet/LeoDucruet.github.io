function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var title = document.querySelectorAll("h1, h2, h3, hr");
    title.forEach((element) => {
        element.classList.toggle("dark-mode-title");
    });
    var table = document.querySelector("table");
    if (table != null) {
    table.classList.toggle("dark-mode-table");
    }
    var header = document.querySelectorAll("header");
    header.forEach((element) => {
        element.classList.toggle("dark-mode-table");
    });
    var footer = document.querySelector("footer");
    footer.classList.toggle("dark-mode-table");
    var thTd = document.querySelectorAll("th, td");
    thTd.forEach((element) => {
        element.classList.toggle("dark-mode-th-td");
    });
    var article = document.querySelectorAll("article");
    article.forEach((element) => {
        element.classList.toggle("project-dark");
    });
}