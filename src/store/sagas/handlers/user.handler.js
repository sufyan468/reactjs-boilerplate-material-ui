import { put, retry } from 'redux-saga/effects';
import { setUser, setOTPSent, setOtpVerified } from '../../slices/user.slice';
import { requestSignin, generateOtp, verifyOtp } from '../requests/user.request';

export function* handleSignin(action) {
    try {
        console.log(action.payload);
        const response = yield retry(0, 0, requestSignin, action.payload);
        const { data } = response;

        const userData = data.user;
        // Token Save to local Storage

        const access = JSON.stringify(data.tokens.access);
        const refresh = JSON.stringify(data.tokens.refresh);

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        yield put(setUser({ userData }));
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}

export function* fetchOTP(action) {
    try {
        console.log(action.payload);
        const accessTokenObj = JSON.parse(localStorage.getItem('accessToken'));
        console.log(accessTokenObj);
        const response = yield retry(0, 0, generateOtp, accessTokenObj.token);

        const { data } = response;

        console.log(data.tokens.otp);
        // Otp Token Save to local Storage

        const otp = JSON.stringify(data.tokens.otp);
        localStorage.setItem('otpToken', otp);

        yield put(setOTPSent({ otpSent: true }));
    } catch (error) {
        console.log(error);
    }
}

export function* handleVerifyOtp(action) {
    try {
        console.log(`handleVerifyOtp:: `, action.payload);
        const accessTokenObj = JSON.parse(localStorage.getItem('accessToken'));
        const otpTokenObj = JSON.parse(localStorage.getItem('otpToken'));
        action.payload.accessToken = accessTokenObj.token;
        action.payload.otpToken = otpTokenObj.token;
        console.log('access:', action.payload.accessToken);
        console.log('otpToken:', action.payload.otpToken);
        const response = yield retry(0, 0, verifyOtp, action.payload);

        yield put(setOtpVerified({ isOtpVerified: true }));
    } catch (error) {
        yield put(setOtpVerified({ isOtpVerified: false }));
        console.log(error);
    }
}
