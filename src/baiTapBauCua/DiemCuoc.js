import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {actChoiLai} from "./modules/actions.js"

export default function DiemCuoc(props) {

    const tongDiem = useSelector(state=>state.gameBauCuaReducer.tongDiem);
    const dispatch = useDispatch();

    return (
        <div className="text-center display-4 diemCuoc">
            <img src="./img/image-bau-cua/Logo.png" className="img w-50 pt-5" />
            <div className="pt-3">
                <span className="p-3  text-white bg-danger rounded">Tiền thưởng: <span className="text-warning">${tongDiem.toLocaleString()}</span></span>
            </div>
            <div className="pt-4">
                <button onClick={()=>{
                    dispatch(actChoiLai())
                }} className="btn btn-success">Chơi lại</button>
            </div>
        </div>
    )
}
