import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actChonGhe} from "../../store/actions/veXemPhim";

class HangGhe extends Component {
    renderGhe=()=>{
        return this.props.hangGhe.danhSachGhe.map((ghe,index)=>{
            let cssGheDaDat='';
            let disabled = false;
            if(ghe.daDat){
                cssGheDaDat='gheDuocChon';
                disabled = true;
            }

            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat !==-1){
                cssGheDangDat='gheDangChon'
            }

            return<button onClick={()=>{
                this.props.chonGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>{ghe.soGhe}</button>
        })
    }
    renderSoHang = ()=>{
        return this.props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className="rowNumber">{hang.soGhe}</button>
        })
    }
    renderHangGhe=()=>{
        if(this.props.soHangGhe ===0){
            return <div>
                {this.props.hangGhe.hang}{this.renderSoHang()}
            </div>
        } else{
            return <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
        </div>
        }
    }
    render() {
        return (
            <div className="text-light text-center font-weight-bold h3">
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        danhSachGheDangDat: state.bookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        chonGhe: (ghe)=>{
            dispatch(actChonGhe(ghe))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(HangGhe)