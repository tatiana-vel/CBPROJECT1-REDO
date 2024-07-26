const btnEl= document.getElementById("Randomizer")

function refreshPage(){
    window.location.reload();
} 

function searchApi() {
    let apiUrl= "www.thecocktaildb.com/api/json/v1/1/random.php"
    
    fetch(apiUrl)
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
