const { MongoClient } = require('mongodb');

async function runQueries() {
    const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test'); // Replace with your database name
        const collection = database.collection('products'); // Replace with your collection name

        // 1. Find all the information about each product
        const allProducts = await collection.find({}).toArray();
        console.log("All Products:", allProducts);

        // 2. Find the product price which is between 400 to 800
        const productsInRange = await collection.find({ product_price: { $gte: 400, $lte: 800 } }).toArray();
        console.log("Products with price between 400 to 800:", productsInRange);

        // 3. Find the product price which is not between 400 to 600
        const productsNotInRange = await collection.find({ product_price: { $not: { $gte: 400, $lte: 600 } } }).toArray();
        console.log("Products with price not between 400 to 600:", productsNotInRange);

        // 4. List the four products which are greater than 500 in price
        const fourExpensiveProducts = await collection.find({ product_price: { $gt: 500 } }).limit(4).toArray();
        console.log("Four products with price greater than 500:", fourExpensiveProducts);

        // 5. Find the product name and product material of each product
        const nameAndMaterial = await collection.find({}, { projection: { product_name: 1, product_material: 1, _id: 0 } }).toArray();
        console.log("Product name and material:", nameAndMaterial);

        // 6. Find the product with a row id of 10
        const productWithId10 = await collection.find({ id: "10" }).toArray();
        console.log("Product with ID 10:", productWithId10);

        // 7. Find only the product name and product material
        const onlyNameAndMaterial = await collection.find({}, { projection: { product_name: 1, product_material: 1, _id: 0 } }).toArray();
        console.log("Only product name and material:", onlyNameAndMaterial);

        // 8. Find all products which contain the value "soft" in product material
        const softMaterialProducts = await collection.find({ product_material: /Soft/i }).toArray();
        console.log('Products with "Soft" material:', softMaterialProducts);

        // 9. Find products which contain product color "indigo" and product price 492.00
        const indigoProducts = await collection.find({ product_color: "indigo", product_price: 492.00 }).toArray();
        console.log('Products with color "indigo" and price 492.00:', indigoProducts);

        // 10. Delete the products which have a product price value of 28
        const deleteResult = await collection.deleteMany({ product_price: 28 });
        console.log(`${deleteResult.deletedCount} products with price 28 were deleted`);

    } finally {
        await client.close();
    }
}

runQueries().catch(console.dir);
