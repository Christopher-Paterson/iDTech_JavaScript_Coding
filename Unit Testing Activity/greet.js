function greet(name) {

    if (name == null) {
        return "Hello, there!";
    }  
    else if (typeof(name) === "object"){
        if (name.length == 2) {
            return "Hello, " + name[0] + ", " + name[1] + "!"
        }
        else {
            let greeting = "Hello, ";
            name.forEach(n => {
                greeting = greeting + n + ", ";
            });
            return greeting.slice(0, greeting.length - 2);
        }
    }
    else if(name.toUpperCase() == name){
        return "HELLO, " + name + "!";
    }   
    else{
        return "Hello, " + name + "!";
    }
}

console.log(typeof(["hello","world"]))