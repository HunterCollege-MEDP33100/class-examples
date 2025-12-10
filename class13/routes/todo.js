var express = require('express');
var fs = require('fs');
var router = express.Router();
const Items = require('../models/items');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        const items = await Items.find();
        res.json(items);
    } catch(error) {
        console.log(error);
        res.status(500);
        res.send('Something went wrong');
    }
});

router.get('/all', async function() {
    let totalValue = 0;
    const items = Items.find();
    res.json(item)
})

router.get('/:id', async function (req, res){
    const id = req.params.id;
    try {
        const item = await Items.find({ _id: id });
        res.json(item);
    } catch (error) {
        console.log(error);
        res.send('Something went wrong');
    }
})

router.post('/', async function (request, response) {
    console.log(request.body);

    try {
        const newFields = {
            ...request.body,
            createdAt: new Date(),
            value: 0.25,
        }
        console.log(newFields)
        const newItem = await Items.create(newFields);
        response.json(newItem);
    }  catch (error) {
        console.log(error);
        res.send('Something went wrong');
    }

})

router.put('/:id', async function(request, response) {
    console.log(request.params.id);
    console.log(request.body);

    try {
        const updatedItem = await Items.findByIdAndUpdate(
            request.params.id,
            {
                ...request.body
            }
        )
        response.json(updatedItem);
    } catch (error) {
        console.log(error);
        response.send('something went wrong')
    }
});

router.delete('/:id', async function(request, response) {
    try {
        const deletedItem = await Items.findByIdAndDelete(request.params.id)
    } catch(error) {
        console.log(error);
        response.send('something went wrong')
    }
})

module.exports = router;
