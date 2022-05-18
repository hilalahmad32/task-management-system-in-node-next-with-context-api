import nc from 'next-connect'
import adminMiddleware from '../middleware/adminAuth'
import Admin from "../../../models/Admin";
import connectDb from '../../../connection/config';
connectDb() //improt connection 

const handler = nc()
    .use(adminMiddleware)
    .get(async (req, res) => {
        const admins = await Admin.findOne({ _id: req.admin }).select('-password')
        res.send({ admins: admins })
    })

export default handler