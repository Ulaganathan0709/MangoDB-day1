# MongoDB Product Queries

This project demonstrates how to connect to a MongoDB database using Node.js and perform various queries on a product collection. The script fetches data, filters it based on specific criteria, and performs operations such as finding, listing, and deleting products.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. You can download it from [here](https://nodejs.org/).
- **MongoDB**: Ensure you have MongoDB installed and running locally or on a cloud service like MongoDB Atlas. You can download it from [here](https://www.mongodb.com/try/download/community).

## Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory and install the necessary dependencies:

    ```bash
    npm install
    ```

    This will install the `mongodb` package required to run the script.

## Usage

1. **Setup MongoDB**: 
    - Ensure MongoDB is running on your system.
    - Import the product data into MongoDB if you haven't done so yet.

    Example MongoDB import command (from the directory containing `product.json`):
    ```bash
    mongoimport --db test --collection products --file product.json --jsonArray
    ```

2. **Run the Script**:
    - Open your terminal or command prompt.
    - Navigate to the project directory.
    - Run the script using Node.js:

    ```bash
    node index.js
    ```

    The script will connect to the MongoDB database, perform the queries, and output the results in the terminal.

## Queries Performed

The script performs the following MongoDB queries:

1. Find all the information about each product.
2. Find the product prices between 400 and 800.
3. Find the product prices not between 400 and 600.
4. List four products that have prices greater than 500.
5. Find the product name and material of each product.
6. Find the product with a row ID of 10.
7. Find only the product name and material.
8. Find all products containing the value "soft" in the material.
9. Find products with the color "indigo" and a price of 492.00.
10. Delete products with a price of 28.

## Notes

- The MongoDB connection string used in the script is for a local MongoDB instance. If you're using MongoDB Atlas or another remote MongoDB service, update the connection string accordingly.
- The `deleteMany` operation in the script will permanently remove documents from the collection. Use with caution.

## License

This project is licensed under the MIT License.
