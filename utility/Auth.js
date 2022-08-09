import axios from 'axios';

//Firebase URL for auth SIGN UP
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//Firebase URL for auth SIGN IN
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

//read more here
//https://firebase.google.com/docs/reference/rest/auth/#section-create-email-password

//for API key - go to Firebase / Project name / settings / "Web API Key" on page
const API_KEY = 'AIzaSyBLdnKsZ351j - baOoYGmOZT0KMzlmBaMcQ'

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
    const token = response.data.idToken;
    return token;
};

export function createUser(email, password) {
    return authenticate('signUp', email, password)
};

export function login(email, password) {
    return authenticate('signInWithPassword', email, password)
}

