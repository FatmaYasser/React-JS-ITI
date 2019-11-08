import React, { Component } from 'react';

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [] }
        // this.getdata = this.getdata.bind(this)
    }
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json
                })
            });
    }
    render() {
        let { items } = this.state
        return (
            <React.Fragment >
                <br />
                <br />
                <br />
                <div className='row'>
                    {items.map((item, index) =>
                        <div className="col-md-6" key={index}>
                            <div className="card flex-md-row mb-4 box-shadow h-md-250" >
                                <div className="card-body d-flex flex-column align-items-start">
                                    <h3 className="mb-0">
                                        <a className="text-dark" href="#">{item.title}</a>
                                    </h3>
                                    <p className="card-text mb-auto">{item.body}</p>
                                    <a href="#">Continue reading</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export default Blog;