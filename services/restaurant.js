const url = "https://foodbukka.herokuapp.com/api/v1/restaurant"

const getRestaurants = async () => {
    return await fetch('url').then(r => r.data.Result).catch(err => console.log(err))
}

const getRestaurantsById = async (id) => {
    return await fetch('url').then(r => r.data.Result).catch(err => console.log(err))
}