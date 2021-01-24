import React, { Component } from "react";

import TodoItem from "./TodoItem";
import todosData from "../todosData";
import "../../index.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                console.log(todo, id)
                return todo;
            })
            return {
                todos: updatedTodos
            };
        })
    }
    render() {
        const todosComponent = this.state.todos.map((item) => {
            return(
                <TodoItem
                    key={item.id}
                    todo={item}
                    handleChange={this.handleChange}
                />
            )
        })
        return(
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }
}

export default App;
