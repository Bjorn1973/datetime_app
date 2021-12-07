import "../css/style.scss";
import "bulma/css/bulma.css";
import { bulmaCalendar } from "../../node_modules/bulma-calendar/dist/js/bulma-calendar.js";
import "../icons/svgxuse";
import store from "./data";
import { getDateTime } from "./data/datetime";
import form from "./components/Form";
import datetime from "./components/Datetime";

const holder = document.querySelector(".container");

new form(holder);
new datetime(holder);
