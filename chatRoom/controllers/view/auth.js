const loginForm = {
    get: async(req, res) => {
        return res.render("login.pug")
    },
    post: async(req, res) => {
        console.log(req.body);
        return res.sendStatus(200)
    }
}


module.exports = {
    loginForm
}