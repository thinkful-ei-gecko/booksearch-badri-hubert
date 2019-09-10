import React from 'react'
import './SearchResults.css'

export default class SearchResults extends React.Component {
    render() {
        const books = this.props.searchResults.map((book, idx) => {
            return (            
            <div className='searchResult' key={idx}>
            <h3>{book.volumeInfo.title}</h3>
            <div className='details'>
                <div className='img'>image</div>
                <p className='subtitle'>
                   Author 
                </p>
                <p className='subtitle'>
                    Price
                </p>
                <p className='desc'>
                    Description
                </p>
                </div>
        </div>
        )             
        })
        return (
            <div>
                {books}
            </div>
        )
    }
}