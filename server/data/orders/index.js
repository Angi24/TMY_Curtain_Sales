module.exports = [
    /**
     * ReviewState:
     * 0: Unreview
     * 1: Reviewing
     * 2: Reviewed
     */
    {
        id: Math.random().toString().slice(2),
        title: 'MAJGULL',
        price: 59.99,
        type: 'Blackout curtains',
        description: '<h3>1 pair, 57x98 " (145x250 cm)</h3>',
        img: 'https://www.ikea.com/ca/en/images/products/majgull-blackout-curtains-1-pair-gray__0889042_pe676988_s5.jpg?f=xxs',
        status: 'Out of stock',
        star: 5,
        specialPrice: false,
        reviewState: 0
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
        specialPrice: true,
        reviewState: 0
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
        specialPrice: false,
        reviewState: 0
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
        specialPrice: false,
        reviewState: 2
    },
]