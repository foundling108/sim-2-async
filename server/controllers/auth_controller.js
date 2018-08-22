module.exports = {

    signup: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { username, password} = req.body

        dbInstance.users.create_users([ username, password ])
        .then( ( user ) => {
            req.session.user = user;
            res.status(200).send(user.username) })
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    login: async( req, res, next ) => {
        const { username, password } = req.body;
        const dbInstance = req.app.get('db');
        const users = await dbInstance.users.get_users()            
        const match = users.find( user => user.username === username && user.password === password );

        if ( match ) {
            req.session.user = match;
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Go away.');
        }
    
    },

    
    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200);
    },

}