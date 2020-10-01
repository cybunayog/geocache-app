const app = require('../../util/configureAPI');
const Cache = require('../../models/Cache');
const connectDb = require('../../util/db');

app.post('*', (req, res) => {
    connectDb()
        .then(() => {
            return Cache.create(req.body);
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