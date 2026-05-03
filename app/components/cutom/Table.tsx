import { useEffect, useState } from "react";

const Table = ({ data, action = false }) => {


    const [keys, setKeys] = useState([]);

    useEffect(() => {
        const keys = Object.entries(Object.keys(data[0]));
        setKeys(keys);

    }, [data])



    useEffect(() => {

    }, [data]);




    return (
        <table className="table-fixed w-full  ">
            <thead>
                <tr className="border-y">
                    <th className="text-left px-2 py-3">SN</th>

                    {keys.map((item) => (
                        <th className="text-left px-2 py-3">{item[1]}</th>
                    ))}


                    {action ? <th className="text-left px-2 py-3">Action</th> : ''}



                </tr>
            </thead>
            <tbody>

                {data.map((item, rowIndex) => (
                    <tr className="border-y">
                        <td className="py-3 px-2">
                            {rowIndex + 1}
                        </td>
                        {keys.map((keysItem, colIndex) => (

                            <td key={colIndex} className="py-3 px-2">

                                {keysItem[1] === "Verified" ? (
                                    item?.[keysItem[1]] ? (
                                        <img className="w-5" src="/hrm_image/check-mark.png" alt="verified" />
                                    ) : (
                                        <img className="w-5" src="/hrm_image/multiply.png" alt="verified" />


                                    )
                                ) : (
                                    item?.[keysItem[1]]
                                )}                            </td>
                        ))}

                        {action ? <td className="py-3 px-2"> Action</td> : ""}

                    </tr>
                ))}



            </tbody>
        </table>

    )
}


export default Table;