import React from 'react'
import './PrintType.css'

export default class PrintType extends React.Component {
    render() {
        return (
            <form className='printType'>
                <label for='print-type'>Print Type: </label>
                <select id='print-type'>
                    <option value='all'>All</option>
                    <option value='books'>Book</option>
                    <option value='magazines'>Magazine</option>
                </select>
            </form>
        )
    }
}