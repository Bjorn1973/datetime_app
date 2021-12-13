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
      `<div class="column datetime">
      <h1 class='title'><span class="title__date">Date: </span><span class="title__date__cal"><svg class="icon icon-calendar">
      <use xlink:href="../../../icons/symbol-defs.svg#icon-calendar"></use>
    </svg></span> <span class="title__date__askedDate"></span></h1>
      <h1 class='title'><span class="title__time">Time: </span><span class="title__date__clock"><svg class="icon icon-clock">
      <use xlink:href="../../../icons/symbol-defs.svg#icon-clock"></use>
    </svg></span> <span class="title__date__askedTime"></span></h1></div>
      `
    );
    this.dateRef = this.holder.querySelector(".title__date__askedDate");
    this.timeRef = this.holder.querySelector(".title__date__askedTime");
  }
  render() {
    this.dateRef.innerText = store
      .getState()
      .datetime.datetime.slice(0, 10)
      .split("-")
      .reverse()
      .join("-");
    this.timeRef.innerText = store.getState().datetime.datetime.slice(-8);
    if (store.getState().datetime.error) {
      this.dateRef.innerText = "";
      this.timeRef.innerText = "";
    }
  }
  //   setEvents() {}
}
