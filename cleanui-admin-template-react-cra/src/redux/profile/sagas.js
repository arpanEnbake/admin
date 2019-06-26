// import { all, takeEvery, put, call } from 'redux-saga/effects'
// import { Auth } from 'aws-amplify';
// import { notification } from 'antd'
// import actions from './actions'
//
// export function* LOGIN({ payload }) {
//   const { email, password } = payload
//   yield put({
//     type: 'profile/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   })
//   const success = yield call(login, email, password)
//   if (success) {
//     notification.success({
//       message: 'Logged In',
//       description: 'You have successfully logged into your Personal Brand Management console.',
//     })
//     yield put({
//       type: 'profile/LOAD_CURRENT_ACCOUNT',
//     })
//   }
// }
//
// export function* LOAD_CURRENT_PROFILE() {
//   yield put({
//     type: 'profile/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   })
//
//   const profile = yield Auth.currentAuthenticatedUser()
//
//   if (profile) {
//     yield put({
//       type: 'profile/SET_STATE',
//       payload: {
//         avatar: null,
//         role: 'admin',
//         authorized: true,
//       },
//     })
//   }
//   yield put({
//     type: 'profile/SET_STATE',
//     payload: {
//       loading: false,
//     },
//   })
// }
//
// export default function* rootSaga() {
//   yield all([
//     takeEvery(actions.LOAD_CURRENT_PROFILE, LOAD_CURRENT_PROFILE),
//     LOAD_CURRENT_PROFILE(), // run once on app load to check profile auth
//   ])
// }
