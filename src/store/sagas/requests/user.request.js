import axios from 'axios';
import { API_CONSTANTS } from '../../../config/config';
const { API_URL } = API_CONSTANTS;

export function requestSignin(data) {
    return axios.post(`${API_URL}v1/auth/login`, data);
}

export function generateOtp(accessToken) {
    var config = {
        method: 'post',
        url: `${API_URL}v1/auth/generate-otp`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        data: {},
    };

    return axios(config);
}

export function verifyOtp(data) {
    console.log(`otp data:: `, data);
    return axios.post(
        `${API_URL}v1/auth/verify-otp?token=${data.otpToken}`,
        {
            otp: data.otp,
        },
        {
            headers: {
                Authorization: `Bearer ${data.accessToken}`,
            },
        },
    );
}
