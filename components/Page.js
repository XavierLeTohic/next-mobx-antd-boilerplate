import React from 'react'
import Head from 'next/head';
import { inject, observer } from 'mobx-react'
import stylesheet from '../static/antd.less';

@inject('user') @observer
export default class Page extends React.Component {

  render () {
    return (
      <div>
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta httpEquiv="Cache-Control" content="no-siteapp" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <title>
                Nestor
            </title>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        {this.props.children}
      </div>
    )
  }
}
