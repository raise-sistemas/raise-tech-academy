// import {getName} from './getName.js'

export function startSession (email) {
  sessionStorage.setItem('currentUser', email)
}

