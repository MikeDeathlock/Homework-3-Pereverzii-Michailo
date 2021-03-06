exports.getHomePage = (req, res, next) => {
    res.render("pages/index");
}

exports.getContactPage = (req, res, next) => {
    res.render("pages/contact");
}

exports.getBlogPage = (req, res, next) => {
    res.render("pages/blog");
}

exports.getSingleBlogPage = (req, res, next) => {
    res.render("pages/single-blog");
}

exports.getCartPage = (req, res, next) => {
    res.render("pages/cart");
}

exports.getCategoryPage = (req, res, next) => {
    res.render("pages/cart");
}

exports.getCheckoutPage = (req, res, next) => {
    res.render("pages/cart");
}

exports.getConfirmationPage = (req, res, next) => {
    res.render("pages/confirmation");
}

exports.getLoginPage = (req, res, next) => {
    res.render("pages/login");
}

exports.getRegisterPage = (req, res, next) => {
    res.render("pages/register");
}

exports.getSingleProductPage = (req, res, next) => {
    res.render("pages/single-product");
}

exports.getTrackingOrderPage = (req, res, next) => {
    res.render("pages/tracking-order");
}