import Logo from "./src/Logo.png";

export const Aside = () => {
  return `
    
     <div class="aside">
         <div class="logo">
            <img src=${Logo} lazey="true"/>
         </div>
         <div>
           <div class="aside-list">
           <h2 class="aside-head">MENU</h2>
            <div class="aside-icon-group">
                <span class="active-aside-link material-symbols-rounded">home</span>
                <div class="aside-link active-aside-link">Home</div>
            </div>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">search</span>
                <div>Search</div>
            </div>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">favorite</span>                
                <div>Favorite</div>
            </div>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">queue_music</span>
                <div>List</div>
            </div>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">library_music</span>
                <div>Albums</div>
            </div>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">person</span>                
                <div>Following</div>
            </div>
           </div>
         </div>
         <div class="aside-list">
            <h2 class="aside-head">GENRAL</h2>
            <div class="aside-icon-group">
                <span class="material-symbols-rounded">settings</span>
                <div class="aside-link">Settings</div>
            </div>
            <div class="aside-icon-group">
               <span class="material-symbols-rounded">subscriptions</span>                
               <div class="aside-link">Subscriptions</div>
            </div>
            <div class="aside-icon-group">
            <span class="material-symbols-rounded">logout</span>
            <div class="aside-link">Subscriptions</div>
            </div>
         </div>
     </div>
    
    `;
};
