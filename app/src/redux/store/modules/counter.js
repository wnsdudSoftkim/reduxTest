//액션타입 정의
const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'
//액션 생성함수 정의
export const increment = () => ({type:INCREMENT})
export const decrement = () => ({type:DECREMENT})
const initialState= {
    number:0
}
export default function counter(state=initialState,action) {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                number:state.number+1
            }
        case DECREMENT:
            return {
                ...state,
                number:state.number-1
            }
        default:
            return state
    }
}