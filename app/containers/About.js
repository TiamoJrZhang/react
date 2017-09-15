import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as aboutAction from '../actions/about';
import * as aboutWelcome from '../actions/welcome';
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd';
import AboutModule from '../components/about/aboutModule';
function matchStateToProps(state) {
    return {
        state: {
            ...state.testAbout,
        },
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        ...aboutAction,
        ...aboutWelcome
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
            number: 4,
            bool: true
        }
    }
    componentWillMount() {
    }
    componentDidMount(){
    }
    goClue() {
        this.props.setNumber(3);
        this.setState({
            number : 5
        })
        this.props.getVideoUrl({ STno: 123 });
        /*getVideoUrl({ STno: 123 }).then(v=>{
            debugger;
        })*/
        this.context.router.push({
            pathname:'/test',
            query:{t:23}
        })
    }
    render() {
        let Component1 = <div>Component1</div>;
        let Component2 = <div>Component2</div>;
        return (
            <div>
                <h1>我是About组件</h1>
                <Button type="primary" htmlType="submit" onClick={this :: this.goClue}>About</Button>
                {this.props.state.number}
                <p>this state : {this.state.number}</p>
                <AboutModule text="text"><h3>我是AboutModule组件的children内容</h3></AboutModule>
                <br/>
                <Link to={{pathname:'/clue',query:{t:333}}}>Clue</Link>
                {this.state.bool ? Component1 : Component2}
            </div>
        )
    }
}