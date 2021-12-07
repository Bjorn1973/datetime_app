import store from "../data";
import bulmaCalendar from "bulma-calendar";

export default class Datetime {
  constructor(holder) {
    this.holder = holder;
    this.dateRef = null;
    this.timeRef = null;
    this.dateInput = null;
    this.init();
    this.render();
    store.subscribe(this.render.bind(this));
    // this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
      <section class='datetime columns'>
      <div class='datetime__date column'>date</div>
      <div class='datetime__time column'>time</div>
      </section>`
    );
    this.dateRef = this.holder.querySelector(".datetime__date");
    this.timeRef = this.holder.querySelector(".datetime__time");
  }
  render() {
    this.dateRef.innerHTML = `<input class="dateInput" type="date" >`;
    this.dateInput = document.querySelector(".dateInput");
    this.dateInput.value = store.getState().datetime.datetime.slice(0, 10);
    this.timeRef.innerHTML = `<input class="timeInput" type="time">`;
    this.timeInput = document.querySelector(".timeInput");
    this.timeInput.value = store.getState().datetime.datetime.slice(-8);
  }
  //   setEvents() {}
}
