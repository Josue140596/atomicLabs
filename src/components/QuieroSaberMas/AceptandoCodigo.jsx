import React from 'react'
import { LayoutLoader } from './LayoutLoader'

import check_img from '../../assets/checkmark.png'
import { useDispatch } from 'react-redux';
import { Aumentarbarra } from '../../actions/actionUI';

export const AceptandoCodigo = ({history}) => {
    const dispatch = useDispatch();

    setTimeout(() => {

        dispatch(Aumentarbarra(88));
        history.push("/terminoscondiciones");
    }, 3000);

    return (
        <LayoutLoader>
             <img src={check_img} alt="check-codigo" />
            <span>Hemos validado el código</span>
        </LayoutLoader>
    )
}
