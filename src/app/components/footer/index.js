import React, { Component } from 'react';
import FooterStyled from './style';
import ButtonBar from "../buttons-bar/index";


function Footer (props){
        const buttons = [{titre:"Instagram", href:"/instagram"}, {titre:"Facebook", href:"/fb"}, {titre:"Email", href:"/email"}, {titre:"Etsy", href:"/etsy"}];
    return(
        <FooterStyled>
                <ButtonBar buttons={buttons}/>
                {/* <div>
                    <div>Instagram</div>
                    <div>Facebook</div>
                    <div>mail</div>
                    <div>Etsy</div>
                </div> */}
                <div>
                    <div className="copyright">Copiright</div>
                </div>
            </FooterStyled>
    );
}

// class Footer extends Component {
//     render() {
//         const buttons = ["Instagram", "Facebook", "Email", "Etsy"]
//         return (
//             <FooterStyled>
//                 <ButtonBar buttons={buttons}/>
//                 {/* <div>
//                     <div>Instagram</div>
//                     <div>Facebook</div>
//                     <div>mail</div>
//                     <div>Etsy</div>
//                 </div> */}
//                 <div>
//                     <div className="copyright">Copiright</div>
//                 </div>
//             </FooterStyled>
//         );
//     }
// }

export default (Footer);