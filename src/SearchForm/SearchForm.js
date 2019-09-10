import React from 'react'
import './SearchForm.css'

export default class SearchForm extends React.Component {
    render() {
        return (
            <div className='searchForm'>
                <form>
                    <label for="search-form">Search: </label>
                    <input type='text' placeholder='A Tale of Two Cities' id='search-form'></input>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}