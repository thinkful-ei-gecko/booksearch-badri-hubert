import React from 'react';
import SearchForm from './SearchForm/SearchForm'
import Filters from './Filters/Filters'
import SearchResults from './SearchResults/SearchResults'
import './App.css'

export default class App extends React.Component{
  render() {
    return (
        <main className='App'>
        <header>
          <h1>Google Book Search</h1>
          <SearchForm />
          <Filters />
        </header>
        <SearchResults />
      </main>
    );
  }
}