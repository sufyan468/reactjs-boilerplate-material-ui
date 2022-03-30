import { takeLatest } from 'redux-saga/effects';
import { handleSignin, fetchOTP, handleVerifyOtp } from './handlers/user.handler';
import { signinUser, generateOTP, verifyOtp } from '../slices/user.slice';

export function* watcherSaga() {
    yield takeLatest(signinUser.type, handleSignin);
    yield takeLatest(generateOTP.type, fetchOTP);
    yield takeLatest(verifyOtp.type, handleVerifyOtp);
}
