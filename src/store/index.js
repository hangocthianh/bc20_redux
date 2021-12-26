import {combineReducers} from "redux";
import gameOanTuTiReducer from "./reducers/gameOanTuTi";
import bookingTicketReducer from "./reducers/veXemPhim"
const rootReducer = combineReducers({
    gameOanTuTiReducer,
    bookingTicketReducer,
})

export default rootReducer;