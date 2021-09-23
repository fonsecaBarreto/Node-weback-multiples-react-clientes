import React from 'react'
import './style.css'
import GoalsImage from '../../../../../assets/images/home/goals.svg'
import GroceryImage from '../../../../../assets/images/home/groceries.svg'
import Tuck from '../../../../../assets/images/home/headline-truck.svg'

const ROW_STRUCT = [
    {
        image:Tuck,
        title: "O que fazemos?",
        description: "Conectamos fornecedores e compradores, reduzindo custos."
    },
    {
        image:GoalsImage,
        title: "Oportunidades",
        description: "Desfrute das vantagens de fazer parte de um grupo que compra junto."
    },
    {
        image:GroceryImage,
        title: "Publico alvo.",
        description: "Mercados, padarias e estabelecimentos que procuram melhorar suas compras"
    },
]

export default () =>{
    return (
        <div className="perks-row primary-layout-container">
            {
                ROW_STRUCT.map( (col, i)=>(
                    <div className="perks-card" key={i}>
                        <div className="pcimg-vp">
                            <img src={col.image}></img>
                        </div>
                        <span>{col.title}</span>
                        <span>{col.description}</span>
                    </div>
                ))
            }
        </div>
    )
}