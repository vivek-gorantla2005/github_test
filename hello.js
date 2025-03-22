class GreetUser {
    username1 = "";
    age=0;
    constructor(username,age) {
        this.username1 = username;
        this.age=age;
    }
    greet() {
        console.log(`Hello ${this.username1}`);
    }

    age(){
        console.log(`Age is ${this.age}`);
    }

}

g = new GreetUser('vivek')
g.greet()
g,age()