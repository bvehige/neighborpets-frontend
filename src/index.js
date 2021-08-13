const neighborhoodForm = document.getElementById("neighborhood-form")
const neighborhoodName = document.getElementById("neighborhood-name")
const neighborhoodCity = document.getElementById("neighborhood-city")
const neighborhoodState = document.getElementById("neighborhood-state")
const neighborhoodZipcode = document.getElementById("neighborhood-zipcode")
const neighborhoodList = document.getElementById("neighborhood-list")
const neighborhoodURL = `http://127.0.0.1:3000/neighborhoods`
const petsURL = `http://127.0.0.1:3000/pets`

neighborhoodForm.addEventListener("submit", Neighborhood.submitNeighborhood)

