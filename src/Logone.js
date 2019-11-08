import React, { Component } from 'react';
import InputComponent from './InputComponent'
import SelectorComponent from './SelectorComponent'
import { Validator } from './Validator'
class logone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: '',
                email: '',
                password: '',
                phone: '',
                selector: ''
            },
            errors: { valid: false }

        }

        this.save = this.save.bind(this);
        this.handleChange = this.handleChange.bind(this)

    }


    save = (event) => {
        event.preventDefault();
        let validat = new Validator(this.state.form, this.state.errors)
        console.log(validat.errors, validat.form)
        this.setState({
            errors: validat.validate()
        });

    }


    handleChange = (event) => {
        let { form } = this.state;
        form[event.target.name] = event.target.value;
        this.setState(prevState => ({
            ...prevState,
            form: form
        }));
        console.log(event.target.value)
    }

    render() {

        const data = ['Arabic', 'English', 'French', 'Spanish']
        return (
            <React.Fragment>
                <br />
                <br />
                <br />
                <h1 className='text'>Sign Up</h1>
                <br />
                <div className='container col-6'>
                    <div calss='row'>

                        <form onSubmit={this.save} className="form-signin">
                            <InputComponent data-name='username'
                                data-id="nameid"
                                data-type="text"
                                data-placeholder="User Name"
                                data-action={this.handleChange}
                                data-value={this.state.form.username}
                            />
                            {
                                this.state.errors['username'] &&


                                < div className="alert alert-danger" role="alert">{this.state.errors['username']}</div>
                            }
                            <br />
                            <InputComponent data-name='email'
                                data-id="email"
                                data-type="text"
                                data-placeholder="E-mail"
                                data-action={this.handleChange}
                                data-value={this.state.form.age}
                            />
                            {
                                this.state.errors['email'] &&
                                < div className="alert alert-danger" role="alert">{this.state.errors['email']}</div>
                            }

                            <br />
                            <InputComponent data-name='password'
                                data-id="passwordid"
                                data-type="password"
                                data-placeholder="Password"
                                data-action={this.handleChange}
                                data-value={this.state.form.password}
                            />
                            {
                                this.state.errors['password'] &&


                                < div className="alert alert-danger" role="alert">{this.state.errors['password']}</div>
                            }
                            <br />
                            <InputComponent data-name='phone'
                                data-id="phoneid"
                                data-type="number"
                                data-placeholder="Phone Number"
                                data-action={this.handleChange}
                                data-value={this.state.form.phone}
                            />
                            {
                                this.state.errors['phone'] &&


                                < div className="alert alert-danger" role="alert">{this.state.errors['phone']}</div>
                            }
                            <br />
                            <SelectorComponent data-name='selector'
                                items-data={data}
                                data-action={this.handleChange}
                            />
                            {
                                this.state.errors['selector'] &&
                                < div className="alert alert-danger" role="alert">{this.state.errors['selector']}</div>
                            }
                            <br />
                            <button className="btn btn-lg btn-primary">Sign up</button>
                            {
                                this.state.errors['valid'] &&
                                <div className="alert alert-success text" role="alert">
                                    Success
                                </div>
                            }
                        </form>
                    </div>
                </div>

            </React.Fragment >
        );
    }
}

export default logone;