const { search, regex, suggest } = require('puzzy-search')

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
    
    btnSearch.addEventListener('click', () => {
        regex = regex(str.value)
        fetch('api.php?regex=' + regex)
            .then(res  =>  res.json()).then(data  => {
                resultList.innerHTML = data.map(r  =>  `<li>${r.sampleName}</li>`).join('')
            }).catch(e  =>  console.log(e))
    });


// $("#search").val();
// $("#btnSearch").on("click", function (){
// $.ajax({
//     method: 'GET',
//     url: 'api/beers'
// })
// } );
