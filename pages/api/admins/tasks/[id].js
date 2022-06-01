import nc from 'next-connect'
import Task from '../../../../models/Task';
import User from '../../../../models/User';
import Category from '../../../../models/Category';
import adminMiddleware from '../../middleware/adminAuth'

const handler = nc()
    .use(adminMiddleware)
    .patch(async (req, res) => {
        try {
            const id = req.query.id;
            const tasks = await Task.findById({ _id: id }).populate([
                { path: 'user', model: User },
                { path: 'category', model: Category }
            ]);
            if (tasks) {
                res.send({
                    success: true,
                    tasks: tasks
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
            const { title, category, content, status, start_date, end_date, user } = req.body;
            if (!title || !category || !content || !status || !start_date || !end_date || !user) {
                res.send({
                    success: false,
                    message: "Please fill all the field"
                })
            } else {
                const tasks = await Task.findByIdAndUpdate({ _id: id }, {
                    title,
                    category,
                    content,
                    status,
                    start_date,
                    end_date,
                    user
                })
                if (tasks) {
                    res.send({
                        success: true,
                        message: "Task update Successfully"
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
            const tasks = await Task.findByIdAndDelete({ _id: id })
            if (tasks) {
                res.send({
                    success: true,
                    message: "Task Delete successfully"
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