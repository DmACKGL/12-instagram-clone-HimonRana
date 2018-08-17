const registerUrl = '/auth/register';
const errors = {};

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
        console.log(res.data);
    })
    .catch(err => console.log({errors: err.response.data}))
}