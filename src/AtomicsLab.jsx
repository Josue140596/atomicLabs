import React from 'react';

//Me permitira mandar mis valores
import { Provider } from 'react-redux';

//importar Store de redux:
import { store } from './store/store';


//componente de Rutas donde manejo
//rutas privadas y publicas 
import { AppRouter } from './routers/AppRouter'

export const AtomicsLab = () => {
    return (

        // Mando mi store donde se almacenan los valores
        //para que todos mis componentes pueden hacer dispatch
        // y seleccionar los valores que necesiten
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
