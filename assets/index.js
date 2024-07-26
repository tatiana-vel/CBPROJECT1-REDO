const btnEl= document.getElementById("Randomizer")

function refreshPage(){
    window.location.reload();
} 

function searchApi() {
    let apiUrl= "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    
    fetch(apiUrl)
    .then(response => {
      // Check if the response status is OK (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response JSON
      return response.json();
    })
      .then(data=> {
        const Cocktails= data.drinks[0];
        console.log(Cocktails)
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

btnEl.addEventListener("click",refreshPage)
searchApi()
