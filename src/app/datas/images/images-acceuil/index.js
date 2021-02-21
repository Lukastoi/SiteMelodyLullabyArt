
export const Images = () =>{
        var req = require.context("./", false, /.*\.png$/);
        var list = [];
        var i = 0;
        
        req.keys().forEach(function(key){
            console.log("KEY :: ", req.keys())
            list = list.concat({"src" : "../../../datas/images/images-acceuil/"+key.split('/')[1], "position" : i});
            ++i;
        });
        return [{img : acceuilV1, position:0}, {img: acceuilV11, position:1}, {img:acceuilV2, position: 2}, {img: unicorn, position:3},];
}

export const acceuilV1 = require( "./acceuilV1.png");
export const acceuilV11 = require( "./acceuilV1.1.png");
export const acceuilV2 = require( "./acceuilV2.png");
export const unicorn = require( "./unicorn.png");

export const SwitchDroit = (listImages) => {
    var length = listImages.length - 1;
    listImages.forEach((element) => {
        if(element.position === 0){
            element.position = length;
        }else{
            element.position -= 1;
        }
    });
    listImages.sort((A,B) => {return A.position - B.position} );
    return listImages;
}

export const SwitchGauche = (listImages) => {
    var length = listImages.length - 1;
    listImages.forEach((element) => {
        if(element.position === length){
            element.position = 0;
        }else{
            element.position += 1;
        }
    });
    listImages.sort((A,B) => {return A.position - B.position} );
    return listImages;
}

export default Images;