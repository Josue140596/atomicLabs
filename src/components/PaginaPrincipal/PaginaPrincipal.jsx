import React from 'react';

//Components UI reutilizables
import { Footer } from '../UI/Footer';
import { Header } from '../UI/Header';

//Components que son las secciones de
//la página principal:
import { Bienvenida } from './Bienvenida';
import { PorqueAtomic } from './PorqueAtomic';
import { Somos } from './Somos';
import { TrabajarConNosotros } from './TrabajarConNosotros';



export const PaginaPrincipal = () => {
    return (
        <div className="container-body">
            <Header />
 
            <main role="main">
                <Bienvenida />
                <Somos/>
                <TrabajarConNosotros/>
                <PorqueAtomic/>
            </main>

            <Footer />
        </div>
    )
}
