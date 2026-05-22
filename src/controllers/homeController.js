class HomeControler {
    constructor() {

    }

    renderHome(req, res) {
        return res.render('homeView')
    }
}

module.exports = new HomeControler()