import React, { PropTypes } from 'react';

// Linkの実体は<span>~</span>もしくは<a>~</a>
class Link extends React.Component {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a href="#"
         onClick={e => {
           e.preventDefault()
           this.props.onClick()
         }}
      >
        {this.props.children}
      </a>
    );
  }
}

// 制約の指定
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
