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
      printType: 'all',
      bookType: '',
      error: null
    }
  };

  handleSearchTermChange = (e) => {
    console.log(e.target.value)
    e.preventDefault()
      this.setState({
        searchTerm: e.target.value
      })
  }

  //Updates search results with book titles
  handleSearchFormSubmit = (e) => {
    e.preventDefault();
    let url = '';
    this.state.bookType === '' ? url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}` : url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}&filter=${this.state.bookType}`; 
    console.log(this.state.bookType);
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

  handlePrintTypeSelection = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({
      printType: e.target.value
    })
  }

  handleBookTypeSelection = (e) => {
    e.preventDefault();
    this.setState({
      bookType: e.target.value
    })
  }
  
  render() {
    return (
        <main className='App'>
        <header>
          <h1>Google Book Search</h1>
          <SearchForm 
            searchTerm={this.handleSearchFormSubmit}
            searchChange={this.handleSearchTermChange}
          />
          <Filters printTypeSelection={this.handlePrintTypeSelection}
                   bookTypeSelection={this.handleBookTypeSelection}/>
        </header>
        <SearchResults 
          searchResults={this.state.searchResults}
        />
      </main>
    );
  }
}