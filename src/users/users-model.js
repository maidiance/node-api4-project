module.exports = {
    get,
    insert,
};

function get() {
    return [
        {
            username: 'bobSmith',
            password: 'fakePassword',
        },
        {
            username: 'AstroCat',
            password: '@testPassword',
        },
        {
            username: 'squishy',
            password: 'notSecure!',
        },
    ];
}

function insert(user) {
    return user;
}