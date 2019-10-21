import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.initialState ={
            name: '',
            Country: '',
            age:'',
            phone:'',

        }
        this.state = this.initialState
    }
    handleChange = event =>{
        const {name, value} = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm =()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){
        const {name, country, age, phone} = this.state;
        return (
            <form className="new-eit" className="form-group">
                <label>Name </label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder= "EIT's Name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Country </label>
                <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={country}
                    placeholder ="Home country"
                    onChange={this.handleChange}
                />
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    className="form-control"
                    value={age}
                    placeholder ="Age of Eit"
                    onChange={this.handleChange}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={phone}
                    placeholder ="Phone Number"
                    onChange={this.handleChange}
                />
                <input className="btn btn-success" type="button" value="Submit" onClick={this.submitForm} />

            </form>
        )
    }

}
export default Form;