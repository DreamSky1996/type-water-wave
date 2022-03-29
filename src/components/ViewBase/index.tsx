import React from "react";
import "./view-base.scss";
import Messages from "../Messages";
import Header from "../Header";
import WaterWave  from 'react-water-wave';
import waveImg from '../../assets/images/water-wave-background.jpg';
interface IViewBaseProps {
    children: React.ReactNode;
}

function ViewBase({ children }: IViewBaseProps) {

    return (
        <div className="view-base-root">
            <WaterWave 
                style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
                imageUrl={waveImg}
            >
                {
                    () =>(
                        <>
                        {/* <Messages /> */}
                        {/* <Header/> */}
                        <div>
                            {children}
                        </div>
                        </>
                    )
                }
            </WaterWave>
        </div>
    );
}

export default ViewBase;
