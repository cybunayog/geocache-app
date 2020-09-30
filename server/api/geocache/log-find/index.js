const app = require('../../../util/configureAPI');

app.put('*', (req, res) => {
    res.status(200).json({
        result: {},
    })
});

module.exports = app;