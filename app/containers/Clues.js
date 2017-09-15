import React, { Component } from 'react';
export default class Clues extends Component {
    static contextTypes = {
        router:React.PropTypes.object
    }
    constructor(props, context){
        super(props,context);
        this.state = {
            data: {}
        }
    }
    componentWillMount() {
        debugger;
    }
    render() {
        return (
            <div>
                Clues
            </div>
        )
    }
}