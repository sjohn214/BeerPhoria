const { search, suggest, regex } = require('puzzy-search')

let beerController= require("../beer_controller.js")

let  str = document.querySelector('#search')
let  btnSearch = document.querySelector('#btnSearch')
let  suggestion = document.querySelector('#didyoumean')
let  resultList = document.querySelector('#result')

str.addEventListener('input', () => {
    if (str.value)
        suggestion.innerHTML = `Did you mean: ${suggest(str.value)}`
    else
        suggestion.innerHTML = ''
})

btnSearch.addEventListener('click', () => {
    let  regex = regex(str.value)
    fetch('api.php?regex=' + regex)
        .then(res  =>  res.json()).then(data  => {
            result.innerHTML = data.map(r  =>  `<li>${r.sampleName}</li>`).join('')
        })
        .catch(e  =>  console.log(e))
})