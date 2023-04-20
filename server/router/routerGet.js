const express = require('express')
const router = express.Router()
const montreal = require('../data/home/montreal')
const toronto = require('../data/home/toronto')
const url = require('url')
const detailsData = require('../data/details')
const reviewsData = require('../data/reviews')
const searchData = require('../data/search')
const orderReviewData = require('../data/orders')
const Mock = require('mockjs')
const Random = Mock.Random

/**
 *  Hot data on the home page
 */
router.get('/home/newpro', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    if (cityName === 'Montreal') {
        res.send({
            status: 200,
            result: montreal.new
        })
    }
    if (cityName === 'Toronto') {
        res.send({
            status: 200,
            result: toronto.new
        })
    }
})

router.get('/home/hotpro', (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    if (cityName === 'Montreal') {
        res.send({
            status: 200,
            result: montreal.hot
        })
    }
    if (cityName === 'Toronto') {
        res.send({
            status: 200,
            result: toronto.hot
        })
    }
})

/**
 * Search Page
 */
// router.get('/search', (req, res) => {
//     const search = url.parse(req.url, true).query.search
//     // Server get search content
//     console.log(search)
//     res.send({
//         status: 200,
//         result: searchData
//     })
// })
router.get('/search', (req, res) => {
    const search = url.parse(req.url, true).query.search
    // Server get search content
    console.log(search)
    let data = Mock.mock({
        hasMore: true,
        'data|5-10': [{
            id: Random.integer(),
            title: Random.word(5, 8),
            'price|1-100.2': 1,
            type: Random.title(1, 3),
            description: Random.sentence(5),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.word(5, 8)),
            status: Random.title(1, 3),
            'star|0-5.1': 1,
            'commentNum|0-500': 1,
            'specialPrice|1': true,
        }]
    })
    res.send({
        status: 200,
        result: data
    })
})

/**
 * Mock test
 */
router.get('/mock', (req, res) => {
    let data = Mock.mock({
        'data|5-10': [{
            id: Random.integer(),
            title: Random.word(5, 8),
            'price|1-100.2': 1,
            type: Random.title(1, 3),
            description: Random.sentence(5),
            img: Random.image('800x600', '#ccc', '#FFF', 'png', 'Default'),
            status: Random.title(1, 3),
            'star|0-5.1': 1,
            'commentNum|0-500': 1,
            'specialPrice|1': true,
        }]
    })
    res.send(data)
})

/**
 * Details page
 */
router.get('/details', (req, res) => {
    const itemId = url.parse(req.url, true).query.itemId
    res.send(detailsData)
})

/**
 * Reviews function
 */
router.get('/reviews', (req, res) => {
    res.send({
        status: 200,
        result: reviewsData
    })
})

/**
 * Order review
 */
router.get('/order/review', (req, res) => {
    const userId = url.parse(req.url, true).query.userId
    res.send({
        status: 200,
        result: orderReviewData
    })
})

/**
 * Comment
 */
router.post('/order/submit/comment', (req, res) => {
    const { userId, itemId, content } = req.body
    console.log(userId, itemId, content)
    res.send({
        status: 200,
        msg: 'Comment successful'
    })
})

module.exports = router;
