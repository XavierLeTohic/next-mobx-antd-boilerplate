import { Component } from 'react'
import { Provider } from 'mobx-react'
import { observer } from 'mobx-react';


import initUserStore from '../store/user'
import Page from '../components/Page'

@observer
export default class Index extends Component {

  constructor (props) {
    super(props)
    this.user = initUserStore(props.isServer)
  }

  render () {
    return (
      <Provider user={this.user}>
        <Page>
          <div>
            Bonjour {this.user.firstname} !
          </div>
        </Page>
      </Provider>
    )
  }
}
