import React, {Component} from 'react';

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th scope="row">Check</th>
                <th scope="row">Name</th>
                <th scope="row">Country</th>
                <th scope="row">Age</th>
                <th scope="row">Phone Number</th>
                <th scope="row"><button>Batch Delete</button></th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.charactersData.map((row, index) =>{
        return (
            <tr key={index}>
                <td>
                <input
                type="checkbox"
                />
                </td>
                <td>{row.name}</td>
                <td>{row.country}</td>
                <td>{row.age}</td>
                <td>{row.phone}</td>
                <td>
                    <button onClick = {()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return (
        <tbody>{rows}</tbody>
    )

}

class Table extends Component {
    render (){
        const {charactersData, removeCharacter} = this.props
        return(
            <table className="table">
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}
export default Table