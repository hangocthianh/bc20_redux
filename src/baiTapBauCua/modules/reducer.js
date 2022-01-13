import * as ActionType from "./constants.js"
const initialState = {
    danhSachCuoc: [
        { ma: 'ga', hinhAnh: './img/image-bau-cua/ga.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/image-bau-cua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/image-bau-cua/ca.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/image-bau-cua/tom.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/image-bau-cua/nai.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/image-bau-cua/cua.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    danhSachXucXac: [
        { ma: 'tom', hinhAnh: './img/image-bau-cua/tom.png' },
        { ma: 'cua', hinhAnh: './img/image-bau-cua/cua.png' },
        { ma: 'nai', hinhAnh: './img/image-bau-cua/nai.png' },
    ],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DAT_CUOC: {
            const danhSachCuocUpdate = [ ...state.danhSachCuoc];
            const index = danhSachCuocUpdate.findIndex(quanCuoc => quanCuoc.ma === action.quanCuoc.ma);
            if (index !== -1) {
                if (action.tangGiam) {
                    if(state.tongDiem > 0){
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate;
            return {...state};
        }
        case ActionType.PLAY_GAME:{
            const danhSachXucXacNgauNhien =[];
            for(let i=0; i<3;i++){
                let soNgauNhien = Math.floor(Math.random()*6);
                let xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
                danhSachXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.danhSachXucXac = danhSachXucXacNgauNhien;
            // xử lý cộng tiền
            danhSachXucXacNgauNhien.forEach((xucXac,index)=>{
                const indexQuanCuoc = state.danhSachCuoc.findIndex(quanCuoc=>quanCuoc.ma === xucXac.ma);
                if(indexQuanCuoc!==-1){
                    state.tongDiem += state.danhSachCuoc[indexQuanCuoc].diemCuoc;
                }
            })
            // xử lý hoàn tiền
            state.danhSachCuoc.forEach((quanCuoc, index)=>{
                const indexXucXac = danhSachXucXacNgauNhien.findIndex(xucXac=>xucXac.ma === quanCuoc.ma);
                if(indexXucXac!==-1){
                    state.tongDiem += quanCuoc.diemCuoc;
                }
            })
            // xử lý trả lại diemCuoc 0
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc)=>{
                return {...quanCuoc, diemCuoc: 0};
            })
            return {...state};
        }
        case ActionType.CHOI_LAI:{
            state.danhSachCuoc = state.danhSachCuoc.map((quanCuoc)=>{
                return {...quanCuoc, diemCuoc: 0};
            })
            state.tongDiem=1000;
            return {...state};
        }
        default:
            return { ...state }
    }
}
