import tokenService from '../services/tokenService';
const BASE_URL = '/api/posts/';

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
          'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }, {mode: "cors"})
    .then(res => res.json())
}

export function create(post) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(post)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }, {mode: "cors"})
    .then(res => res.json());
}

export function update(post) {
    return fetch(`${BASE_URL}${post._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(post)
    }, {mode: "cors"})
    .then(res => res.json());
}
