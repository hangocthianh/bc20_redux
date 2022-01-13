import React from 'react'
import QuanCuoc from './QuanCuoc'
import {useSelector} from 'react-redux'

export default function DanhSachCuoc() {

    const danhSachCuoc = useSelector(state=>state.gameBauCuaReducer.danhSachCuoc);
    console.log(danhSachCuoc);

    const renderDanhSachCuoc = ()=>{
        return danhSachCuoc.map((quanCuoc,index)=>{
            return (
                <div className="col-4" key={index}>
                    <QuanCuoc  quanCuoc={quanCuoc}/>
            </div>
            )
        })
    }

    return (
        <div className="row mt-3">
            {renderDanhSachCuoc()}
        </div>
    )
}
