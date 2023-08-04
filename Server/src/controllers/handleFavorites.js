let myFavorites= []

const postFav = (req, res)=>{
    const {character} = req.body
    myFavorites.push(character)
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res)=>{
    const {id} = req.params
    let favoriteFilter = myFavorites.filter(favorite=>favorite.id !== id)
    res.status(200).json(favoriteFilter)
}

module.exports = {
    postFav,
    deleteFav
}