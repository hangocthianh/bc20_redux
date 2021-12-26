import * as ActionType from "../contains/veXemPhim";
const actChonGhe =(ghe)=>{
    return{
        type: ActionType.CHON_GHE,
        payload: ghe,
    }
}
const actHuyGhe = (soGhe)=>{
    return{
        type: ActionType.HUY_GHE,
        payload: soGhe,
    }
}

export {actChonGhe, actHuyGhe};