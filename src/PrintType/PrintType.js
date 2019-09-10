import React from 'react'
import './PrintType.css'

export default class PrintType extends React.Component {

    render() {
        return (
            <form className='printType' onChange={this.props.printTypeSelection}>
                <label for='print-type'>Print Type: </label>
                <select id='print-type' >
                    <option name='printType' value='all'>All</option>
                    <option name='printType' value='books'>Book</option>
                    <option name='printType' value='magazines'>Magazine</option>
                </select>
            </form>
        )
    }
}