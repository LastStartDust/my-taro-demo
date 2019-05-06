import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'

const INIT_STEP = 1

@connect(
  ({counter}) => ({
    counter
  }), 
  (dispatch) => ({
    add(step = INIT_STEP) {
      dispatch(add(step))
    },
    dec(step = INIT_STEP) {
      dispatch(minus(step))
    },
    asyncAdd(step = INIT_STEP) {
      dispatch(asyncAdd(step))
    }
  })
)

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

  myAdd = () => {
    const { add } = this.props
    add(5)
  }
  myDec = () => {
    const { dec } = this.props
    dec(2)
  }
  myAsyncAdd = () => {
    const { asyncAdd } = this.props
    asyncAdd(1)
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
        <View>
          <Button className='add_btn' onClick={this.myAdd.bind(this)}>+</Button>
          <Button className='dec_btn' onClick={this.myDec.bind(this)}>-</Button>
          <Button className='dec_btn' onClick={this.myAsyncAdd.bind(this)}>async</Button>
          <View>{this.props.counter.num}</View>
        </View>
      </View>
    )
  }
}
