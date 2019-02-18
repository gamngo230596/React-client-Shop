import React, { Component } from 'react';

class SidebarFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: [false,false,false,false]
        }
    }
    onFilter= (index)=>{
        
        const active = [...this.state.active.slice(0, index), !this.state.active[index], this.state.active.slice(index + 1),this.state.active.slice(index + 2)];
        //this.setState({active});
        
    }
render(){
    var {active} = this.state;
    return (
        <div className="filter">
            <h3>Lọc theo</h3>
            <ul className="filter-list type-choise">
                <li className={active[0] ? 'active' : ''} onClick={()=>this.onFilter(0)}>
                    <a role="button" className="checkbox" >TOPS</a>
                </li>
                
                <li className={active[1] ? 'active' : ''} onClick={()=>this.onFilter(1)}>
                    <a role="button" className="checkbox">BOTTOMS</a>
                </li>
                
                <li className={active[2] ? 'active' : ''} onClick={()=>this.onFilter(2)}>
                    <a role="button" className="checkbox">SKIRTS</a>
                </li>
                
                <li className={active[3] ? 'active' : ''} onClick={()=>this.onFilter(3)}>
                    <a role="button" className="checkbox">DRESSES</a>
                </li>
            </ul>
        </div>
        );
    }
}

export default SidebarFilter;