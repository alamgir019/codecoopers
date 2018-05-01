import React,{Component} from 'react';
class CoffeeFilter extends Component
{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div>
                <h2>Search for Coffee</h2>
                <input type="text" onChange={this.props.handleFilter} />
            </div>
        )
    }
}
export default CoffeeFilter;