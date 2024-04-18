const UserControler = require("./controllers/userController");

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserControler.listUsers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserControler.getUserByID,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UserControler.createUser,
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: UserControler.uptadeUser,
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: UserControler.deleteUser,
    },
]