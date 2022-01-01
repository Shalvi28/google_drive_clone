function button() {
    var ListView_Ref = document.getElementById("ListView");
    var card_container_ref = document.getElementById("card-container");
    var card_container1_ref = document.getElementById("card-container1");
    
    if(ListView_Ref.innerText == "List View")
    {
        ListView_Ref.innerText = "Grid View";
    document.getElementById("card-container").style.display="table";
    document.getElementById("card-container1").style.display="table";

    }
    else {
        ListView_Ref.innerText ="List View";
        document.getElementById("card-container").style.display="flex";
        document.getElementById("card-container1").style.display="flex";
    }
}