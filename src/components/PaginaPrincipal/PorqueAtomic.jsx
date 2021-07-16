import React from 'react';


//Imagen del back
import back_rect from '../../assets/back-rect.png';

//Imagnes de los beneficios
import img_tecnologias from '../../assets/Group 4041.png'
import img_equipo from '../../assets/Group 4042.png'
import img_actividades from '../../assets/Group 4043.png'

//Imagnes de iconos
import check_tiny from '../../assets/ic_check_tiny.png';
import { Table } from '../UI/Table';
import { ButtonPrimary } from '../UI/Buttons';

export const PorqueAtomic = () => {
    return (
        <section className="container-section-final">

            <div className="title-sections finales">
                <span>¿POR QUÉ</span>
                <span> ATOMIC?</span>
            </div>

            <div className="content-imagenes-beneficios mlr-70">
                <div className="content-beneficios">
                    <img width="300px" height="310px" src={img_tecnologias} alt="tecnologias" />
                    <span><img src={check_tiny} alt="check_t" />Usamos las tecnologías más modernas</span>
                    <span><img src={check_tiny} alt="check_t" />Innovamos y creamos proyectos retadores</span>

                </div>
                <div className="content-beneficios">
                    <img width="300px" height="310px" src={img_equipo} alt="tecnologias" />
                    <span><img src={check_tiny} alt="check_t" />¡Trabajamos en equipo rumbo al éxito! No tenemos código de vestimenta</span>
                    <span><img src={check_tiny} alt="check_t" />No tenemos código de vestimenta</span>

                </div>
                <div className="content-beneficios">
                    <img width="300px" height="310px" src={img_actividades} alt="tecnologias" />
                    <span><img src={check_tiny} alt="check_t" />Realizamos actividades para tu bienestar. ¡Tenemos un parque frente a la oficina!</span>
                    <span><img src={check_tiny} alt="check_t" />¡Tenemos un parque frente a la oficina!</span>

                </div>

            </div>

            <Table/>
            <ButtonPrimary/>


            <img className="img-back-rect" src={back_rect} alt="rectback" />

        </section>
    )
}
