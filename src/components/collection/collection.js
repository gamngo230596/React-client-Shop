import React, { Component } from 'react';

import Filter from './sidebar-filter';

class Collection extends Component {
    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-3 col-xs-12">
                            <Filter/>
                        </div>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                            <h2 className="text-left">Tất cả sản phẩm</h2>
                            <div className="row">
                               { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Collection;