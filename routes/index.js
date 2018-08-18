// home
exports.home = function(req, res) {
    res.render('pages/home/index.ejs', {
        title : 'SKara Photography',
    });
};

// about
exports.about = function(req, res) {
    res.render('pages/about/index.ejs', {
        title : 'About | SKara Photography',
    });
};

// contact
exports.contact = function(req, res) {
    res.render('pages/contact/index.ejs', {
        title : 'Contact | SKara Photography',
    });
};

// gallery
exports.gallery = function(req, res) {
    res.render('pages/gallery/index.ejs', {
        title : 'Gallery | SKara Photography',
    });
};

// portfolio
exports.portfolio = function(req, res) {
    res.render('pages/portfolio/index.ejs', {
        title : 'Portfolio | SKara Photography',
    });
};

// shop
exports.shop = function(req, res) {
    res.render('pages/shop/index.ejs', {
        title : 'Shop | SKara Photography',
    });
};

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