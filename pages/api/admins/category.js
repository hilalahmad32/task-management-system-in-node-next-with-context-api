import nc from 'next-connect'
import Category from '../../../models/Category';
import adminMiddleware from '../middleware/adminAuth'

const handler = nc()
    .use(adminMiddleware)
    .get(async (req, res) => {
        // get all category
        const categorys = await Category.find({});
        if (categorys) {
            res.send({
                success: true,
                categorys: categorys
            })
        } else {
            res.send({
                success: true,
                categorys: 'Some problem'
            })
        }
    })
    .post(async (req, res) => {
        try {
            // get category name from nextjs
            const { category_name } = req.body;
            if (!category_name) {
                res.send({
                    success: false,
                    'message': 'Please fill the field'
                });
            } else {
                const is_categoryName = await Category.findOne({ category_name: category_name });
                if (is_categoryName) {
                    res.send({
                        success: false,
                        'message': 'Category Already in use'
                    });
                } else {
                    const category = new Category({ category_name });
                    const categorys = await category.save();
                    if (categorys) {
                        res.send({
                            success: true,
                            'message': 'Category add Successfully'
                        });
                    } else {
                        res.send({
                            success: true,
                            'message': 'no Add'
                        });
                    }
                }
            }
        } catch (error) {
            res.send({
                success: false,
                'message': error.message
            });
        }
    })

export default handler