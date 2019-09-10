import React from 'react'
import './SearchResults.css'

export default class SearchResults extends React.Component {
    render() {
        const books = this.props.searchResults.map((book, idx) => {
            return (            
            <div className='searchResult' key={idx}>
            <h3>{book.volumeInfo.title}</h3>
            <div className='details'>
                <div className='img'><img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/></div>
                <p className='subtitle'>
                   Author(s): {book.volumeInfo.authors}
                </p> <br />
                <p className='subtitle'>
                    Price: {book.saleInfo.saleability === 'FOR_SALE' ? book.saleInfo.listPrice.amount + book.saleInfo.listPrice.currencyCode : 'Not Available for Sale'}
                </p>
                <p className='desc'>
                    {book.volumeInfo.description}
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