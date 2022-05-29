import nc from 'next-connect'
import Category from '../../../../models/Category';
import adminMiddleware from '../../middleware/adminAuth'

const handler = nc()
    .use(adminMiddleware)
    .delete(async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.send({
                    success: false,
                    message: 'Invalid id'
                })
            } else {
                const categorys = await Category.findByIdAndDelete({ _id: id });
                if (categorys) {
                    res.send({
                        success: true,
                        message: 'Delete successfully'
                    })
                } else {
                    res.send({
                        success: false,
                        message: 'Some Problem'
                    })
                }
            }
        } catch (e) {
            res.send({
                success: false,
                message: e.message
            })
        }
    })
    .patch(async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.send({
                    success: false,
                    message: 'Id not found'
                })
            } else {
                const categorys = await Category.findById({ _id: id });
                if (categorys) {
                    res.send({
                        success: true,
                        categorys: categorys
                    })
                } else {
                    res.send({
                        success: false,
                        message: 'Some problem'
                    })
                }
            }

        } catch (e) {
            res.send({
                success: false,
                message: e.message
            })
        }
    })
    .put(async (req, res) => {
        const id = req.query.id;
        const { category_name } = req.body;
        if (!category_name) {
            res.send({
                success: false,
                'message': 'Please fill the field'
            });
        } else {
            const categorys = await Category.findByIdAndUpdate({ _id: id }, {
                category_name: category_name
            });
            if (categorys) {
                res.send({
                    success: true,
                    'message': 'Category Updated Successfully'
                });
            } else {
                res.send({
                    success: true,
                    'message': 'not Updated'
                });
            }
        }
    })

export default handler;