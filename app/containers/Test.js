import React from 'react';
export default class Test extends React.Component{
    static contextTypes = {
        router:React.PropTypes.object
    }
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div>
                我是Test
            </div>
        )
    }
}