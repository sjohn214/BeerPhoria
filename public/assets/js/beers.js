const { search, suggest, regex } = puzzySearch

    var  str = document.querySelector('#search')
    var  btnSearch = document.querySelector('#btnSearch')
    var  suggestion = document.querySelector('#didyoumean')
    var  resultList = document.querySelector('#result')
    str.addEventListener('input', () => {
        if (search(str.value))
            suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
        else
            suggestion.innerHTML = ''
    });
    

        $("#search").val();
        $("#btnSearch").on("click", function (){
        $.ajax({
            method: 'GET',
            url: 'routes/beer-api-routes',
            data: beerData
        })
        } );
