import React, { Component } from 'react';
import Btn from './btn';

class Button extends Component {

    btn = {
        name: 'Foo Bar',
        handler: () => new Promise((resolve) => setTimeout(() => resolve(), 3000))
    };
    
    render() {
        return (
            <div>

                <Btn name={this.btn.name} handler={this.btn.handler.bind(this)} />

            </div>
        );
    }



}

export default Button;