var PIXABAY_URL = 'https://pixabay.com/api/';
var API_KEY = '4302575-97f93ef58355463ad6edb23bf';
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
