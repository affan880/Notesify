import axios from 'axios';

const API_KEY = 'AIzaSyCc2_hQAHSfDMpZrW3Gy17haZHEEsgo_80';
// C:\Users\syeda\Desktop\React native\rn\11 - User Authentication
async function createUser(data: any) {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
            email: data.email,
            password: data.password,
            returnSecureToken: true
    }
    )
}