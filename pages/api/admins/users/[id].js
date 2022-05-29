import nc from 'next-connect'
import User from '../../../../models/User';
import adminMiddleware from '../../middleware/adminAuth'

const handler = nc()
    .use(adminMiddleware)
    .patch(async (req, res) => {
        try {
            const id = req.query.id;
            const users = await User.findById({ _id: id }).select('-password');
            if (users) {
                res.send({
                    success: true,
                    users: users
                })
            } else {
                res.send({
                    success: false,
                    message: "Some problem occure"
                })
            }

        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
    })
    .put(async (req, res) => {
        try {
            const id = req.query.id;
            const { fname, lname, email, username, education, phone } = req.body;
            if (!fname || !lname || !email || !username || !education || !phone) {
                res.send({
                    success: false,
                    message: "Please fill all the field"
                })
            } else {
                const users = await User.findByIdAndUpdate({ _id: id }, {
                    fname,
                    lname,
                    username,
                    email,
                    education,
                    phone
                })
                if (users) {
                    res.send({
                        success: true,
                        message: "User update Successfully"
                    })
                } else {
                    res.send({
                        success: false,
                        message: "Some problem occure"
                    })
                }
            }

        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
    })
    .delete(async (req, res) => {
        try {
            const id = req.query.id;
            const users = await User.findByIdAndDelete({ _id: id })
            if (users) {
                res.send({
                    success: true,
                    message: "Delete successfully"
                })
            } else {
                res.send({
                    success: false,
                    message: "Some problem occure"
                })
            }

        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
    })

export default handler