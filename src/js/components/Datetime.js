import store from "../data";

export default class Datetime {
  constructor(holder) {
    this.holder = holder;
    this.dateRef = null;
    this.timeRef = null;
    this.init();
    this.render();
    store.subscribe(this.render.bind(this));
    // this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <h1 class='title'>Date: </span> <span class="datetime__date"></span></h1>
      <h1 class='title'>Time: <span class="datetime__time"></span></h1>
      `
    );
    this.dateRef = this.holder.querySelector(".datetime__date");
    this.timeRef = this.holder.querySelector(".datetime__time");
  }
  render() {
    this.dateRef.innerText = store
      .getState()
      .datetime.datetime.slice(0, 10)
      .split("-")
      .reverse()
      .join("-");
    this.timeRef.innerText = store.getState().datetime.datetime.slice(-8);
  }
  //   setEvents() {}
}
