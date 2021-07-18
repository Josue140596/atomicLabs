import React from 'react'
import { LayoutLoader } from './LayoutLoader'

import img_cometa from '../../assets/cometa.png'

export const ReenviandoCodigo = ({history}) => {

    setTimeout(() => {
        history.push("/codigo")
    }, 3000);

    return (
        <LayoutLoader>
              <img src={img_cometa} alt="check-codigo" />
            <span>Te estamos reenviando el código</span>
        </LayoutLoader>
    )
}
