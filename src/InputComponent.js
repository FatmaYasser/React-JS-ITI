import React, { Component } from 'react';


class InputComponent extends Component {
    render() {
        return (
            <input className="form-control size"
                required=""
                name={this.props["data-name"]}
                id={this.props["data-id"]}
                type={this.props["data-type"]}
                placeholder={this.props["data-placeholder"]}
                value={this.props["data-value"]}
                onChange={this.props["data-action"]}
            />
        );
    }
}

export default InputComponent;