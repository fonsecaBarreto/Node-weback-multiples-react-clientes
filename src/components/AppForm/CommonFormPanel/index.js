import React from "react";
import './style.css'

export default function AdminForm({ title, children, columns = [] }){

    const classNames = [ "one","two","three","four","five","six" ]
    return (
  
        <div className={'common-form'}>

            <section>
                { title && <span className="cf-title">{title || ""}</span>}
            </section>

            <section className="common-form-content">
                <div className="common-form-grid">
                    { React.Children.map(children, (x,i) =>(<div className={`grid-row ${classNames[columns[i]-1]}`}> {x} </div> ))}
                </div>
            </section>
        </div>
  
    )
}