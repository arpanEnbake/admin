import { all, takeEvery, put, call } from 'redux-saga/effects'
import { Auth } from 'aws-amplify';
import { notification } from 'antd'
import { login, logout } from 'services/user'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(login, email, password)
  if (success) {
    notification.success({
      message: 'Logged In',
      description: 'You have successfully logged into your Personal Brand Management console.',
    })
    yield put({
      type: 'user/LOAD_CURRENT_ACCOUNT',
    })
  }
}

export function* LOAD_CURRENT_ACCOUNT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })

  const user = yield Auth.currentAuthenticatedUser()

  if (user) {
    const { sub, email, name } = user.attributes
    yield put({
      type: 'user/SET_STATE',
      payload: {
        sub,
        name,
        email,
        avatar: null,
        role: 'admin',
        authorized: true,
      },
    })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield call(logout)
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
