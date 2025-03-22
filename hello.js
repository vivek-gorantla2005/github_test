class GreetUser {
    username1 = "";
    constructor(username) {
        this.username1 = username;
    }
    greet() {
        console.log(`Hello ${this.username1}`);
    }
}

g = new GreetUser('vivek')
g.greet()