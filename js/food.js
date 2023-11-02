const loadFood = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error => {
            console.log(error);
        })
}

const displayFood = (foods) => {
    // console.log(foods);
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerText = '';
    foods.forEach(food => {
        // console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col')
        foodDiv.innerHTML = `
                    
        <div class="card">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>

        <button onclick="foodDetails(${food.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodDetailsModal">
        Details
        </button>
        </div>    
        
        `;
        foodContainer.appendChild(foodDiv)
    })
}

const buttonContainer = () => {
    const searchText = document.getElementById('search-field').value;
    searchText.value = '';
    // console.log(searchText);
    loadFood(searchText)
}

const foodDetails = (code) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayFoodDetails(data.meals[0]))
}

const displayFoodDetails = (food) =>{
    console.log(food);
    document.getElementById('foodDetailsModalLabel').innerText = food.strMeal;
    const foodImage = document.getElementById('modal-details-body');
    foodImage.innerHTML = `
    
    <img class="img-fluid" src="${food.strMealThumb}">
    
    `
}


loadFood('fish');