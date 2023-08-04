// const axios = require('axios')

// const getCharById = (res,id)=>{
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         const { name, gender, species, origin, image, status } = response.data;
//         const characterData ={
//             id,
//             name,
//             gender,
//             species,
//             origin: origin.name,
//             image,
//             status
//         }
//         res.writeHead(200,{'Content-type':'application/json'})
//         res.end(JSON.stringify(characterData))
//     })
//     .catch((error)=>{
//         res.writeHead(500,{'Content-type':'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById

const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async(req,res)=>{
    const {id} = req.params
    try {
        if (id) {
            result = await axios(`${URL}${id}`)
            const {id, status, name, species, origin, image, gender} = result.data
            res.status(200).json({
                id, status, name, species, origin, image, gender
            })
        }
        else{
            res.status(400).send('Not found')
        }
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

module.exports = getCharById

