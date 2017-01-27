
var APPLICATION_ID = "";
var APPLICATION_KEY = "";
var NUTRITIONIX_URL = "https://api.nutritionix.com/v1_1/search/";
var LIMIT = "?results=0:50";
var FIELDS = "&fields=item_name,brand_name,nf_calories,nf_total_fat";
module.exports = {
  fetchNutritionData: function (search){
    return fetch(nutritionForSearch(search))
      .then((response) => response.json());
  }
};

function nutritionForSearch(search){
    return NUTRITIONIX_URL+search+LIMIT+
    FIELDS+"&appId="+APPLICATION_ID+"&appKey="+APPLICATION_KEY;
}
