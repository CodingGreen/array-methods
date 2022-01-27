const inputData = {
    categories: [
        {
            id: 15,
            name: 'Hats'
        },
        {
            id: 28,
            name: 'Shoes'
        }
    ],
    prices: [
        {
            itemId: 775,
            currency: 'GBP',
            price: 7.99,
        },
        {
            itemId: 775,
            currency: 'EUR',
            price: 8.59,
        },
        {
            itemId: 435,
            currency: 'GBP',
            price: 5.99,
        },
        {
            itemId: 435,
            currency: 'EUR',
            price: 6.79,
        },
        {
            itemId: 345,
            currency: 'GBP',
            price: 10.99,
        },
        {
            itemId: 345,
            currency: 'EUR',
            price: 12.99,
        },
        {
            itemId: 917,
            currency: 'GBP',
            price: 15.99,
        },
        {
            itemId: 917,
            currency: 'EUR',
            price: 17.89,
        },
    ],
    stock: [
        {
            itemId: 775,
            size: 'S',
            stock: 0,
        },
        {
            itemId: 775,
            size: 'M',
            stock: 10,
        },
        {
            itemId: 775,
            size: 'L',
            stock: 3,
        },
        {
            itemId: 435,
            size: 'S',
            stock: 5,
        },
        {
            itemId: 435,
            size: 'M',
            stock: 3,
        },
        {
            itemId: 435,
            size: 'L',
            stock: 7,
        },
        {
            itemId: 345,
            size: 'S',
            stock: 0,
        },
        {
            itemId: 345,
            size: 'M',
            stock: 0,
        },
        {
            itemId: 345,
            size: 'L',
            stock: 0,
        },
        {
            itemId: 917,
            size: '6',
            stock: 12,
        },
        {
            itemId: 917,
            size: '7',
            stock: 32,
        },
        {
            itemId: 917,
            size: '8',
            stock: 7,
        },
    ],
    items: [
        {
            itemId: 775,
            itemData: {
                name: 'Red Beanie',
                description: 'Warm',
            },
            categoryId: 15,
        },
        {
            itemId: 435,
            itemData: {
                name: 'Flat Cap',
                description: 'Farmer-vibes',
            },
            categoryId: 15,
        },
        {
            itemId: 345,
            itemData: {
                name: 'Top Hat',
                description: 'Bit old hat',
            },
            categoryId: 15,
        },
        {
            itemId: 917,
            itemData: {
                name: 'Yellow Wellington Boots',
                description: 'Ideal for puddles',
            },
            categoryId: 28,
        },
    ]
}

const expectedOutput = {
    'Hats': {
        id: '15',
        totalStock: 28,
        inStockItems: [
            {
                id: '775',
                name: 'Red Beanie',
                description: 'Warm',
                price: {
                    value: 799,
                    currency: 'GBP'
                },
                inStock: true,
                sizesInStock: ['M', 'L'],
            },
            {
                id: '435',
                name: 'Flat Cap',
                description: 'Farmer-vibes',
                price: {
                    value: 599,
                    currency: 'GBP'
                },
                inStock: true,
                sizesInStock: ['S', 'M', 'L'],
            }
        ],
        outOfStockItems: [
            {
                id: '345',
                name: 'Top Hat',
                description: 'Bit old hat',
                price: {
                    value: 1099,
                    currency: 'GBP'
                },
                inStock: false,
                sizesInStock: [],
            }
        ]
    },
    'Shoes': {
        id: '28',
        totalStock: 51,
        inStockItems: [
            {
                id: '917',
                name: 'Yellow Wellington Boots',
                description: 'Ideal for puddles',
                price: {
                    value: 1599,
                    currency: 'GBP'
                },
                inStock: true,
                sizesInStock: ['6', '7', '8'],
            }
        ],
        outOfStockItems: [],
    }
}

module.exports = { inputData, expectedOutput }