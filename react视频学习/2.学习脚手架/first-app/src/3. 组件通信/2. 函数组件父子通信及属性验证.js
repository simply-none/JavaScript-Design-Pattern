import React, { Component } from 'react'
import PropTypes from 'prop-types'

function Child (props) {
  const { name, age, numbers } = props
  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
      {
        numbers.map(item => <li>{item}</li>)
      }
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  numbers: PropTypes.array
}

Child.defaultProps = {
  name: 'jiu',
  age: 34,
  numbers: ['qw', 'fg']
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child name='qiu' age='23'/>
      </div>
    )
  }
}
