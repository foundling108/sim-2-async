module.exports = {

    register: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { username, password} = req.body

        dbInstance.users.create_users([ username, password ])
        .then( ( user ) => {
            req.session.user = user;
            res.status(200).send(user.username) })
        .catch( (err) => {
            res.status(500).send({errorMessage: "Could not register"});
            console.log(err)
        } );
    },

    login: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        const user = users.find( user => user.username === username && user.password === password );

        dbInstance.users.get_users([ username, password ])
        .then(users => {

            if ( match ) {
                req.session.user.username = user.username;
                res.status(200).send(req.session.user);
            } else {
                res.status(401).send('Go away.');
            }
        })
        .catch( err => {
            res.status(500).send({errorMessage: "Could not log in"});
            console.log(err)
        } );        
            
    },

    
    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200);
    },

}
