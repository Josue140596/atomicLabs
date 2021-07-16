import React from 'react';

//Componentes
import { ArrowSaberMas } from './ArrowSaberMas'


//Imagenes
import img_austro from '../../assets/Group 4032.png'
import img_austro_small from '../../assets/Group 4013.png'
import { ButtonPrimary} from '../UI/Buttons';

export const Bienvenida = () => {
    return (
        <section className="container-bienvenida">

            {/* Este div tendrea la imagen y el titulo */}
            <div className="content-img-title-bienvenida mlr-70">
                {/* Aqui estará la imagen */}
                <div className="img-bienvenida">
                    <picture>
                        <source srcSet={img_austro_small} media="(max-width: 800px)" />

                        <img src={img_austro} alt="img-bienvenida" />
                    </picture>
                </div>

                {/* Aqui estará el titulo */}
                <div className="title-bienvenida-boton">
                    <h2 className="title-h2">
                        <span>Desarrolla todo</span>

                        <span>tu POTENCIAL</span>

                        <span>dentro del equipo</span>

                        <span>ATOMIC<span>LABS</span></span>
                    </h2>

                   <ButtonPrimary/>
                </div>
            </div>


            {/* Flecha que te invita a hacer scroll*/}
            <ArrowSaberMas />
        </section>
    )
}
