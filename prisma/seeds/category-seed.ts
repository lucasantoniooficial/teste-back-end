import {PrismaClient} from "@prisma/client";
import {faker} from '@faker-js/faker';

const prisma = new PrismaClient();
async function categorySeed() {
    const categories = []

    for(let counter = 0; counter < 10; counter++) {
        categories.push({
            name: faker.word.verb(),
            active: faker.helpers.arrayElement([true, false])
        })
    }

    await prisma.category.createMany({
        data: categories
    })
}

categorySeed().then(async () => {
    await prisma.$disconnect()
}).catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
})

export default categorySeed;