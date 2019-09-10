import React from 'react'
import './PrintType.css'

export default class PrintType extends React.Component {

    render() {
        return (
            <div className='printType' >
                <label htmlFor='print-type'>Print Type: </label>
                <select id='print-type' onChange={this.props.printTypeSelection}>
                    <option name='printType' value='all'>All</option>
                    <option name='printType' value='books'>Book</option>
                    <option name='printType' value='magazines'>Magazine</option>
                </select>
            </div>
        )
    }
}