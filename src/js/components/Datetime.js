import store from "../data";
import datetime from "../data/datetime";

export default class Datetime {
  constructor(holder) {
    this.holder = holder;
    this.dateRef = null;
    this.timeRef = null;
    this.init();
    this.render();
    store.subscribe(this.render.bind(this));
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<div class="column datetime">
      <h1 class='title'><span class="title__date">Date: </span><span class="title__date__cal"><svg class="icon icon-calendar">
      <use xlink:href="#icon-calendar"></use>
    </svg></span> <span class="title__date__askedDate"></span></h1>
      <h1 class='title'><span class="title__time">Time: </span><span class="title__date__clock"><svg class="icon icon-clock">
      <use xlink:href=".#icon-clock"></use>
    </svg></span> <span class="title__date__askedTime"></span></h1></div>
      `
    );
    this.datetime = this.holder.querySelector(".datetime");
    this.dateRef = this.holder.querySelector(".title__date__askedDate");
    this.timeRef = this.holder.querySelector(".title__date__askedTime");
  }

  render() {
    if (store.getState().datetime.datetime) {
      const dateString = store.getState().datetime.datetime;
      const dayName = new Date(dateString).toLocaleDateString("en-US", {
        weekday: "short",
      });
      this.dateRef.innerText =
        dayName +
        ", " +
        store
          .getState()
          .datetime.datetime.slice(0, 10)
          .split("-")
          .reverse()
          .join("-");
      this.timeRef.innerText = store.getState().datetime.datetime.slice(-8);
      this.datetime.style.visibility = "visible";
    } else {
      this.datetime.style.visibility = "hidden";
    }
  }
}
