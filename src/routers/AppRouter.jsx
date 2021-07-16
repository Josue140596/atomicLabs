import React from 'react';

//Importaciones de react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//Componentes
import { PaginaPrincipal } from '../components/PaginaPrincipal/PaginaPrincipal';
import { SaberMasLayout } from '../components/QuieroSaberMas/SaberMasLayout';



export const AppRouter = () => {
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
                        path="/sabermas"
                        component={SaberMasLayout}

                    />

                    <Redirect
                        to="/"
                    />
                </Switch>
            </div>
        </Router>
    )
}
