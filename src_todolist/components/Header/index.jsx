import React, { Component } from 'react'
import { nanoid } from 'nanoid' //生成唯一标识
import './index.css'
import PropTypes from 'prop-types'

export default class Header extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired,
	}

	handleKeyUp = (event) => {
		const { target, keyCode } = event
		// 判断是否是回车键
		if (keyCode !== 13) return
		// 添加内容判断
		if (target.value.trim() === '') {
			alert('输入不能为空')
			return
		}
		const todoObj = { id: nanoid(), name: target.value, done: false }
		this.props.addTodo(todoObj)
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input
					onKeyUp={this.handleKeyUp}
					type="text"
					placeholder="请输入你的任务名称，按回车键确认"
				/>
			</div>
		)
	}
}
