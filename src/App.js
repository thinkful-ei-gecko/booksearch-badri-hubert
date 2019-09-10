import React from 'react';
import SearchForm from './SearchForm/SearchForm'
import Filters from './Filters/Filters'
import SearchResults from './SearchResults/SearchResults'
import './App.css'

export default class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [],
      searchTerm: '',
      printType: '',
      bookType: '',
      error: null
    }
  };

  //Updates search results with book titles
  handleSearchFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value)
    this.setState({
      searchTerm: e.target.search.value
    })

    const url = `https://www.googleapis.com/books/v1/volumes?q=${e.target.search.value}`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     "Authorization": "Bearer AIzaSyCgUlXrt3FPA9OpISD8OeB5tDZytZ4I14Y",
    //     "Content-Type": "application/json"
    //   }
    // }

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again!')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          searchResults: data.items,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
        <main className='App'>
        <header>
          <h1>Google Book Search</h1>
          <SearchForm 
            searchTerm={this.handleSearchFormSubmit}
          />
          <Filters />
        </header>
        <SearchResults 
          searchResults={this.state.searchResults}
        />
      </main>
    );
  }
}