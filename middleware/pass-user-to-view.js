//this middle ware allows the controllers to access the res.local.user property (as long as the user is authenticated)

const passUserToView = (req, res, next) => {
    //if there is no user, then the user is not authenticated
    //if there is a user, then the user is authenticated and we assigned the 
    //res.locals.user property to be the user from the session. 
    res.locals.user = req.session.user ? req.session.user : null;
    next();
}

module.exports  = passUserToView;