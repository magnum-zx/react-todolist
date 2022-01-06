import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'

export default class Item extends Component {
	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
	}

	state = {
		mouse: false,
	}

	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		}
	}

	handleCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked)
		}
	}

	handleDelete = (id) => {
		if (window.confirm('确定删除？')) this.props.deleteTodo(id)
	}

	render() {
		const { id, name, done } = this.props
		const { mouse } = this.state
		return (
			<li
				style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }}
				onMouseEnter={this.handleMouse(true)}
				onMouseLeave={this.handleMouse(false)}
			>
				<label>
					<input
						type="checkbox"
						checked={done}
						onChange={this.handleCheck(id)}
					/>
					<span>{name}</span>
				</label>
				<button
					className="btn btn-danger"
					style={{ display: mouse ? 'block' : 'none' }}
					onClick={() => this.handleDelete(id)}
				>
					删除
				</button>
			</li>
		)
	}
}
