import React, {Component} from 'react';

const TableHeader = () =>{
    return (
        <thead>
            <tr>
                <th>Check</th>
                <th>Name</th>
                <th>Country</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th><button>Batch Delete</button></th>
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
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}
export default Table