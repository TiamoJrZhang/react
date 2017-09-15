import React, { Component } from 'react';
import { Link } from 'react-router';
export default class App extends Component {
    constructor(props, context){
        super(props);
        this.state = {
            data: {}
        }
    }
    componentWillMount() {
    }
    render() {
        const { location, children } = this.props
        return (
            <div>
                {children}
            </div>
        )
    }
}