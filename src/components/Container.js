import { Component } from 'react';

export class Container extends Component {
  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
