const user = {
  username: "Shivanshu",
  price: "999",
  welcomeMessage: function () {
    console.log(`Welcome to our website!! Hey ${this.username}`);
    // console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Unnati";
// user.welcomeMessage()


console.log(this);
//this always print the current context value and functions