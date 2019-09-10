import React from 'react'
import './BookType.css'

export default class BookType extends React.Component {
    render() {
        return (
            <form className='bookType'>
                <label for='book-type'>Book Type: </label>
                <select id='book-type'>
                    <option>No Filter</option>
                    <option value='ebooks'>eBook</option>
                    <option value='free-ebooks'>Free eBook</option>
                    <option value='full'>Full</option>
                    <option value='paid-ebooks'>Paid eBook</option>
                    <option value='partial'>Partial</option>
                </select>
            </form>
        )
    }
}