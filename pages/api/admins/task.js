import nc from 'next-connect'
import Task from '../../../models/Task';
import User from '../../../models/User';
import Category from '../../../models/Category';
import adminMiddleware from '../middleware/adminAuth'

const handler = nc()
    .use(adminMiddleware)
    .get(async (req, res) => {
        try {
            const tasks = await Task.find({}).populate([
                { path: 'user', model: User },
                { path: 'category', model: Category }
            ])
            if (tasks) {
                res.send({
                    success: true,
                    tasks: tasks
                })
            } else {
                res.send({
                    success: false,
                    message: "Server Problem"
                })
            }

        } catch (error) {
            res.send({
                success: false,
                message: error.message
            })
        }
    })
    .post(async (req, res) => {
        try {
            const { title, category, content, status, start_date, end_date, user } = req.body;
            if (!title || !category || !content || !status || !start_date || !end_date || !user) {
                res.send({
                    success: false,
                    message: "Please fill all the field"
                })
            } else {
                const tasks = new Task({
                    title,
                    category,
                    content,
                    status,
                    start_date,
                    end_date,
                    user
                });
                const task = await tasks.save();
                if (task) {
                    res.send({
                        success: true,
                        message: "Task Assign Successfully To User"
                    })
                } else {
                    res.send({
                        success: false,
                        message: "some problem occure"
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

export default handler