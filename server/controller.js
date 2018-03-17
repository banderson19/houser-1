module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all()
        .then(listings => {
            res.status(200).send(listings)
        }).catch(err => res.status(500).send(err))
    },

    addInfo: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {propertyName} = req.body;
        console.log('will e even see this')
        console.log('This is the property name', propertyName)
        dbInstance.add_info([propertyName])
        .then(listing => {
            res.status(200).send(listing)
        }).catch(err => {
            console.log('this is err', err)
            res.status(500).send(err)
        })
    }
}


//make sure listen on all ports

//restart server everytime there is a sql change