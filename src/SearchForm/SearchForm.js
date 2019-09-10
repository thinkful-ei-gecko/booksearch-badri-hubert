import React from 'react'
import './SearchForm.css'

export default class SearchForm extends React.Component {
    render() {
        return (
            <div className='searchForm'>
                <form onSubmit={this.props.searchTerm} onChange={this.props.searchChange}>
                    <label for="search-form">Search: </label>
                    <input type='text' name="search" placeholder='A Tale of Two Cities' id='search-form'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}