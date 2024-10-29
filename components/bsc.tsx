"use client";
import styled from "styled-components"
import { BlackMsg, bscTokenDate } from "./type";

export const BscImg = (props: BlackMsg) => {

    // let props = {
    //     amount: "-5,356",
    //     coin: "USDT"
    // }
    return <BscImgStyle>
        <div className="bar">
            <img className="w-[11px]" src="/bsc/1@2x.png" alt="" />
            <p>Withdrawal Details</p>
            <img className="w-[15px]" src="/bsc/2@2x.png" alt="" />
        </div>
        <div className="amount mt-[44px] mb-[17px] text-black text-center text-[23px]">
            <span>{props.realValue}</span>
            <span className="ml-[13px]">USDT</span>
        </div>
        <div className="status flex justify-center items-center">
            <div className="w-[14px] h-[14px] rounded-full flex justify-center items-center bg-[#63B785]">
                <img className=" w-[11px] block" src="/bsc/3@2x.png" alt="" />
            </div>
            <p className="text-[#63B785] text-[12px] ml-[7px] font-semibold">Completed</p>
        </div>
        <div className="tis  mt-[14px]">
            <p className="text-[#98989A] text-[12px] text-center">Crypto transferred out of Binance.Please contact the </p>
            <p className="text-[#98989A] text-[12px] text-center">recipient platform for your transaction receipt.</p>
            <p className="text-[#D1AA45] text-[12px] text-center">Why hasn’t my withdrawal arrived?</p>
        </div>
        <div className="bg-[#626262] h-[1px] mt-[24px] mb-[30px]"></div>

        <div className="msg">
            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">
                    Network
                </p>
                <div className="net w-[30px] text-[11px] text-center leading-[18px] text-[#DDAE42] h-[18px] bg-[#FDF8E5]">ETH</div>
            </div>

            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">Address</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">{props.from}</div>
            </div>

            <div className="flex  mb-[19px] justify-between">
                <p className="msg_title">Txid</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">{props.to}</div>
            </div>

            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">Withdrawal Amount</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">{props.realValue} USDT</div>
            </div>

            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">Network fee</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">8 USDT</div>
            </div>

            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">Withdrawal Wallet</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">Spot Wallet</div>
            </div>

            <div className="flex mb-[19px] justify-between">
                <p className="msg_title">Date</p>
                <div className=" text-[12px] text-end leading-[18px] text-[#000]">{bscTokenDate(props.timestamp * 1000)}</div>
            </div>
        </div>
        <div className="btns px-[15px] flex justify-between">
            <div className="w-[153px] text-[14px] h-[44px] font-bold flex justify-center items-center text-[#000] rounded-[8px] bg-[#EBECF0]">
                Scam Report
            </div>
            <div className="w-[153px] text-[14px] h-[44px] font-bold flex justify-center items-center text-[#000] rounded-[8px] bg-[#EBECF0]">
                Save Address
            </div>
        </div>
    </BscImgStyle>
}


const BscImgStyle = styled.div`
padding-top: 62px;
font-family: Arial;
.msg{
    padding:  0 18px 0 18px;
}

.text-end{
    width: 156px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.msg_title{
    font-family: Arial;
    font-weight: 400;
    font-size: 12px;
    color: #98989A;
}
.tis{
    font-family: Arial;
    font-weight: 400;
    line-height: 1.4;
}
.amount{
    font-family: Poppins;

    font-weight: 600;
    font-size: 23px;
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
background-color: #fff;
width: 350px;
height: 758px;
    
`