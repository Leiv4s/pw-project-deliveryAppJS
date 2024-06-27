import {Router} from 'express'
import UserController from './controllers/UserController.js'


const router = Router()

router.get('/', async (req,res)=>{

    res.status(200).send('Bem Vindes!')

})

router.get('/users', UserController.list)
router.post('/users', UserController.add)
router.get('/users/:id', UserController.find)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

export default router