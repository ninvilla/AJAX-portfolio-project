$(document).ready(function(){

    var API_ID = 'c555bfb5'
    var API_KEY = 'fbb5e81800d79cca9f3b170a4c61e200'

    $('form').submit(function(){
        var searchInput = $('#search-bar').val()
        var foodId = `${searchInput}`
        
        var url = `https://api.edamam.com/search?q=${foodId}&app_id=${API_ID}&app_key=${API_KEY}&to=1`

        $.get(url, function(res){
            $('#recipe-box').html(`
            <img src="${res.hits[0].recipe.image}" alt="">
            <div class="recipe-info">
                <h2>${res.hits[0].recipe.label}</h2>
                <p>Cuisine: ${res.hits[0].recipe.cuisineType}</p>
                <p>Health Info: ${res.hits[0].recipe.healthLabels[0]}</p>
                <p>${res.hits[0].recipe.calories.toFixed(0)} Calories</p>
                <a href="${res.hits[0].recipe.url}" class="btn btn-success">See Recipe</a>
            </div>
            `)
        }, 'json')
        return false;
    })




    $('#food1').click(function(){
        if($('#food1').attr('src') == 'img/food1.jpg'){
            $('#food1').attr('src', 'img/food4.jpg')
        }
        else{
            $('#food1').attr('src', 'img/food1.jpg')
        }
    })

    $('#food2').click(function(){
        if($('#food2').attr('src') == 'img/food2.jpg'){
            $('#food2').attr('src', 'img/food5.jpg')
        }
        else{
            $('#food2').attr('src', 'img/food2.jpg')
        }
    })

    $('#food3').click(function(){
        if($('#food3').attr('src') == 'img/food3.jpg'){
            $('#food3').attr('src', 'img/food6.jpg')
        }
        else{
            $('#food3').attr('src', 'img/food3.jpg')
        }
    })
})



