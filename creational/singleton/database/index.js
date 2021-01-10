const Database = require('./database');

(async () => {
    console.time('1st instance');
    const db1 = await Database.getInstance();
    console.timeEnd('1st instance');

    console.time('2st instance');
    const db2 = await Database.getInstance();
    console.timeEnd('2st instance');

    Database.close();
})();