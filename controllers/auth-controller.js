import * as userDao from "../database/users/user-dao.js";

const authController = (app) => {
    app.post('/api/register', register);
    app.post('/api/profile', profile);
    app.post('/api/login', login);
    app.post('/api/logout', logout);
}

const register = async (req, res) => {
    const user = req.body;
    const existingUser = await userDao.findUserByCredentials(user.email, user.password);

    if (existingUser) {
        res.sendStatus(403);
        return;
    } else {
        const newUser = await userDao.createUser(user);
        // req.session['profile'] = newUser;
        res.json(newUser);
    }
}

const profile = (req, res) => {
    const profile = req.session['profile'];

    if (profile) {
        res.json(profile);
    } else {
        res.sendStatus(503);
    }
}

const login = async (req, res) => {
    const credentials = req.body;
    const profile = await userDao.findUserByCredentials(credentials.email, credentials.password);
    
    if (profile) {
        req.session['profile'] = profile;
        res.json(profile);
        req.session.save();
        return;
    }

    res.sendStatus(403)
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}


export default authController;
