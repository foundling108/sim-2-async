module.exports = {

    register: ( req, res ) => {
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
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        const match = users.find( user => user.username === username && user.password === password );

        await dbInstance.users.get_users([ username, password ])            
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