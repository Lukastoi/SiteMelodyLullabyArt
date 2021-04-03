
export const ImagesF = () =>{
        var req = require.context("./", false, /.*\.png$/);
        var list = [];
        var i = 0;
        
        req.keys().forEach(function(key){
            list = list.concat({"src" : "../../../datas/images/images-acceuil/"+key.split('/')[1], "position" : i});
            ++i;
        });
        return [
            {img : Image0, position:0}, 
            {img: Image1, position:1}, 
            {img:Image2, position: 2}, 
            {img: Image3, position:3},
            {img: Image4, position:4},
            {img: Image5, position:5},
            {img: Image6, position:6},
        ];
}
export const Image0 = require( "./acceuilV2.png");
export const Image1 = require( "./acceuilV1.png");
export const Image2 = require( "./Image2.png");
export const Image3 = require( "./IMG_2577.PNG");
export const Image4 = require( "./IMG_2650.PNG");
export const Image5 = require( "./IMG_2996.PNG");
export const Image6 = require( "./IMG_3001.PNG");

export const Images = ImagesF();

export const SwitchDroit = (listImages) => {
    var length = listImages.length - 1;
    const list = [...listImages];
    list.forEach((element) => {
        if(element.position === 0){
            element.position = length;
        }else{
            element.position -= 1;
        }
    });
    list.sort((A,B) => {return A.position - B.position} );
    return list;
}

export const SwitchGauche = (listImages) => {
    var length = listImages.length - 1;
    const list = [...listImages];
    list.forEach((element) => {
        if(element.position === length){
            element.position = 0;
        }else{
            element.position += 1;
        }
    });
    list.sort((A,B) => {return A.position - B.position} );
    return list;
}

export default Images;