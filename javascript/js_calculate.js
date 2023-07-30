function Calculate(){
 // This function calculates an order       
    var tier = document.getElementById("tier").value;
    var layer = Number(document.getElementById("layer").value);
    var cakeTaste = document.getElementById("cakeTaste").value;
    var filling = document.getElementById("filling").value;
    var icing = document.getElementById("icing").value;
    var fig = document.getElementById("fig").value;
    var berry = document.getElementById("berry").value;

    if (tier=="1")
    { var factorTier = 1;}
    else if(tier=="2")
    { var factorTier = 1.8;}
    else if(tier=="3")
    {var factorTier = 2.5;}
    else{alert("The number of tiers should be between 1 and 3")}

    
    if (cakeTaste=="vanilla")
    { var priceCakeTaste = 6;}
    else if (cakeTaste=="redVelv")
    { var priceCakeTaste = 10;}
    else{var priceCakeTaste = 7;}

    if(filling=="jam")
    { var priceFilling = 4;}
    else{var priceFilling = 5;}

    if(icing=="none")
    { var priceIcing= 0;}
    else{var priceIcing= 10;}

    if (fig=="" || fig==null ||fig==0)
    {var priceFig = 0;}
    else{var priceFig = 10*Number(fig);}

    if(berry=="none")
    { var priceBerry= 0;}
    else{var priceBerry= 10;}

    var calc= factorTier*(layer*(priceFilling+priceCakeTaste)+priceIcing)+priceFig+priceBerry;
    if(calc !=0 && layer>=1)
    {
        document.getElementById("result").innerText ="An approximate price of the order: $" +calc;
    }
}

function CalculateMini(){
    // This function calculates an order for mini cakes 
    // It is differen to Calculate because the mini cake sets have prices
    var m = Number(document.getElementById("mousse").value);
    var p = Number(document.getElementById("pistachio").value);
    var b = Number(document.getElementById("blberry").value);
    var s = Number(document.getElementById("shrt").value);
   
    document.getElementById("resultMini").innerText ="The price of your order: $"+( m*40+p*60+b*70+s*40);
}