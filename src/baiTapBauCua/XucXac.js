import React from 'react';
import { useSpring, animated } from "react-spring"

export default function XucXac(props) {
    const [propsLacXucXac, set] = useSpring(() => {
        return {
            to: {
                xyz: [360, 360, 360]
            },
            from: {
                xyz: [0, 0, 0]
            },
            config: { duration: 250 },

        }
    })

    set({ xyz: [360, 360, 360], reset: true });

    const { xucXac } = props;
    return (
        <div className="scene ml-4">
            <animated.div class="cube" style={{ transform: propsLacXucXac.xyz.to((x, y, z) => `translateZ(-40px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`) }}>
                <img className="imgXucXac cube__face front" src={xucXac.hinhAnh} />
                <img className="imgXucXac cube__face back" src="./img/image-bau-cua/ca.png" />

                <img className="imgXucXac cube__face left" src="/img/image-bau-cua/cua.png" />

                <img className="imgXucXac cube__face right" src="/img/image-bau-cua/bau.png" />

                <img className="imgXucXac cube__face top" src="/img/image-bau-cua/tom.png" />

                <img className="imgXucXac cube__face bottom" src="/img/image-bau-cua/tom.png" />

                {/* <div className="cube__face front">
                    <img className="imgXucXac" src={xucXac.hinhAnh} />
                </div>
                <div className="cube__face back">
                    <img className="img-fluid imgXucXac" src="./img/image-bau-cua/ca.png" />
                </div>
                <div className="cube__face left">
                    <img className="img-fluid imgXucXac" src="/img/image-bau-cua/cua.png" />
                </div>
                <div className="cube__face right">
                    <img className="img-fluid imgXucXac" src="/img/image-bau-cua/bau.png" />

                </div>
                <div className="cube__face top">
                    <img className="img-fluid imgXucXac" src="/img/image-bau-cua/tom.png" />
                </div>
                <div className="cube__face bottom">
                    <img className="img-fluid imgXucXac" src="/img/image-bau-cua/tom.png" />
                </div> */}
            </animated.div>
        </div>
    )
}
