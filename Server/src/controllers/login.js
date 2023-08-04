const users = require("../utils/users")

const login = (req,res)=>{
    const {email, password} = req.query
    let access = false
    users.forEach(usuario=>{
        if (usuario.email === email && usuario.password===password) access = true
    })
    res.status(200).json({access})

}

module.exports = login