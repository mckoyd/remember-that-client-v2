import React from 'react';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) { this.input.focus(); }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }
    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
        </label>
        <input
          {...this.props.input}
          id={this.props.input.id}
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
          ref={input => (this.input = input)}
        />
      </div>
    );
  }
}