import React from 'react'
import BookType from '../BookType/BookType'
import PrintType from '../PrintType/PrintType'
import './Filters.css'

export default class Filters extends React.Component {
    render() {
        return (
            <div className='filters'>
                <PrintType />
                <BookType />
            </div>
        )
    }
}