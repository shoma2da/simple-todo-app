import React, { PropTypes } from 'react';

// Todoの実体は<li>~</li>
class Todo extends React.Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
        >
        {this.props.text}
      </li>
    );
  }
}

// 制約の指定
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
