import {PrismaClient} from "@prisma/client";
import {faker} from "@faker-js/faker";

const prisma = new PrismaClient();

async function imageSeed() {
    const images = [];

    for(let counter = 0; counter < 10; counter++) {
        const product = await prisma.product.findUnique({
            where: {
                id: faker.number.int({min: 1, max: 10})
            }
        });

        if(product) {
            images.push({
                productId: product.id,
                path: `https://placehold.co/600x400?text=${product.name}`
            })
        }
    }

    await prisma.image.createMany({
        data: images
    })
}

imageSeed().then(async () => {
    await prisma.$disconnect()
}).catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});

export default imageSeed;