type Props = {
    label: string,
    msg: string
}
export const LabelComponents = ({ label, msg }: Props) => {
    return <div className="flex justify-between">
        <p className="text-[11px] font-medium text-[#75767B]">
            {label}
        </p>
        <p className="w-[217px] text-[#000000] break-words text-wrap font-normal text-[11px]">{msg}</p>
    </div>
}