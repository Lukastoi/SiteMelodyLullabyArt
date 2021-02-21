import React, { Component } from 'react';
import StyledImagesAcceuil from './style';

import AcceuilImage from "../../datas/images/acceuilV2.png";
import AcceuilImage2 from "../../datas/images/acceuilV1.png";
import AcceuilImage3 from "../../datas/images/acceuilV1.png";


class AcceuilImages extends Component {
    render() {
        return (
            <StyledImagesAcceuil>
                <div>
                    <div>
                        <img src={AcceuilImage2} className="img1" />
                    </div>
                    <div>
                        <img src={AcceuilImage} className="mainImg" />
                    </div>
                    <div>
                        <img src={AcceuilImage3} className="img1" />
                    </div>
                </div>
            </StyledImagesAcceuil>
        );
    }
}
export default AcceuilImages;