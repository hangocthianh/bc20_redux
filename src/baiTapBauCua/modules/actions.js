import * as ActionType from "./constants.js";

const actDatCuoc = (quanCuoc, tangGiam)=>{
    return{
        type: ActionType.DAT_CUOC,
        quanCuoc,
        tangGiam,
    }
}
const actPlayGame=()=>{
    return{
        type:ActionType.PLAY_GAME,
    }
}
const actChoiLai=()=>{
    return{
        type:ActionType.CHOI_LAI,
    }
}

export {actDatCuoc, actPlayGame, actChoiLai};