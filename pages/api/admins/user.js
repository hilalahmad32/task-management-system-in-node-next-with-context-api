import nc from 'next-connect'
import User from '../../../models/User';
import adminMiddleware from '../middleware/adminAuth'
import bcryptjs from 'bcryptjs'

const handler = nc()
    .use(adminMiddleware)
    .get(async (req, res) => {
        try {
            const users = await User.find({}).select("-password")
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
                message: errror.message
            })
        }
    })
    .post(async (req, res) => {
        try {
            const { fname, lname, email, username, password, education, phone } = req.body;
            if (!fname || !lname || !email || !username || !password || !education || !phone) {
                res.send({
                    success: false,
                    message: "Please fill all the field"
                })
            } else {
                const is_email = await User.findOne({ email: email });
                if (is_email) {
                    res.send({
                        success: false,
                        message: "Email already exist"
                    })
                } else {
                    const hash_password = await bcryptjs.hash(password, 10);
                    const users = new User({
                        fname,
                        lname,
                        username,
                        email,
                        password: hash_password,
                        education,
                        phone
                    });
                    const user = await users.save();
                    if (user) {
                        res.send({
                            success: true,
                            message: "User Create successfully"
                        })
                    } else {
                        res.send({
                            success: false,
                            message: "some problem occure"
                        })
                    }
                }
            }

        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
    })

export default handler