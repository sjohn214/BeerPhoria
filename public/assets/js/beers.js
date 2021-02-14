const { search, suggest, regex } = puzzySearch

    var  str = document.querySelector('#search')
    var  btnSearch = document.querySelector('#btnSearch')
    var  suggestion = document.querySelector('#didyoumean')
    var  resultList = document.querySelector('#result')


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

        $("#btnSearch").on("click", function (){
           // debugger;
            var searchValue= $("#search").val();
                //console.log(searchValue);
        $.ajax({
            method: 'GET',
            url: '/api/beer?q=' + searchValue,
            success: function(data) {
               console.log(data);
                 newDiv.push(searchValue);
            }
        })
        } );
