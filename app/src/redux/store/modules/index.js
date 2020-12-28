import {combineReducers} from 'redux'
import counter from './counter'
export default combineReducers(
    {
        counter
    }
)
//이렇게 합치게 되면 루트 리듀서의 초기값은 다음 구조로 됨
// {
//     counter: {
//       number: 0,
//     },
//     // ... 다른 리듀서에서 사용하는 초깃값들
//   }