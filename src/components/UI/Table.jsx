import React from 'react';

//Imagnes de iconos
import check_tiny from '../../assets/ic_check_tiny.png';

export const Table = () => {
    return (
        <div className="content-table">


            <table cellSpacing="0" cellPadding="0">
                <tbody>


                    <tr>

                        <th>CARACTERÍSTICAS</th>

                        <th>OTROS</th>

                        <th>ATOMIC</th>

                    </tr>

                    <tr>

                        <td>Equipo inclusivo, honesto y auténtico</td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                    <tr>

                        <td>Puntualidad es nuestro segundo nombre</td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                    <tr>

                        <td>Siempre innovamos en nuestros productos</td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                    <tr>

                        <td>Te ayudamos a crecer e implementar nuevos conocimientos</td>

                        <td></td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                    <tr>

                        <td>Nos preocupamos por tu bienestar</td>

                        <td></td>

                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                    <tr>

                        <td>El respeto es una parte fundamental</td>



                        <td></td>
                        <td><img src={check_tiny} alt="check_t" /></td>

                    </tr>

                </tbody>
            </table>

        </div>
    )
}
