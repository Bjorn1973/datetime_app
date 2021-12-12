import store from "../data";
import { getDateTime } from "../data/datetime";
import { toast } from "bulma-toast";

class Form {
  constructor(holder) {
    this.holder = holder;
    this.inputRef = null;
    this.buttonRef = null;
    this.formRef = null;
    this.init();
    this.setEvents();
    this.render();
    store.subscribe(this.render.bind(this));
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `<div class="column form"><form class="field">
          <label class="label">Enter a Unix Timestamp</label>   
          <div class="control"> 
          <input class="input" type="number" placeholder="E.g. 1639219667" min="0" max="253402300799">
          </div>
          <div class="control">
          <button class="button is-primary"><span class="button__text">Convert</span><span class="button__arrow"><svg class="icon icon-arrow-right2">
          <use xlink:href="../../../icons/symbol-defs.svg#icon-arrow-right2"></use>
        </svg></span></button>
          </div>
          </form></div>
          `
    );
    this.inputRef = this.holder.querySelector(".input");
    this.buttonRef = this.holder.querySelector(".button");
    this.formRef = this.holder.querySelector(".field");
  }
  showLoader() {
    this.buttonRef.classList.add("is-loading");
  }
  endLoading() {
    this.buttonRef.classList.remove("is-loading");
    this.inputRef.value = "";
  }
  render() {
    if (store.getState().datetime.loading) {
      this.showLoader();
    } else {
      this.endLoading();
    }
    if (store.getState().datetime.error) {
      toast({
        message: "You forgot your timestamp!",
        type: "is-warning",
        position: "top-center",
        dismissible: true,
        animate: { in: "fadeIn", out: "fadeOut" },
      });
    }
  }
  setEvents() {
    this.formRef.onsubmit = (e) => {
      e.preventDefault();
      store.dispatch(getDateTime(this.inputRef.value));
    };
    this.inputRef.onfocus = (e) => {
      e.preventDefault();
      toast({
        message: "input a number between 0 and 253402300799",
        type: "is-info",
        duration: 4000,
        position: "top-center",
        dismissible: true,
        animate: { in: "fadeIn", out: "fadeOut" },
      });
    };
  }
}

export default Form;
