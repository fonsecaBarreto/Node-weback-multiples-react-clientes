
import React, { useState } from 'react'
import { AiFillShop, AiFillDashboard, AiOutlineUnorderedList, AiFillPlusCircle} from 'react-icons/ai'
import { FaTruck } from 'react-icons/fa'
import { BiPackage} from 'react-icons/bi'
import { CgNotes } from 'react-icons/cg'
import { RiPriceTag2Fill } from 'react-icons/ri'

import DashBoard from './pages/DashBoard'
import ListProvider from './pages/Providers/List'
import CreateProvider from './pages/Providers/Create'

export const ADMIN_PAGES = {

    panel: {
        componenet: DashBoard,
        path: "/admin/panel",
    },
    
    provider_list: {
        componenet: ListProvider,
        path: "/admin/providers/list"
    },

    provider_create:{
        componenet: CreateProvider,
        path: "/admin/providers/create",
    },

    provider_update:{
        componenet: CreateProvider,
        path: "/admin/providers/update",
    }

}


export const PAGES_STRUCT = [
    {
        title: "Painel Administrativo",
        label: "Painel", icon: <AiFillDashboard></AiFillDashboard>,
        to: ADMIN_PAGES.panel.path
    },

    {
        title: " Fornecedores",
        label: "Fornecedores", icon: <FaTruck></FaTruck>,
        to: ADMIN_PAGES.provider_list.path,
        childs: [ 
            {
                title: "Listagem de Fornecedores",
                label: "Listagem", icon: <AiOutlineUnorderedList></AiOutlineUnorderedList>,
                to: ADMIN_PAGES.provider_list.path,
            },
            {
                title: "Adicionar Novo Fornecedor",
                label: "Adicionar", icon: <AiFillPlusCircle></AiFillPlusCircle>,
                to: ADMIN_PAGES.provider_create.path,
            },
            {
                title: "Atualizar Novo Fornecedor",
                label: "Atualizar", icon: <AiFillPlusCircle></AiFillPlusCircle>,
                hide: true
            },
        ]

    }
]

/* 
    label: "...", 
    icon: <AiFillDashboard></AiFillDashboard>,
    path: "..."
*/
