const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

class Database {
    static async getInstance() {
        if (!Database.instance) {
            const client = await MongoClient.connect(url);

            Database.client = client;
            Database.instance = client.db(dbName);
        }

        return await Database.instance;
    }

    static close() {
        if (Database.client) {
            Database.client.close();
        }
    }
}

module.exports = Database;