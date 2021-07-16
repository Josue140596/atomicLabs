import React from 'react';

//Imagenes de las cards
import img_explora from '../../assets/Group 4035.png';
import img_imagina from '../../assets/Group 4036.png';
import img_conquista from '../../assets/Group 4037.png';
import lines from '../../assets/lines.png';
import lines_blancas from '../../assets/lines_blancas.png';


export const Cards = () => {
    return (
        <div className="content-cards">
        <div>
            <span className="img-subtitle">
                <img src={img_explora} alt="img_explora" />
                <img src={lines} alt="lines" />
                <span>EXPLORA</span>
            </span>
            <span className="content-puntos-importantes">
                <ul>
                    <li>Innovación y <span>creación tecnológica</span></li>
                    <li><span>UI/UX</span></li>
                    <li><span>Innovación</span></li>
                </ul>
            </span>
        </div>
        <div>
            <span className="img-subtitle-principal">
                <img src={img_imagina} alt="img_explora" />
                <img src={lines_blancas} alt="lines" />
                <span>IMAGINA</span>
            </span>
            <span className="content-puntos-importantes-principal">
                <ul>
                    <li><span>Estrategia</span> Digital</li>
                    <li>Big Data &<span> Analysis</span></li>
                    <li><span>Consultoría</span> Tecnológica</li>
                    <li><span>Reducción</span> de costos TI</li>
                  
                </ul>
            </span>
        </div>
        <div>
            <span className="img-subtitle">
                <img src={img_conquista} alt="img_explora" />
                <img src={lines} alt="lines" />
                <span>CONQUISTA</span>
            </span>
            <span className="content-puntos-importantes">
                <ul>
                    <li>Desarrollo tecnológico <span>a la medida</span></li>
                    <li><span>Ciberseguridad</span></li>
                    <li><span>Servicios de la Nube</span></li>
                </ul>
            </span>
        </div>
       

    </div>
    )
}
