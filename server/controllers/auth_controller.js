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

        dbInstance.users.get_users([ username, password ])
        .then(users => {
            if ( users[0] ) {
                if( users[0].username === username && users[0].password === password){
                    req.session.user.id = users[0].id;
                    res.status(200).send(req.session.user);
                    console.log(res.data)
                    } else {
                    res.status(401).send('Go away.');
                    }
            } else {
                res.sendStatus(401)
                console.log(res.data)
                }
            } );
        },    

    logout: (req, res ) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}
