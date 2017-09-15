import React, { Component } from 'react';
export default class AboutModule extends Component {
    constructor(args){
        super(args);
    }
    componentWillMount(){
        debugger;
    }
    render() {
        let classNames = ['class1','class2','class3'];
        let templates = [
            <p key="2">第一行</p>,
            <p key="3">第二行</p>
        ]
        return (
            <div>
                <input type="radio" id="man"/><label htmlFor="man">男</label>
                <h2 className={classNames.join(' ')} htmlFor="333">我是About的子组件</h2>
                {this.props.children}
                <br/>
                <br/>
                <br/>
                <br/>
                {templates}
            </div>
        )
    }
}