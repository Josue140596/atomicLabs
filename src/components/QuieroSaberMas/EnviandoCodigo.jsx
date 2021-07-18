import React from 'react';


import { LayoutLoader } from './LayoutLoader';
import check_img from '../../assets/checkmark.png'
export const EnviandoCodigo = ({history}) => {


    setTimeout(() => {
        history.push("/codigo")
    }, 3000);

    return (
        <LayoutLoader>
            <img src={check_img} alt="check-codigo" />
            <span>Te hemos enviado el código al número que nos proporcionaste</span>
        </LayoutLoader>
    )
}
