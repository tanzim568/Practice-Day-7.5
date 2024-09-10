
document.getElementById("btn").addEventListener("click", (event) => {
    
  const mealName = document.getElementById("meal-input").value;
  mealContainer.innerHTML=""


fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${mealName}`)
  .then((res) => res.json())
  .then((data) => {


    displaydata(data);
  })
  .catch((err) => {
    console.log();
  });
})

const mealContainer = document.getElementById("meal-list");
const displaydata = (meal) => {
  
  document.getElementById("meal-input").value = "";

  for (let key in meal) {

    if (meal[key] == null) { 
      const div = document.createElement("div")
      div.classList.add("err")
      
      div.innerHTML = `
       <h1  border border-primary">No Meal Found</h1>
       <p  border border-primary">Try Again</p>`;
      mealContainer.appendChild(div)
    }
    else {
       meal[key].forEach((meal) => {
       

         const div = document.createElement("div");
         div.classList.add("meal-count");

         div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 10)}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

         mealContainer.appendChild(div);
       });
    
    }
   
  }
  


    
    
}

