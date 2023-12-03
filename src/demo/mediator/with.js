class ChatRoom {
  logMessage(user, message) {
    console.log(`${user.getName} : ${message}`);
    console.log("*".repeat(15));
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }
  get getName() {
    return this.name;
  }
  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatRoom = new ChatRoom();

const sami = new User("Sami", chatRoom);
const rami = new User("Rami", chatRoom);

sami.send("Hello there");
rami.send("Welcome bro");
