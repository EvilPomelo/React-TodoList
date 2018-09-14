import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends Component
{
    constructor(props)
    {
        super(props);
        this.handlerDelete=this.handlerDelete.bind(this);
    }

    render(){
        return(
            <li>
            <input type="checkbox"/>
            {this.props.content}
            <button onClick={this.handlerDelete}>刪除</button>
            </li>
        )
    }

    handlerDelete(){
        this.props.delete(this.props.index);
    }

}

export default TodoListItem;