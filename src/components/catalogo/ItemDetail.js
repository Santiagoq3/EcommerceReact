import React, { useEffect, useState } from 'react'
import "./itemdetail.css"

export const ItemDetail = ({Productos}) => {

    const [loader, setloader] = useState(true)
    const {data,loading} = Productos;
    const {producto} =data
    console.log("xdxd", data, loading)
    
    
    return (
        <div className="itemdetail">
            <img  />

            
                {loading ? <p>cargando...</p>

                :
                
            
            
                <div className="itemdetail__detail">

                    <div className="itemdetail__detail-top">
                        <h1>{producto.nombre}</h1>
                        <p>{producto.precio}</p>
                    </div>
                    <div className="itemdetail__detail-middle">
                        
                    </div>
                    <div className="itemdetail__detail-bottom">
                        <h2>{producto.descripcion}</h2>
                        <p>
                            
                        </p>
                    </div>

                </div> 
            }
                
            
            

            
        </div>
    )
}
