import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import { inject, observer } from 'mobx-react'
import Clock from './Clock'
import stylesheet from '../static/antd.less';

@inject('store') @observer
class Page extends React.Component {
  componentDidMount () {
    this.props.store.start()
  }

  componentWillUnmount () {
    this.props.store.stop()
  }

  render () {
    return (
      <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Cache-Control" content="no-siteapp" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <title>
                Nestor prototype
            </title>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.store.lastUpdate} light={this.props.store.light} />
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
}

export default Page
