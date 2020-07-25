import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.text}
        <input
          type="checkbox"
          id={this.props.label}
          name={this.props.label}
          checked={this.props.checked}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default Checkbox;
