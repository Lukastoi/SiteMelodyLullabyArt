import React,{Component} from "react";
import ButtonBarStyled from './style';
class ButtonBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isHomeSelected:false,
        };
        this.onMouseOverEvent = this.onMouseOverEvent.bind(this);
    }
    onMouseOverEvent = (e) =>{
        console.log("TEXT :: ", e.position);
        this.setState({
            isHomeSelected: true,
        })
    }
    onMouseOutEvent = (e) =>{
        console.log("TEXT :: ", e.position);
        this.setState({
            isHomeSelected: false,
        })
    }
    render(){
        const {buttons} = this.props;
        return (
            <ButtonBarStyled>
                {buttons.map(buttonText => {
                    return (
                        <div>
                            <button>
                                {buttonText}
                            </button>
                        </div>
                    );
                })}
            </ButtonBarStyled>
        );
    }
}
export default ButtonBar;