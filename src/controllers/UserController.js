import UserRepository from '../repositories/UserRepository.js';


class UserController {

    async list (req, res) {
        const data = await UserRepository.getAllUsers()
        res.json(data)
    }

    async find (req,res){
        const id = req.params.id
        const data = await UserRepository.getUserById(id)
        res.status(200).json(data)
    }

    async add (req, res) {
        const newUser = req.body;
        console.log('opaaa                             '+newUser)
        const data = await UserRepository.createUser(newUser)
        res.json(data)
    }

    async update (req,res) {
        const id = req.params.id;
        const user = req.body;
        const data = await UserRepository.updateUser(user, id);
        res.json(data)
    }

    async delete (req,res) {
        const id = req.params.id;
        const data = await UserRepository.deleteUser(id);
        res.json(data)
    }

}


export default new UserController