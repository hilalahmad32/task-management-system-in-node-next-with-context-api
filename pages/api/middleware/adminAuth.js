import jwt from 'jsonwebtoken'

const adminMiddleware = (req, res, next) => {
    const token = req.headers.adminauthtoken;
    if (!token) {
        res.send({
            success: false,
            message: 'UnAuthorized'
        })
    } else {
        try {
            const { admin_id } = jwt.verify(token, 'hilalahmadkhanisafullstackwebdeveloperwhocandevelopedalotofwebsiteforfuture');
            req.admin = admin_id
        } catch (error) {
            res.send({
                success: false,
                message: 'UnAuthorized'
            })
        }
    }
    next()
}

export default adminMiddleware