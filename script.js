function generate(){
    let complexity = document.getElementById("display").value;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastNums").innerHTML += password;

}

document.getElementById("length").innerHTML = "Length: 25";

function copyPassword(){

    document.getElementById("display").querySelector();

    document.execCommand("copy");

    alert("password copied!");
}