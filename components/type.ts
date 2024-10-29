import moment, { Moment } from "moment";

export interface BlackMsg {
    tx_hash: string;
    value: number;
    realValue: number;
    from: string;
    from_account_address: string;
    to: string;
    to_account_address: string;
    coin_name: string;
    contract_address: string;
    chain: string;
    block: number;
    blockTransCount: number;
    fee: number;
    change: number;
    Remark: string;
    timestamp: number;
  }


  export const bscTokenDate = (date?: number | string | Date | Moment) => {
    if (!date) return "--"
    return moment(date).format('YYYY-MM-DD hh:mm:ss')
  }
  

export const imTokenDate = (date?: number | string | Date | Moment) => {
    if (!date) return "--"
    return moment(date).format("MMMM D, YYYY h:mm A")
  }
  