
let liste=document.getElementsByTagName("ul");
let items=document.getElementsByTagName("li");


function change_liste()
{


    for (let i=0; i<items.length; i++)
    {
        liste.setAttribute("type", "circle");
    items[i].innerText="blabla";

    }

}

