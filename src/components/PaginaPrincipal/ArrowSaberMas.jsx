import React from 'react'

export const ArrowSaberMas = () => {
    return (
        // Es la flecha de saber más
        // te invita a hacer scroll
        <div className="saber-mas-arrow ">
            {/* Aquí use FONTAWESOM para agregar el icono de flecha */}
            <div className="pointer">
                <i className="fas fa-chevron-down"></i>
            </div>
            <span>
                Quiero saber más
            </span>
        </div>
    )
}
