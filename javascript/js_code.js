window.onload = function () {
    var x = new XMLHttpRequest();
    var m = document.getElementById("menu");  //menu for big screens
    x.open("GET", "menu.html", false);
    x.send();
    m.innerHTML = x.responseText;
    var ddm=document.getElementById("DDmenu");  // dropdown menu for small screens
    x.open("GET", "menuDD.html", false);
    x.send();
    ddm.innerHTML = x.responseText;

    // getting the buttons and its dropdown div
    var cakesBtn = document.querySelector("#menu li button");
    var cakesDropdown = document.querySelector("#menu li div");

    var cakesBtn2 = document.querySelector("#DDmenu li button");
    var cakesDropdown2 = document.querySelector("#DDmenu li div");
    
    var DDmenuBtn = document.querySelector("#DDmenu button"); 
    var DDmenuDropdown= document.querySelector("#DDmenu div");

    // adding a click event listener to the  buttons
    cakesBtn.addEventListener("click", function () {
        cakesDropdown.classList.toggle("show");
    });
    cakesBtn2.addEventListener("click", function () {
        cakesDropdown2.classList.toggle("show2");
    });
    DDmenuBtn.addEventListener("click", function () {
        DDmenuDropdown.classList.toggle("show3");
    });

    //code for footer  
        var f = document.getElementById("footer");
        x.open("GET", "footer.html", false);
        x.send();
        f.innerHTML = x.responseText;

    //code for form Ask us     
        var f = document.getElementById("form_askUs");
        x.open("GET", "form_askUs.html", false);
        x.send();
        f.innerHTML = x.responseText;   
    

    // code to hide and show divs in the Contact page
    var chooseForm =document.getElementById("chooseForm");
    chooseForm.addEventListener("change", function() {
        if(chooseForm.value=="AskUs")
        {Choice1.classList.add("show4");
        Choice2.classList.remove("show4");}
        if(chooseForm.value=="MakeOrder")
        {Choice2.classList.add("show4");
        Choice1.classList.remove("show4");}
    })
    
    // code to hide and show divs for  Mini Cakes and Other Cakes in the Contact page
    var category =document.getElementById("category");
    category.addEventListener("change", function() {
        
        if(category.value==="Mini")
        {miniCakes.classList.add("show5");
        otherCakes.classList.add("hide");}
        else
        {miniCakes.classList.remove("show5");
        otherCakes.classList.remove("hide");}
    })
}
