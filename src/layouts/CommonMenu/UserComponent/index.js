import React from 'react'
import './style.css'
 import UserImage from '../../../assets/images/user.png' 
import { ImExit } from 'react-icons/im'
export default ({menuState}) =>{
    const handleClick = () =>{
        if(menuState.show == false ){
            menuState.setShow(true)
        }
    }
    return (
        <div className="common-menu-user-component" onClick={handleClick}>
            <img src={UserImage}/> 
           { menuState.show == true && <React.Fragment>
                <span> Nome da Pessoa asdasd ada asdas dasd ad ad asd asd as dasd asdasdasdas asd ads </span>
                <span> Administrador </span>
                <button> <ImExit></ImExit>  Sair </button>
            </React.Fragment>}
        </div>
    )
}