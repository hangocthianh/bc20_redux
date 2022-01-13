import {combineReducers} from "redux";
import gameOanTuTiReducer from "./reducers/gameOanTuTi";
import bookingTicketReducer from "./reducers/veXemPhim";
import gameBauCuaReducer from '../baiTapBauCua/modules/reducer.js'

const rootReducer = combineReducers({
    gameOanTuTiReducer,
    bookingTicketReducer,
    gameBauCuaReducer,
})

export default rootReducer;