module.exports = {
    createNewProperty: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let user_id = req.session.user.id
        const { name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent, recommended_rent } = req.body;

        dbInstance.properties.create_properties([user_id, name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent, recommended_rent])
        .then(propertyCard =>
            res.status(200).send(propertyCard))
        .catch(err => 
        console.log(err))
    }
} 