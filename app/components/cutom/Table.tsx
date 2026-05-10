import { useEffect, useState } from "react";
import Link from 'next/link'
import { Badge } from "../ui/badge";


const Table = ({ data, actionlist = [] }) => {


    const [keys, setKeys] = useState([]);
    const [formatedData, setFormatedData] = useState([]);
    const [actionData, setAction] = useState(actionlist);

    useEffect(() => {
        const keys = Object.entries(Object.keys(data[0]));
        setKeys(keys);

        const formatedData = data.map((item) => ({
            ...item,
            permissions: (
                <Link href={`/superAdmin/usersmanagement/permissions/${item.id}`}>
                    <div className="border w-fit px-6 py-1 flex space-x-4 items-center">
                        <img
                            src="/hrm_image/authentication.png"
                            className="w-8 h-8"
                            alt="permission"
                        />
                        <span className="font-semibold">Permission</span>
                    </div>
                </Link>
            ),
            is_active: item.is_active ? (
                <Badge className='px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700'>
                    Active
                </Badge>
            ) : <Badge className='px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700'>
                Inactive
            </Badge>
            ,
            email_verified_at: item.email_verified_at ? (
                <img
                    className="w-5"
                    src="/hrm_image/check-mark.png"
                    alt="verified"
                />
            ) : <img className="w-5" src="/hrm_image/multiply.png" alt="verified" />

        }));

        setFormatedData(formatedData);






    }, [data])











    return (
        <table className="table-fixed w-full  ">
            <thead>
                <tr className="border-y">
                    <th className="text-left px-2 py-3">SN</th>

                    {keys.map((item) => (
                        <th className="text-left px-2 py-3">{item[1]}</th>
                    ))}


                    {Array.isArray(actionlist) && actionlist.length > 0 ? <th className="text-left px-2 py-3">Action</th> : ''}



                </tr>
            </thead>
            <tbody>

                {formatedData.map((item, rowIndex) => (
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

                        {actionData.map((actionItem, index) => (
                            <td key={index} className="flex space-x-2   py-3">
                                {Object.values(actionItem).map((action, i) => (
                                    <div key={index} className="">
                                        {action}
                                    </div>
                                ))}
                            </td>
                        ))}
                        {/* {action ? <td className="py-3 px-2">{ }</td> : ""} */}

                    </tr>
                ))}



            </tbody>
        </table>

    )
}


export default Table;