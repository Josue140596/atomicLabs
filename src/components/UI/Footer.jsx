import React from 'react';


//Iconos social 
import linkedin from '../../assets/linkedin.png';
import linkedinx2 from '../../assets/linkedin@2x.png';
import twitter from '../../assets/twitter.png';
import twitterx2 from '../../assets/twitter@2x.png';

export const Footer = () => {
    return (
        <footer>
            <span>© 2020 AtomicLabs. Todos los derechos reservados.</span>
            <div>

            <span>Aviso de privacidad </span>
                <picture>
                    <source srcSet={linkedinx2} media="(min-width: 2000px)" />
                    <img src={linkedin} alt="linkedin" /> 
                </picture>
                <picture>

                    <source srcSet={twitterx2} media="(min-width: 2000px)" />
                    <img src={twitter} alt="linkedin" /> 

                </picture>
            </div>
        </footer>
    )
}
