import Logo from "./public/Logo.png";
export const Aside = () => {
  return `
    
     <div class="aside">
         <div class="logo">
            <img src=${Logo} lazey="true"/>
         </div>
         <div>
            <h2 class="aside-head">MENU</h2>
            <div class="aside-icon-group">
               <div>Icon</div>
               <div>Home</div>
            </div>
         </div>
         <div>GENRAL</div>
     </div>
    
    `;
};
