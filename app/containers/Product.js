import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aboutAction from '../actions/about';
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd';
function matchStateToProps(state) {
    return {
        state: {
            ...state.testAbout,
        },
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        ...aboutAction
    }, dispatch)
}
@connect(matchStateToProps, matchDispatchToProps)
export default class About extends Component {
    static contextTypes = {
        router:React.PropTypes.object
    }
    constructor(props, context){
        super(props,context);
        this.state = {
            number: 4
        }
    }
    componentWillMount() {

    }
    render() {
        return (
            <div>
                Product
            </div>
        )
    }
}