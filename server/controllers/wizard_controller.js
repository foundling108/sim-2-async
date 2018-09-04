module.exports = {
    createNewProperty: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let user_id = req.session.user.user_id
        const { name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent, recommended_rent } = req.body;

        dbInstance.properties.create_properties([name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent, recommended_rent, user_id])
        .then(propertyCard =>
            res.status(200).send(propertyCard))
        .catch(err => 
        console.log(err))
    },

    getProperties: (req,res) => {
        const dbInstance = req.app.get('db'); 

        dbInstance.properties.get_properties(req.session.user.user_id)
        .then(listings => 
            res.status(200).send(listings))
        .catch(err => 
        console.log(err))
    },

    deleteProperty: (req, res) => {
        const dbInstance = req.app.get('db'); 
        const { id } = req.params;

        dbInstance.properties.delete_properties([id, req.session.user.user_id])
        .then(listings => 
            res.status(200).send(listings))
        .catch(err => 
        console.log(err))
    }
} 