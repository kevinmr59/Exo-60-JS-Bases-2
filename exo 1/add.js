
let liste = document.getElementsByTagName("ul");
let items = document.getElementsByTagName("li");
let a = 0;

while (a < 7) {
    console.log("A vaut actuellement " + a);
    a++;
    items[a].style.listStyleType = "circle";
    items[a].innerHTML = "blablabla";
}