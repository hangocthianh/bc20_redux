import React from 'react';
import "./style.css";
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'

export default function BaiTapBauCua() {
    return (
        <div id="BaiTapBauCua" className="container-fluid">
            <DiemCuoc/>
            <div className="row mx-2">
                <div className="col-12 col-md-8">
                    <DanhSachCuoc/>
                </div>
                <div className="col-12 col-md-4">
                    <DanhSachXucXac/>
                </div>
            </div>
        </div>
    )
}
