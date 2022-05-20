import * as userDao from "../database/users/user-dao.js";

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const findAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers();
    res.json(users);
}

const findUserById = async (req, res) => {
    const uid = req.params.uid;
    const user = await userDao.findUserById(uid);

    if (user) {
        res.json(user);
    }
    else 
    {
        res.sendStatus(404);
    }

}

const createUser = async (req, res) => {
    const user = req.body;
    const dob = new Date(req.body['DOB']);
    req.body['DOB'] = dob;

    const insertedUser = await userDao.createUser(user);
    res.json(insertedUser);

}

const deleteUser = async (req, res) => {
    const uid = req.params['uid'];
    const status = await userDao.deleteUser(uid);
    res.sendStatus(200);
}

const updateUser = async (req, res) => {
    const uid = req.params['uid'];
    const user = req.body;
    const status = await userDao.updateUser(uid, user);
    res.json(status);
}

export default userController;


