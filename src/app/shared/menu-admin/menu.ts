import { MenuItem } from "src/app/models/MenuItem";

const routeAdmin:string = '/admin-pages/'
export const MenuAdmin:MenuItem[] = [
    { 
        label:'Dashboard',
        route:`${routeAdmin}/dashboard`, 
        icon:'leaderboard',
        subMenus:null
    },
    { 
        label:'Produtos', 
        route:`${routeAdmin}/produtos`, 
        icon:'shopping_bag',  
        subMenus:null
    },
    {
        label:'Marcas', 
        route:`${routeAdmin}/marcas`, 
        icon:'verified', 
        subMenus:null
    }
    ,
    {
        label:'Categorias', 
        route:`${routeAdmin}/categorias`, 
        icon:'category', 
        subMenus:null
    }
];
