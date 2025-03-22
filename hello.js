class GreetUser {
    username1 = "";
    age=0;
    constructor(username,age) {
        this.username1 = username;
        this.age=age;
        this.email =this.email;
    }
    greet() {
        console.log(`Hello ${this.username1}`);
    }

    age(){
        console.log(`Age is ${this.age}`);
    }

    email(){
        console.log(`Email is ${this.email}`);
    }

}

g = new GreetUser('vivek');
g.greet();
g.age();
g.email();