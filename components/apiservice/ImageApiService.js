var PIXABAY_URL = '';
var API_KEY = '';
var category = ['fashion',
                'nature',
                'backgrounds',
                'science',
                'education',
                'people',
                'feelings',
                'religion',
                'health',
                'places',
                'animals',
                'industry',
                'food',
                'computer',
                'sports',
                'transportation',
                'travel',
                'buildings',
                'business',
                'music'];

module.exports = {
  fetchImageData: function (){
    return fetch(imagesUrl())
      .then((response) => response.json());
  }
};

function imagesUrl(){
  return PIXABAY_URL+'?key='+API_KEY+'&category='+randomCategory()+'&image_type=photo&per_page=3';
};

function randomCategory(){
  return category[Math.floor(Math.random() * category.length)];
};
