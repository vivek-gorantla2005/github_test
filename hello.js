class GreetUser {
    username = "";
    constructor(username) {
        this.username = username;
    }
    greet() {
        console.log(`Hello ${this.username}`);
    }
}

g = new GreetUser('vivek')
g.greet()