import React, { Component } from 'react';
import { connect } from 'react-redux'
import {actHuyGhe} from '../../store/actions/veXemPhim'
class ThongTinGhe extends Component {
    render() {
        return (
            <div className="text-light">
                <div>
                    <button className="ghe"></button><span className="h4">ghế chưa đặt</span>
                </div>
                <div>
                    <button className="gheDangChon"></button><span className="h4">ghế đang đặt</span>
                </div>
                <div>
                    <button className="gheDuocChon"></button><span className="h4">ghế đã đặt</span>
                </div>
                <div className="mt-3">
                    <table className="table text-light" border="3">
                        <thead className="h3">
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {
                                this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{gheDangDat.soGhe}</td>
                                            <td>{gheDangDat.gia}</td>
                                            <td><button className="btn btn-danger" onClick={()=>{
                                                this.props.huyGhe(gheDangDat.soGhe)
                                            }}>Huỷ</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <tfoot className="h3 text-light">
                            <tr>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien+=gheDangDat.gia
                                },0)}</td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        huyGhe:(soGhe)=>{
            dispatch(actHuyGhe(soGhe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe);