import * as ActionType from "../contains/gameOanTuTi"
const actChonKeoBuaBao =(maCuoc)=>{
    return{
        type: ActionType.CHON_KEO_BUA_BAO,
        payload: maCuoc,
    }
}
const actPlayGame =()=>{
    return{
        type: ActionType.RAN_DOM,
    }
}
const actEndGame =()=>{
    return{
        type: ActionType.END_GAME,
    }
}

export {actChonKeoBuaBao, actPlayGame, actEndGame};