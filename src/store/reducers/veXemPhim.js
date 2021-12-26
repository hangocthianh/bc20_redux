import * as ActionType from "../contains/veXemPhim";

const stateDefault = {
    danhSachGheDangDat:[],
}

const bookingTicketReducer = (state= stateDefault, action)=>{
    switch(action.type){
        case ActionType.CHON_GHE:{
            let danhSachGheDangDatUpdate = [... state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.payload.soGhe);
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index, 1);
            } else{
                danhSachGheDangDatUpdate.push(action.payload)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case ActionType.HUY_GHE:{
            let danhSachGheDangDatUpdate = [... state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.payload);
            if(index!==-1){
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return{...state}
    }
}
export default bookingTicketReducer;