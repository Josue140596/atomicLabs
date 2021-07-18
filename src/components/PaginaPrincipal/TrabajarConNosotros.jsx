import React from 'react';

import img_trabajar from '../../assets/Group 4040.png'
import { ButtonPrimary } from '../UI/Buttons';

export const TrabajarConNosotros = () => {
    return (
        <section className="container-sections">
            <div className="container-img-title-btn mlr-70">
                <div className="title-sections">
                    <span>¡TE ENCANTARÁ</span>
                    <span>TRABAJAR CON NOSOTROS!</span>
                </div>

                <div>
                    <picture>
                        <img src={img_trabajar} width="950px" alt="trabajar"/>
                    </picture>
                    <div className="proceso-pruebas">
                        <span>Contratacion remota</span>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        <span>Entrevista con el área de RH</span>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        <span>Prueba práctica</span>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        <span>Entrevista técnica</span>
                    </div>
                </div>


                <ButtonPrimary/>

            </div>
        </section>
    )
}
