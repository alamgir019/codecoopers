import React,{Component} from 'react';
class CommonComponent extends Component
{
    constructor()
    {
        super();
    }
    render(){
        let commonObj=this.props.commonObj;
        return(
            <li>{commonObj.name}</li>
        )
    }
}
export default CommonComponent;