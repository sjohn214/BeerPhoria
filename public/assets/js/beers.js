const { search, suggest, regex } = puzzySearch

var str = document.querySelector('#search')
var btnSearch = document.querySelector('#btnSearch')
var suggestion = document.querySelector('#didyoumean')
var resultList = document.querySelector('#result')


let sentence = 'Searching for beers...? See what we have on tap!'

search(str.value, sentence) // true

suggest(str.value, sentence) // popular beers

regex(str.value) // new RegExp(...puzzy...)
console.log(sentence.match);
sentence.match(regex(str.value)) !== null;
str.addEventListener('input', () => {
    if (search(str.value, sentence))
        suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
    else
        suggestion.innerHTML = ''
});

$("#btnSearch").on("click", function () {
    var searchValue = $("#search").val();
    if (searchValue) {
        location.replace("/beers/" + searchValue);
    }
    else {
        location.replace("/");
    }
});

$('.create-btn').on('click', function (event) {
    event.preventDefault();

    var nameInput = $(this).siblings('[name=beer_name]').val();
    if (nameInput) {
      var beerInfo = {
        beer_name: nameInput,
      };
     // console.log(beerInfo);
      $.ajax({
        method: 'POST',
        url: '/api/beers/create',
        data: beerInfo,
      }).then(function (data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    }
  });


 