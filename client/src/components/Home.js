import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
    render() {
        return (
            <div className='card' style={{ margin: '10%', padding: '20px', textAlign: 'center' }}>
                <div className="row">
                    <a class="waves-effect waves-light btn deep-purple lighten-1">sign up with google</a>
                </div>
                <div className="row">
                    <a class="waves-effect waves-light btn deep-purple lighten-1">sign up with facebook</a>
                </div>
            </div>
        )
    }
}