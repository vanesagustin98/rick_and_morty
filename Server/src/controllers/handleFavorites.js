let myFavorites= []

const postFav = (req, res)=>{
    const {name, id, status, species, gender, origin, image} = req.body
    const character = {name, id, status, species, gender, origin, image}
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    const {id} = req.params
    myFavorites = myFavorites.filter(favorite => favorite.id !== id)
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}