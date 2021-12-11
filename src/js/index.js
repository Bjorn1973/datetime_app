import "../css/style.scss";
import "bulma/css/bulma.css";
import "../icons/svgxuse";
import form from "./components/Form";
import datetime from "./components/Datetime";
import intro from "./components/Intro";

const holder = document.querySelector(".container");

new intro(holder);
new form(holder);
new datetime(holder);
