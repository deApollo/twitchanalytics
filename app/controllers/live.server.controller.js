exports.render = function(req, res) {
    var user_auth = req.session.auth_token;
    var username = req.session.display_name;
    res.render('live', {auth_token : user_auth, display_name : username, page : 'live'});
};
