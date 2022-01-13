import React from 'react';
import { useDispatch } from "react-redux";
import { actDatCuoc } from "./modules/actions.js"
import { useSpring, animated } from "react-spring"

export default function QuanCuoc(props) {

    const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.8 },
            reset: true,
        }
    })
    const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
        return {
            to: { scale: 1 },
            from: { scale: 0.8 },
            reset: true,
        }
    })
    const dispatch = useDispatch();
    const { quanCuoc } = props;

    return (
        <div className="text-center m-auto pt-3 px-2">
            <img src={quanCuoc.hinhAnh} className="img-fluid w-100" />
            <div className="bg-light rounded py-2 mt-1">
                <animated.button style={{
                    transform: propsUseSpringIncrease.scale
                        .to(scale => `scale(${scale})`)
                }} onClick={() => {
                    console.log(propsUseSpringIncrease.scale);
                    
                    setIncrease({ scale: 1 , reset:true})
                    console.log(propsUseSpringIncrease.reset);

                    dispatch(actDatCuoc(quanCuoc, true));
                }} className="btn btn-danger">
                    <i className="bi bi-plus-lg"></i>
                </animated.button>
                <span className="p-2 text-success">{quanCuoc.diemCuoc}</span>
                <animated.button style={{
                    transform: propsUseSpringDecrease.scale
                        .to(scale => `scale(${scale})`)
                }} onClick={() => {
                    setDecrease({ scale: 1 , reset:true})
                    dispatch(actDatCuoc(quanCuoc, false));
                }} className="btn btn-danger">
                    <i class="bi bi-dash-lg"></i>
                </animated.button>
            </div>

        </div>
    )
}
