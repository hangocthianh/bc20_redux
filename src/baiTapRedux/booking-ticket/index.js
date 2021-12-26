import React, { Component } from 'react';
import HangGhe from './hangGhe';
import './style.css'
import ThongTinGhe from './thongTinGhe';
import danhSachGhe from './danhSachGhe.json';

export default class BookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            )
        })
    }


    render() {
        return (
            <div className="bookingTicket">
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-7">
                            <h2 className="h1 font-weight-bold text-warning text-center">ĐẶT VÉ XEM PHIM MOVIECYBER.VN</h2>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="screen">
                                    <h3>Màn hình</h3>
                                </div>
                                {this.renderHangGhe()}
                            </div>


                        </div>

                        <div className="col-5">
                            <h2 className="h2 font-weight-bold text-light">DANH SÁCH GHẾ ĐÃ CHỌN</h2>
                            <ThongTinGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
