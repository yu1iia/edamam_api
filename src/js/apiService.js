'use strict';

export default class ApiService {
  constructor() {
    this.key = '20619002-39ac62715mshb0b42d8a0ee40bdp15ecc5jsn0f89107ac09d';
    this.page = 1;
    this.searchQuery = '';
  }

  async fetchRecipe() {
    const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=fish';
    const response = await fetch(url);
    console.log(response);
    return response.json().then(({ hits }) => {
      this.incrementPage();
      return hits;
    });
  }
}

// fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=fish', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// }
