var searchData = JSON.parse(document.getElementById('search-data'). textContent);
var searchResultsList = document.getElementById('search-results');
var searchInput = document.getElementById('search-bar');

var updateSearchResults = function(e) {
  var query = e.target.value.toLowerCase();

  if(query.trim() !== '') {
    searchResultsList.innerHTML = '';

    for (let i in searchData) {
      var searchItem = searchData[i];

      if (searchItem.title.toLowerCase().includes(query) || searchItem.snippet.toLowerCase().includes(query)) {
        var searchLink = document.createElement('a');
        var searchContent = document.createTextNode(searchItem.title);

        searchLink.setAttribute('href', searchItem.href);
        searchLink.appendChild(searchContent);
        searchResultsList.appendChild(searchLink);
      }
    }
  }
};

searchInput.addEventListener('keyup', updateSearchResults);