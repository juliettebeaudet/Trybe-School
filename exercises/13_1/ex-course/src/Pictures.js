import React from 'react';

class Pictures extends React.Component {
  render() {
    return (
      <div>
        <a>
          <img height={this.props.height} src={this.props.src} alt={this.props.alt} />
          {this.props.legenda}
        </a>
      </div>
    );
  }
}

export default Pictures;
