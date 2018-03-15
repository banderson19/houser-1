module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAll()
        .then(listings => {
            res.status(200).send(listings)
        }).catch(err => res.status(500).send(err))
    }
}