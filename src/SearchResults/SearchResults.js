import React from 'react'
import './SearchResults.css'

export default class SearchResults extends React.Component {
    render() {
        return (
            <div className='searchResult'>
                <h3>Book Title</h3>
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
    }
}