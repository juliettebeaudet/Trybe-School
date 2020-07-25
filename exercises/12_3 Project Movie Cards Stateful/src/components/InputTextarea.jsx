import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.label}>
        {this.props.text}
        <textarea
          value={this.props.value}
          name={this.props.label}
          onChange={this.props.change}
        />
      </label>
    );
  }
}

export default TextArea;
