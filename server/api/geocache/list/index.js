const app = require('../../../util/configureAPI');
const connectDb = require('../../../util/db');
const Cache = require('../../../models/Cache');

app.get('*', (req, res) => {
    connectDb()
        .then(() => Cache.find())
        .then(cacheItems => {
            res.status(200).json({
                result: cacheItems,
            })
        })
        .catch(e => {
            res.status(e.statusCode || 500).json({
                error: e.message,
            });
        }); 
});

module.exports = app;