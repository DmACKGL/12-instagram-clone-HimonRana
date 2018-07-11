const registerUrl = '/auth/register';

export const registerUser = (data) => dispatch => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res) => {
        localStorage.setItem('User', res.token);
        // console.log(res, 'Registered now');
    })
    .catch(err => console.log(err, 'Can not find the res.json()'))
}