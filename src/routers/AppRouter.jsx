import React from 'react';


//Importaciones del react-redux
import { useSelector } from 'react-redux';

//Importaciones de react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//Componentes
import { PaginaPrincipal } from '../components/PaginaPrincipal/PaginaPrincipal';
import { AceptandoCodigo } from '../components/QuieroSaberMas/AceptandoCodigo';
import { CodigoVerificacion } from '../components/QuieroSaberMas/CodigoVerificacion';
import { DatosEnviados } from '../components/QuieroSaberMas/DatosEnviados';
import { EditarTelefono } from '../components/QuieroSaberMas/EditarTelefono';
import { EnviandoCodigo } from '../components/QuieroSaberMas/EnviandoCodigo';
import { ReenviandoCodigo } from '../components/QuieroSaberMas/ReenviandoCodigo';

//Componentes de saber más
import { TeQueremosConocer } from '../components/QuieroSaberMas/TeQueremosConocer';
import { TerminosCondiciones } from '../components/QuieroSaberMas/TerminosCondiciones';
import { ValidaTuCelular } from '../components/QuieroSaberMas/ValidaTuCelular';


//Hacer rutas privadas o publicas
import { PrivateRoute} from './PrivateRoute';


  


export const AppRouter = () => {

    

    //1-.Vamos a autorizar el primera seccion 
    //del  nombre y apellido useando un HOOK que
    //nos provee el react-redux y que podemos ver
    //el state que manejos en redux
    const { autorizado } = useSelector(state => state.auth)
    
       
    

    return (
        <Router>
            <div className="router_styles">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={PaginaPrincipal}

                    />
                 
                    <Route
                        exact
                        path="/conocermas"
                        component={TeQueremosConocer}

                    />

                    <PrivateRoute
                        exact
                        path="/valida"
                        isAuthenticated={autorizado}
                        component={ValidaTuCelular}

                    />
                    <PrivateRoute
                        exact
                        path="/editarTelefono"
                        isAuthenticated={autorizado}
                        component={EditarTelefono}

                    />
                    <PrivateRoute
                        exact
                        path="/enviandoCodigo"
                        isAuthenticated={autorizado}
                        component={EnviandoCodigo}

                    />
                    <PrivateRoute
                        exact
                        path="/renviandoCodigo"
                        isAuthenticated={autorizado}
                        component={ReenviandoCodigo}

                    />
                    <PrivateRoute
                        exact
                        path="/aceptandoCodigo"
                        isAuthenticated={autorizado}
                        component={AceptandoCodigo}

                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={autorizado}
                        path="/codigo"
                        component={CodigoVerificacion}
                        
                        />
                    <PrivateRoute
                        exact
                        isAuthenticated={autorizado}
                        path="/terminoscondiciones"
                        component={TerminosCondiciones}
                        
                        />
                    <PrivateRoute
                        exact
                        isAuthenticated={autorizado}
                        path="/datosenviados"
                        component={DatosEnviados}

                    />
                    <Redirect
                        to="/"
                    />
                </Switch>
            </div>
        </Router>
    )
}
