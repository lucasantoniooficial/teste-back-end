import categorySeed from "./seeds/category-seed";
import productSeed from "./seeds/product-seed";
import imageSeed from "./seeds/image-seed";


async function main() {
    await categorySeed();
    await productSeed();
    await imageSeed();
}

main()