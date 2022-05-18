import connectDb from "../../../connection/config";
import Admin from "../../../models/Admin";
import nc from 'next-connect'
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
connectDb()

const handler = nc()
    .post(async (req, res) => {
        // trace error in try catch
        try {
            // get json data from the frontend
            const { username, password } = req.body;
            // check the value are field or not
            if (!username || !password) {
                res.send({
                    success: false,
                    message: "Please fill the field"
                })
            } else {
                // get data from admin table if admin are exist or not
                const is_admin = await Admin.find({}).count()
                if (is_admin > 0) { // it will start form the index 0
                    const admins = await Admin.findOne({ username: username });
                    if (admins) {
                        const check_password = await bcryptjs.compare(password, admins.password)
                        if (check_password) {
                            const admin_id = { admin_id: admins._id };
                            const adminAuthToken = jwt.sign(admin_id, 'hilalahmadkhanisafullstackwebdeveloperwhocandevelopedalotofwebsiteforfuture');
                            res.send({
                                success: true,
                                adminToken: adminAuthToken,
                                message: "login successfully"
                            })
                        } else {
                            res.send({
                                success: false,
                                message: "Invalid Username and password"
                            })
                        }
                    } else {
                        res.send({
                            success: false,
                            message: "Invalid Username and password"
                        })
                    }
                } else {
                    const hash_password = await bcryptjs.hash('hilal123', 10)
                    const admins = new Admin({
                        username: 'hilal123',
                        password: hash_password
                    });
                    const admin = await admins.save()
                    res.send({ admin })
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