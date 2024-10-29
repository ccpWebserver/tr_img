"use client";
import styled from "styled-components"
import { LabelComponents } from "./label"
import { BlackMsg, imTokenDate } from "../type";

export const ImTokenImg = (props: BlackMsg) => {

    // let props = {
    //     amount: "-5,356",
    //     coin: "USDT"
    // }
    return <BscImgStyle>
        <div className="bar">
            <img className="w-[9px]" src="/imtoken/1@2x.png" alt="" />
            <p>Transaction details</p>
            <img className="w-[11px]" src="/imtoken/3@2x.png" alt="" />
        </div>

        <div className="status mt-[34px] mb-[26px] flex w-full flex-col items-center justify-center">
            <div className="w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#39C073]">
                <img className=" w-[17px] block" src="/bsc/3@2x.png" alt="" />
            </div>
            <p className="text-[#39C073] text-[12px]  font-semibold">Successful</p>
            <p className="text-[9px] text-[#75767B]">{imTokenDate(props.timestamp * 1000)}</p>
        </div>
        <div className="wap px-[8px]">

            <div className=" rounded-[8px] bg-white p-[20px]">
                <LabelComponents label="Details" msg="Send" />
                <div className="flex mt-[15px] justify-end">
                    <div className=" w-[217px] ">
                        <p className="text-[#000] text-[13px] flex justify-between items-center">
                            <p>-{props.realValue} USDT</p>
                            <p className="w-[24px] h-[24px] rounded-full">
                                <img src="/imtoken/tether-usdt-logo.png" alt="" />
                            </p>
                        </p>
                        <div className="h-[1px] my-[10px] font-medium bg-[#f1f1f1] w-[217px]"></div>
                        <p className="text-[#75767B] text-[13px]">Ethereum</p>

                        <div className="h-[1px] my-[10px] font-medium w-[217px]"></div>
                    </div>
                </div>
                <LabelComponents label="Miner Fee" msg={`- ${props.fee.toFixed(6)} ETH`} />
            </div>

            <div className="my-[15px] rounded-[8px] bg-white p-[20px]">
                <LabelComponents label="From" msg={props.from}/>
                <div className="flex justify-end">
                    <div className="h-[1px] bg-[#f1f1f1] w-[217px] my-[15px]"></div>
                </div>
                <LabelComponents label="To" msg={props.to} />
            </div>
            <div className=" rounded-[8px] bg-white p-[20px]">
                <LabelComponents label="TxID" msg={props.tx_hash} />

                <div className="flex mt-[15px] justify-end">
                    <div className=" w-[217px] ">
                        <p className="text-[#75767B] flex justify-between items-center text-[11px]">See details
                            <img src="/imtoken/5.png" className=" block w-[15px]" alt="" />
                        </p>
                    </div>

                </div>
            </div>

        </div>

    </BscImgStyle>
}


const BscImgStyle = styled.div`
padding-top: 62px;
font-family: "PingFang SC";
p{
    font-family: "PingFang SC";
}

.bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 17px;
    img{
        display: block;
    }
    p{

        line-height: 1;
        font-family: Poppins;
        font-weight: 600;
        font-size: 15px;
        color: #000000;
    }
}
background-color: #f1f1f1;
width: 350px;
height: 758px;
    
`