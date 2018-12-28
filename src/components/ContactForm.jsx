import React from 'react';

import Input from "./controls/Input";
import Select from "./controls/Select";
import TextArea from "./controls/TextArea";

export default class ContactForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            reason: 1,
            consult: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }

    handleChange(value, name) {
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const {name, reason, consult} = this.state;
        const {handleChange, handleSubmit} = this;

        return (
            <form onSubmit={handleSubmit}>
                <h3>Contact Form</h3>
                <div>
                    <label for="name">Nombre:</label>
                    <Input name="name" value={name} handleChange={handleChange}/>
                </div>
                <div>
                    <label for="reason">Tipo de consulta:</label>
                    <Select name='reason' value={reason} handleChange={handleChange}>
                        <option value='1'>Tecnica</option>
                        <option value='2'>Administrativa</option>
                    </Select>
                </div>
                <div>
                    <label form='consult'>Consulta:</label>
                    <TextArea name='consult' value={consult} handleChange={handleChange}/>
                </div>
                <button type='submit'>Enviar</button>
            </form>
        )
    }

}