
import React, { useState } from 'react'
import { AiFillShop, AiFillDashboard, AiOutlineUnorderedList, AiFillPlusCircle} from 'react-icons/ai'
import { FaTruck } from 'react-icons/fa'
import { BiPackage} from 'react-icons/bi'
import { CgNotes, CgProfile } from 'react-icons/cg'
import { RiPriceTag2Fill } from 'react-icons/ri'

import DashBoardPage from './pages/DashBoard'
import ProfilePage from './pages/Profile'
import ProviderProductsPage from './pages/ProviderProducts'

export const PROVIDERS_PAGES = {

    panel: {
        componenet: DashBoardPage,
        path: "/provider/panel",
    },
    
    profile: {
        componenet: ProfilePage,
        path: "/provider/profile"
    },

    products_list:{
        componenet: ProviderProductsPage,
        path: "/provider/products/list",
    },


}


export const PAGES_STRUCT = [
    {
        title: "Painel do Fornecedor",
        label: "Painel", icon: <AiFillDashboard></AiFillDashboard>,
        to: PROVIDERS_PAGES.panel.path
    },

    {
        title: "Perfil",
        label: "Perfil", icon: <CgProfile></CgProfile>,
        to: PROVIDERS_PAGES.panel.path
    },

    {
        title: "Produtos",
        label: "Produtos", icon: <BiPackage></BiPackage>,
        to: PROVIDERS_PAGES.products_list.path,
        childs: [ 
            {
                title: "Listagem de Produtos",
                label: "Listagem", icon: <AiOutlineUnorderedList></AiOutlineUnorderedList>,
                to: PROVIDERS_PAGES.products_list.path,
            },
     
        ]

    }
]

/* 
    label: "...", 
    icon: <AiFillDashboard></AiFillDashboard>,
    path: "..."
*/
