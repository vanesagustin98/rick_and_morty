const { User} = require('../DB_connection')

async function postUser(req, res) {
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(400).send('Faltan datos')
        }
        const user = await User.findOrCreate({
            where: { email, password }
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}

module.exports = postUser

// async function postUser(req, res) {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ message: "Faltan datos" });
//         }
//         const [user, created] = await User.findOrCreate({
//             where: { email },
//             defaults: { password }
//         });
//         if (created) {
//             return res.json(user);
//         } else {
//             return res.status(400).json({ message: "El usuario ya existe" });
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }

// }