import React, { useEffect, useState } from 'react'



const INITIAL_CURRENT_PAGE = {
    title: "",
    breadCrumbs: [  ],
}

const RouterState = ( struct, root = "/" ) =>{
    
    const [ pathname, setPathname ] = useState('')
    const [ currentPage, setcurrentPage] = useState({ ...INITIAL_CURRENT_PAGE })

    const appendBreadCumbs = (pages) =>{
        var breads = pages && pages.length ? pages.map((p)=>({ value: p.to, label: p.label })) : []
        if( breads.length > 0  && breads.find(b=>(b.value==root)) ){ breads = [];}
        return [ {value: root, label:"Inicio" } , ...breads ]
    }

    const getCurrentPage = (pathname) => {
        var page = struct.find(p=> p.to === pathname)
        var title= ""
        var breadCrumbs = []

        if(page){
            title = page.title || title
            breadCrumbs = appendBreadCumbs([page])
        }

        if(!page){
            struct.map(p => {
                if(!p.childs) return 
                p.childs.forEach(sp=>{ 
                    if(sp.to === pathname){
                        title= sp.title  || title
                        breadCrumbs = appendBreadCumbs([p, sp]) 
                    }
                }) 
            })
        }

        setcurrentPage({ ...INITIAL_CURRENT_PAGE, title, breadCrumbs })
    } 

    useEffect(()=>{ getCurrentPage(pathname) },[pathname]) 

    return { pathname, setPathname, currentPage }
 
}

export default RouterState


