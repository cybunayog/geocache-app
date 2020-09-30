const app = require('../../util/configureAPI');
const Cache = require('../../models/Cache');
const connectDb = require('../../util/db');

app.post('*', (req, res) => {
    connectDb()
        .then(() => {
            return Cache.create({
                title: 'Test',
                description: 'This is a description',
                latitude: 123,
                longitude: 123,
            });
        })
        .then((cacheItem) => {
            res.status(200).json({
                result: cacheItem,
            });
        })
        .catch(e => {
            res.status(e.statusCode || 500).json({
                error: e.nmessage,
            });
        });
});

module.exports = app;