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
        const {propertyName, propertyDescription, address, city, location, zip, url, loanAmount, monthlyMortgage, desiredRent} = req.body;
        dbInstance.add_info([propertyName, propertyDescription, address, city, location, zip, url, loanAmount, monthlyMortgage, desiredRent])
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