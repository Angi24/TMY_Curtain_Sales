module.exports = {
    hasMore: true, // Determined by if the server still has data
    data: [
        {
            id: Math.random().toString().slice(2),
            title: 'MAJGULL',
            price: 59.99,
            type: 'Blackout curtains',
            description: '<h3>1 pair, 57x98 " (145x250 cm)</h3>',
            img: 'https://www.ikea.com/ca/en/images/products/majgull-blackout-curtains-1-pair-gray__0889042_pe676988_s5.jpg?f=xxs',
            status: 'Out of stock',
            star: 5,
            commentNum: 230,
            specialPrice: false
        },
        {
            id: Math.random().toString().slice(2),
            title: 'BENGTA',
            price: 17.99,
            type: 'Blackout curtains',
            description: '<h3>1 length, 83x98 " (210x250 cm)</h3>',
            img: 'https://www.ikea.com/ca/en/images/products/bengta-blackout-curtain-1-length-blue__0805436_pe769559_s5.jpg?f=m',
            status: 'Available',
            star: 4.5,
            commentNum: 118,
            specialPrice: true
        },
        {
            id: Math.random().toString().slice(2),
            title: 'BIRTNA',
            price: 79.99,
            type: 'Blackout curtains',
            description: '<h3>1 pair, 57x98 " (145x250 cm)</h3>',
            img: 'https://www.ikea.com/ca/en/images/products/birtna-blackout-curtains-1-pair-beige__0814428_pe772561_s5.jpg?f=xxs',
            status: 'Available',
            star: 4.5,
            commentNum: 48,
            specialPrice: false
        },
        {
            id: Math.random().toString().slice(2),
            title: 'HILLEBORG',
            price: 49.99,
            type: 'Blackout curtains',
            description: '<h3>1 pair, 57x98 " (145x250 cm)</h3>',
            img: 'https://www.ikea.com/ca/en/images/products/hilleborg-blackout-curtains-1-pair-gray__0889144_pe695311_s5.jpg?f=xxs',
            status: 'Available',
            star: 5,
            commentNum: 102,
            specialPrice: false
        },
    ]
}