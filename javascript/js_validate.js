//Validation for the form Ask us
function validateAskUs() {
    var uname = document.getElementById("uname").value;
    var mail = document.getElementById("mail").value;
    var msg = "";
    if (uname == "") {
        msg = "The name field cannot be empty";
        document.getElementById("Msg").innerHTML = msg;
        return false;
    }
    if (mail == "") {
        msg = "Please enter your e-mail";
        document.getElementById("Msg").innerHTML = msg;
        return false;
    }
    alert("Your question is sent");
    return true;
}
// Validation for the form Order
function validateOrder() {
    var clickedButton = document.activeElement;
    if (clickedButton.name === "submitOther") {
        /*In my form I use actually 2 forms one of which is hidden. 
        It means I need to use 2 submit buttons to be able to validate
        2 different form differently. That is why I use this if condition.*/
        let day = document.getElementById("day").value;
        let usrName = document.getElementById("usrName").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let tier = Number(document.getElementById("tier").value);
        let layer = Number(document.getElementById("layer").value);
        if (tier < 1 || tier > 3) {
            alert("The number of tiers should be between 1 and 3");
            return false;
        }
        if (layer < 1) {
            alert("Please add number of cake layers");
            return false;
        }
        if (day == "") {
            alert("Please add the date for your order");
            return false;
        }        
        if (usrName == "") {
            alert("Please add your name");
            return false;
        }
        if (email == "") {
            alert("Please add your e-mail");
            return false;
        }
        if (phone == "") {
            alert("Please add your phone");
            return false;
        }
        else if (phone.match(/^[0-9]+$/)==null) {
            alert("Phone number can contain only digits");
            return false;
        }
        
        alert("Your order is sent");
        return true;
    }
    else {
        var s1 = Number(document.getElementById("mousse").value);
        var s2 = Number(document.getElementById("pistachio").value);
        var s3 = Number(document.getElementById("blberry").value);
        var s4 = Number(document.getElementById("shrt").value);

        let day = document.getElementById("dayM").value;
        let usrName = document.getElementById("usrNameM").value;
        let email = document.getElementById("emailM").value;
        let phone = document.getElementById("phoneM").value;
        

        if (s1 == "" && s2 == "" && s3 == "" && s4 == "") {
            alert("Enter number at least for one set");
            return false;
        }
       
        else if (day == "") {
            alert("Please add the date for your order");
            return false;
        }
        else if (usrName == "") {
            alert("Please add your name");
            return false;
        }
        else if (email == "") {
            alert("Please add your e-mail");
            return false;
        }
        else if (phone == "") {
            alert("Please add your phone");
            return false;
        }
        else if (phone.match(/^[0-9]+$/)==null) {
            alert("Phone number can contain only digits");
            return false;
        }
       
        alert("Your order is sent");
        return true;

    }
}