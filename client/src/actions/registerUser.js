const registerUrl = '/auth/register';

export const registerUser = (recivedata) => dispatch => {
    return fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(recivedata)
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res);
    })
    .catch(err => console.log(err, 'Can not find the res.json()'))
}