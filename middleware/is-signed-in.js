

const isSignedIn = (req, res, next) => {
    //if the user is signed in (we will have req.session.user defined)
    if(req.session.user) return next();

    res.redirect('/auth/sign-in');
}

module.exports = isSignedIn;