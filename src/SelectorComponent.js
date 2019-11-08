import React, { Component } from 'react';

class SelectorComponent extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02" onChange={this.props['data-action']} name={this.props['data-name']}>
                    <option selected disabled hidden>Language</option>

                    {
                        this.props['items-data'] &&
                        this.props['items-data'].map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                    }</select>
                <div className="input-group-append">
                    <label className="input-group-text" for="inputGroupSelect02">Options</label>
                </div>
            </div>

        );
    }
}

export default SelectorComponent;
