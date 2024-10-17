function validateform(){
    var Firstname = document.getElementById("fName").value;
    var Lastname = document.getElementById("lName").value;
    var Zipcode = document.getElementById("Zip").value;

    // new strong that concatenates first name + " " + last name

    var Fullname = Firstname + " " + Lastname;

    console.log("first name = " + Firstname);
    console.log("last name = " + Lastname);
    console.log("zip code = " + Zipcode);
    console.log("full name = " + Fullname);

    // full name is 20 characters or less
    if (Fullname.length > 20 || Fullname.length == 1){
        document.getElementById("Loginstatus").innerHTML = "please add a valid name that is less than 20 characters";
        //alert("please add a valid name that is less than 20 characters");
    }

    else if(Zipcode.length !=5){
      document.getElementById("Loginstatus").innerHTML = "please enter a five digit zip code."
        //alert("please enter a five digit zip code.")
    }
    else{
        document.getElementById("Loginstatus").innerHTML = "Hello," + Fullname
        //alert("Hello," + Fullname)
    }
    // preventing the page from submitting to another server/page
    return false;
}