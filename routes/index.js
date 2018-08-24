// coming soon
exports.comingSoon = function(req, res) {
    res.render('pages/coming-soon/index.ejs', {
        title : 'Coming Soon | SKara Photography',
    });
};


// not found
exports.notFound = function(req, res) {
    res.send('This page does not exist');
};