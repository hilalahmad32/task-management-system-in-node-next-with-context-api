import connectDb from "../../../connection/config";
import nc from 'next-connect'
connectDb()

const handler = nc()
    .get(async (req, res) => {
        res.send({ "hello": "world" })
    })

export default handler