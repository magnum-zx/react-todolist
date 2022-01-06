import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//初始化状态
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: true },
			{ id: '003', name: '打代码', done: false },
			{ id: '004', name: '逛街', done: false },
		],
	}

	addTodo = (todoObj) => {
		const { todos } = this.state
		const newTodos = [todoObj, ...todos]
		this.setState({ todos: newTodos })
	}

	updateTodo = (id, done) => {
		// 获取状态中的todos
		const { todos } = this.state
		// 匹配处理数据
		const newTodos = todos.map((todoObj) => {
			if (todoObj.id === id) return { ...todoObj, done }
			else return todoObj
		})
		this.setState({ todos: newTodos })
	}

	deleteTodo = (id) => {
		// 获取状态中的todos
		const { todos } = this.state
		// 删除指定id的todo对象
		const newTodos = todos.filter((todoObj) => todoObj.id !== id)
		this.setState({ todos: newTodos })
	}

	checkAllTodo = (done) => {
		const { todos } = this.state
		const newTodos = todos.map((todoObj) => {
			return { ...todoObj, done }
		})
		this.setState({ todos: newTodos })
	}

	clearAllDone = (done) => {
		const { todos } = this.state
		// 删除指定id的todo对象
		const newTodos = todos.filter((todoObj) => !todoObj.done)
		this.setState({ todos: newTodos })
	}

	render() {
		const { todos } = this.state
		return (
			<div id="root">
				<div className="todo-container">
					<div className="todo-wrap">
						<Header addTodo={this.addTodo} />
						<List
							todos={todos}
							updateTodo={this.updateTodo}
							deleteTodo={this.deleteTodo}
						/>
						<Footer
							todos={todos}
							checkAllTodo={this.checkAllTodo}
							clearAllDone={this.clearAllDone}
						/>
					</div>
				</div>
			</div>
		)
	}
}
