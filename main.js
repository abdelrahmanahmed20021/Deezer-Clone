import "./rest.scss";
import "./main.scss";
import { Aside } from "./Aside.js";
import { List } from "./List";
import { PlayList } from "./PlayList";
import { Player } from "./Player";

document.querySelector("#app").innerHTML = `
 <div class="main">
  ${Aside()}
  <div class="controll-component">
    ${List()}
    <div class="controller">
        ${PlayList()}
        ${Player()}
    </div>
  </div>
 </div>
`;
