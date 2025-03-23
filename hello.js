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

    newBranch(){
        console.log(`New Branch is created`);
    }

    friendfet(){
        console.log(`Friend is added`);
    }

}

g = new GreetUser('vivek');
g.greet();
g.age();
g.email();
g.newBranch();
g.friendfet();