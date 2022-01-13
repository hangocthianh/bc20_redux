import React from 'react'
import XucXac from './XucXac'
import { useSelector, useDispatch } from "react-redux"
import { actPlayGame } from "./modules/actions.js"

export default function DanhSachXucXac(props) {
    const danhSachXucXac = useSelector(state => state.gameBauCuaReducer.danhSachXucXac);
    const dispatch = useDispatch();

    return (
        <div className="pt-5 mt-5">
            <div className="m-auto bg-white rounded-circle danhSachXucXac">
                <div className="row justify-content-center pt-5">
                    <div className="col-6">
                        <XucXac xucXac={danhSachXucXac[0]} />
                    </div>
                </div>
                <div className="row mt-5 pt-3">
                    <div className="col-6 pt-5">
                        <XucXac xucXac={danhSachXucXac[1]} />
                    </div>
                    <div className="col-6 pt-5">
                        <XucXac xucXac={danhSachXucXac[2]} />
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button onClick={() => {
                    dispatch(actPlayGame());
                }} className="btn btn-danger mt-3 px-4 btnXoc">Xốc</button>
            </div>

        </div>
    )
}
