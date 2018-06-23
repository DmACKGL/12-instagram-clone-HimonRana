const loginUrl = '/auth/login';

export const loginUser = (User) => dispatch => {
    return fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(User)
    })
    .then(res => res.json())
    .then((res) => {
        localStorage.setItem('User', res.token);
        console.log(res, 'Logged in now');
    })
    .catch(err => 
        console.log(err, 'Can not find the res.json()'))
}