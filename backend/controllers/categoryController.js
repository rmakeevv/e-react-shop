const {db} = require('../db')
const myColl = db.collection("products");
async function getCategory(req, res) {
    try {
        const {category, order} = await req.params
        const result = (category === 'all')
            ? await myColl.find()
            : await myColl.find({category});
        await result.sort({price: (order === 'asc' ? 1 : -1)})
        const data = await result.toArray()
        return res.send(data)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = { getCategory }