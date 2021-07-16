import React from 'react';

//Componente UI cards
import { Cards } from '../UI/Cards';




export const Somos = () => {
    return (
        <section className="container-sections">
            <div className="container-cards-title mlr-70">
                <div className="title-sections">
                    <span>SOMOS EL BRAZO DERECHO</span>
                    <span>DE LA TECNOLOGÍA</span>
                </div>


                {/* 
                Es el contenido de las cards se puede ver la
                carpeta UI y sus estilos estan en UI styles   
                */}
                <Cards/>
            </div>
        </section>
    )
}
