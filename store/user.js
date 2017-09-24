import { action, observable } from 'mobx'

let store = null;

class UserStore {
    @observable firstname = "John"
}

export default function initStore (isServer) {
  if (typeof window === 'undefined') {
    return new UserStore(isServer)
  } else {
    if (store === null) {
      store = new UserStore(isServer)
    }
    return store
  }
}

