import React, { useState } from 'react'
import "./contador.css"

export const Contador = () => {
    const [Contador, setContador] = useState(1)


    const handleAdd = ()=>{

        setContador(Contador + 1)
    }
    const handleSubstract = ()=>{

        if(Contador ===1){
            setContador(1)
        }else{

            setContador(Contador - 1)
        }

    }
    return (
        <div className="contador">
            <div className="contador__display">
                <i onClick={handleSubstract} className="fas fa-minus"></i>
                <p>
                    {Contador}
                </p>
                <i onClick={handleAdd} className="fas fa-plus"></i>
            </div> 
            <button className="contador__button">
                Agregar al carrito
            </button>
        </div>
    )
}
