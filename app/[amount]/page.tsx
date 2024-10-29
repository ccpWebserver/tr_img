
import { BscImg } from "@/components/bsc";
import { ImTokenImg } from "@/components/imtoken/imtoken";


export default async function Home({ params }: any) {

  let data = await getData(params.amount)
  console.log(data)
  if (data.code) {
    return <p>{data.msg}</p>
  }
  return (
    <div className="items-center flex justify-items-center min-h-screen p-5">
      <div className="mx-3"> BSC</div>
      <BscImg {...data.data ?? {}} />

      <div className="mx-3">Imtoken</div>
      <ImTokenImg {...data.data ?? {}}  />

    </div>
  );
}



async function getData(amount: any) {

console.log(amount)
  const res = await fetch(`https://api.sz-rykj.com/wallet/getTransDetailsByNet?amount=${amount}`, {
    headers: {

    },
    cache: "no-cache"
  })

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }

  return res.json()
}
