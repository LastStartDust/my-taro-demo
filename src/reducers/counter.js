//处理函数counter

//导入action常量
import { ADD, MINUS } from '../constants/counter'

//初始状态
const INIT_STATE = {
  num: 0
}

//处理函数
function counter (state = INIT_STATE, action) {
  let step
  if (action.step !== undefined ) {
    step = action.step
  } else {
    step = 1
  }

  console.log(step)
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + step
      }
    case MINUS: 
      return {
        ...state, //?
        num: state.num - step
      }
    default:
      return state
  }
}

export default counter