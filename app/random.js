import $ from 'github:components/jquery';

var MyThing = class MyClass {
  constructor() {
    $(document.body).css('background-color', 'grey');
    this.writeMessage('yo yo oyz');
  }
  writeMessage(msg) {
    $(document.body).html(msg);
  }
}

export default MyThing;
