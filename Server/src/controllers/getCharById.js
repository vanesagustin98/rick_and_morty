const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async(req,res)=>{
    const {id} = req.params
    try {
        if (id) {
            result = await axios(`${URL}${id}`)
            const {name, status, species, gender, origin, image} = result.data
            res.status(200).json({id, name, status, species, gender, origin, image})
        }
        else{
            res.status(400).send('Not found')
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

module.exports = getCharById