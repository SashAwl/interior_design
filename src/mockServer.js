import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const users = [
    { username: 'user1', password: 'password1', token: 'token1' },
    { username: 'user2', password: 'password2', token: 'token2' }
];

mock.onPost('/login').reply(req => {
    const { username, password } = JSON.parse(req.data);
    const user = users.find(item => item.username === username && item.password === password);

    if (user) {
        return [200, { token: user.token }];
    } else {
        return [401, { message: 'Invalid user or password' }];
    }
});

export default mock;

