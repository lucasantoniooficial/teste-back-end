import {PrismaClient} from "@prisma/client";
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient();

async function productSeed() {
    const products = [];

    for(let counter = 0; counter < 10; counter ++) {
        const promotionalPrice = faker.number.float({min: 0, max: 999, precision: 2});
        const price = faker.number.float({min: 10, max: 999, precision: 2});

        const category = await prisma.category.findUnique({
            where: {
                id: faker.number.int({min: 1, max: 10})
            }
        });
        if(category) {
            products.push({
                categoryId: category.id,
                name: faker.word.verb(),
                promotional_price: validatePromotional(price, promotionalPrice),
                price: price,
                active: faker.helpers.arrayElement([true, false])
            });
        }
    }

    await prisma.product.createMany({
        data: products
    })
}

function validatePromotional(price: number, pricePromotional: number): null|number {
    if(pricePromotional < price) {
        return pricePromotional
    }

    return null;
}

productSeed().then(async () => {
    await prisma.$disconnect()
}).catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})

export default productSeed