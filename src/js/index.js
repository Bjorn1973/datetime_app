import "../css/style.scss";
import "bulma/css/bulma.css";
import "../includes/svgxuse";
import form from "./components/Form";
import datetime from "./components/Datetime";
import intro from "./components/Intro";
import githubcorner from "./components/Githubcorner";

const holderGit = document.querySelector("body");
const holder = document.querySelector(".container");
const formHolder = document.querySelector(".columns");
const dateHolder = document.querySelector(".columns");

new intro(holder);
new form(formHolder);
new datetime(dateHolder);
new githubcorner(holderGit);
