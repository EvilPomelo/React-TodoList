import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './TodoList.css';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            showList: ["Alice", "YK"],
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="TodoList">
                <header className="TodoList-header">
                    <img src={logo} className="TodoList-logo" alt="logo" />
                    <h1 className="TodoList-title">Welcome to React</h1>
                </header>
                <div>
                    <input onChange={this.handleChange} value={this.state.userInput}></input>
                    <button onClick={this.handleClick}>OK</button>
                </div>
                <ul>
                    <div>
                        {
                            this.state.showList.map((name, index) =>
                                <TodoListItem key={index} index={index} content={name} delete={this.handleDelete.bind(this)}></TodoListItem>
                            )
                        }

                    </div>
                </ul>

            </div>
        );
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }

    handleClick() {
        var list = this.state.showList;
        this.setState({ showList: [...list, this.state.userInput] });
    }
    handleDelete(index) {
        console.log(index);
        var list = this.state.showList;
        list.splice(index,1);
        this.setState({showList:list});     
    }
}

export default TodoList;