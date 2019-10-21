import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.initialState ={
            name: '',
            Country: ''
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
        const {name, country} = this.state;
        return (
            <form className="new-eit">
                <label>Name </label>
                <input
                    type="text"
                    name="name"
                    placeholder= "EIT's Name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label>Country </label>
                <input
                    type="text"
                    name="country"
                    value={country}
                    placeholder ="Home country"
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        )
    }

}
export default Form;