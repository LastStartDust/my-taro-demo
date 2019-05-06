//通知
import {
  ADD,
  MINUS
} from '../constants/counter'

const INIT_STEP = 1

//TODO step 任意值

const add = (step) => {
  return {
    type: ADD,
    step
  }
}

const minus  = (step) => {
  return {
    type: MINUS,
    step
  }
}

//异步的
const asyncAdd = (step) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(step))
    }, 2000);
  }
}

export {
  add,
  minus,
  asyncAdd
}
