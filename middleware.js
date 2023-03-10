//It is used for identifying and send request
//accordingly after identifying the user's authenticity
exports.requireLogin = (req, res, next) => {
    if(req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
};