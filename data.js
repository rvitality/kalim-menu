import { v4 as uuidv4 } from "uuid";

export const DATA = [
    {
        id: uuidv4(),
        category: "Baked Sushi",
        products: [
            {
                productId: uuidv4(),
                name: "Tuna Kali",
                photo: "../assets/baked-sushi/tuna-kali.jpg",
                prices: {
                    solo: 278,
                    double: 578,
                    party: 1228,
                },
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Kani Aburi",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe2c23679017_image-4-menu-restaurantly-template.jpeg",
                prices: {
                    solo: 298,
                    double: 598,
                    party: 1248,
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Crispy Bacon",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe77ed679016_image-6-menu-restaurantly-template.jpeg",

                prices: {
                    solo: 308,
                    double: 608,
                    party: 1258,
                },
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
            {
                productId: uuidv4(),
                name: "Cheesy Samgyup",
                photo: "https://assets.website-files.com/621d856f5870fe664b678e8e/621d856f5870fe6257679014_image-2-menu-restaurantly-template.jpeg",

                prices: {
                    solo: 328,
                    double: 628,
                    party: 1278,
                },

                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            },
        ],
    },
    {
        id: uuidv4(),
        category: "Rice Bowls",
    },
    {
        id: uuidv4(),
        category: "Takoyaki",
    },
    {
        id: uuidv4(),
        category: "Sushi",
    },
    {
        id: uuidv4(),
        category: "Pasta",
    },
    {
        id: uuidv4(),
        category: "Milktea",
    },
];
