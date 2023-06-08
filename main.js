import "./style.scss";
import "./main.scss";
import { Aside } from "./Aside.js";
import { List } from "./List";

document.querySelector("#app").innerHTML = `
 <div class="main">
  ${Aside()}
  ${List()}
 </div>
`;
