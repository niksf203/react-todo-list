import React, { Component } from 'react'
import Button from './ButtonComponent'

class Input extends Component {
  state = {
    value: ''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  resetTextbox = () => {
    this.setState({
      value: ''
    })
  }
  render () {
    return (
      <div>
        <input type={'text'}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}/>
        <Button text='Add todo'
          value={this.state.value}
          onSubmit={this.props.onSubmit}
          onReset={this.resetTextbox}/>
      </div>
    )
  }
}

export default Input
