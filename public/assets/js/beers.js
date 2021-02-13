const { search, suggest, regex } = puzzySearch

    var  str = document.querySelector('#search')
    var  btnSearch = document.querySelector('#btnSearch')
    var  suggestion = document.querySelector('#didyoumean')
    var  resultList = document.querySelector('#result')


 const sentence = 'You want the web server to support four of the most popular programming paradigms.'
 
 search(str, sentence) // true
 
 suggest(str, sentence) // popular programming paradigm
 
 regex(str) // new RegExp(...puzzy...)
 
sentence.match(regex(str)) !== null // true
    str.addEventListener('input', () => {
        if (search(str.value))
            suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
        else
            suggestion.innerHTML = ''
    });
    

       var searchValue=  $("#search").val();


        $("#btnSearch").on("click", function (){
        $.ajax({
            method: 'GET',
            url: '/api/beer?q=' + searchValue ,
            dataType: beerData,
            success: function(data) {
            }
        })
        } );
