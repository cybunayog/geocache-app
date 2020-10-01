const app = require('../../../util/configureAPI');
const connectDb = require('../../../util/db');
const Cache = require('../../../models/Cache');

app.put('*', (req, res) => {
    connectDb()
        .then(() => {
            const { _id } = req.query;
            if (!_id) throw new Error('No document id specified');

            return Cache.findOneAndUpdate(
                { _id },
                {
                    $inc: { foundCount: 1 },
                },
                {
                    useFindAndModify: true,
                    new: true,
                }
            );
        })
        .then(cacheItem => {
            res.status(200).json({
                result: cacheItem,
            });
        })
        .catch(e => {
            res.status(e.statusCode || 500).json({
                error: e.message,
            });
        });
    
});

module.exports = app;