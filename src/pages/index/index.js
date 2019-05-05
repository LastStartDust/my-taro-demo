import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    // 定义需要引入的第三方组件
    usingComponents: {
      'i-button': '../../components/iview/button/index' // 书写第三方组件的相对路径
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClickView = (e) => {
    e.stopPropagation()
    console.log('clcik view btn')
  }
  onClickTui = (e) => {
    e.stopPropagation()
    console.log('clcik taro-ui btn')
  }

  render () {
    return (
      <View className='index'>
        <View>
        <Text>hello</Text>
        </View>
        <View className='btn-item'>
          <AtButton type='primary' size='small' onClick={this.onClickTui}></AtButton>
          <AtButton circle size='small' loading></AtButton>
        </View>
        <View>
          <i-button type="primary" onClick={this.onClickView}>这是一个按钮</i-button>
        </View>
      </View>
    )
  }
}
