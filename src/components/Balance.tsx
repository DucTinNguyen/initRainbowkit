import { useBalance } from "wagmi";


const Balance = ({ address }: any) => {

    const { data, isError, isLoading } = useBalance({
        address: address,
    })

    console.log(data)

    return (
        <span>Balance</span>
    )
}

export default Balance;