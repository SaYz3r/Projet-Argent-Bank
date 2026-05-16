const BASE_URL = 'http://localhost:3001/api/v1'

export async function login(email, password) {
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    return data
}

export async function getProfile(token) {
    const response = await fetch(`${BASE_URL}/user/profile`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    const data = await response.json()
    return data
}

export async function updateProfile(token, firstName, lastName) {
    const response = await fetch(`${BASE_URL}/user/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
    })
    const data = await response.json()
    return data
}
