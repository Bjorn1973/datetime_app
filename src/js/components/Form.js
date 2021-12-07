import store from "../data";
import { getDateTime } from "../data/datetime";

class Form {
  constructor(holder) {
    this.holder = holder;
    this.inputRef = null;
    this.buttonRef = null;
    this.formRef = null;
    this.init();
    this.render();
    store.subscribe(this.render.bind(this));
    this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<form class="field">
      <label class="label">Number</label>
      <div class="control">
        <input class="input" type="number" placeholder="Number input">
      </div>
      <p class="help">Enter a number between 0 and 1638701721</p>
      <div class="control">
          <button class="button is-primary">Convert</button>
      </div>
    </form>
    `
    );
    this.inputRef = this.holder.querySelector(".input");
    this.buttonRef = this.holder.querySelector(".button");
    this.formRef = this.holder.querySelector(".field");
  }
  showLoader() {
    this.inputRef.classList.add("is-loading");
  }
  endLoading() {
    this.inputRef.classList.remove("is-loading");
    this.inputRef.value = "";
  }
  render() {
    if (store.getState().datetime.loading) {
      this.showLoader();
    } else {
      this.endLoading();
    }
  }
  setEvents() {
    this.formRef.onsubmit = (e) => {
      e.preventDefault();
      store.dispatch(getDateTime(this.inputRef.value));
    };
  }
}

export default Form;
