import { useEffect, useState, useRef } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";


/* ---------------- ACTION MENU ---------------- */

const ActionMenu = ({ item, actions }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const defaultActions = [
        {
            label: "View",
            icon: "👁️",
            onClick: (item) => console.log("View", item),
        },
        {
            label: "Edit",
            icon: "✏️",
            onClick: (item) => console.log("Edit", item),
        },
        {
            label: "Delete",
            icon: "🗑️",
            onClick: (item) => console.log("Delete", item),
        },
    ];

    const finalActions =
        Array.isArray(actions) && actions.length > 0
            ? actions
            : defaultActions;

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);






    return (
        <div ref={menuRef} className="relative inline-block text-left">
            {/* 3 DOT BUTTON */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="px-2 py-1 text-xl font-bold"
            >
                ⋮
            </button>

            {/* DROPDOWN */}
            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow z-50">
                    {finalActions.map((action, index) => (
                        action.href ? (
                            <Link
                                key={index}
                                href={typeof action.href === "function" ? action.href(item) : action.href}
                                onClick={() => setOpen(false)}
                                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center space-x-2"
                            >
                                <span>{action.icon}</span>
                                <span>{action.label}</span>
                            </Link>
                        ) : (
                            <button
                                key={index}
                                onClick={() => {
                                    action.onClick?.(item);
                                    setOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center space-x-2"
                            >
                                <span>{action.icon}</span>
                                <span>{action.label}</span>
                            </button>
                        )
                    ))}
                </div>
            )}
        </div>
    );
};

/* ---------------- MAIN TABLE ---------------- */

const Table = ({ data = [], actionlist }) => {
    const [keys, setKeys] = useState([]);
    const [optimizedData ,setOptimizedData] = useState([]);

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            setKeys(Object.keys(data[0]));
        } else {
            setKeys([]);
        }
    }, [data]);

    if (!Array.isArray(data) || data.length === 0) {
        return <p className="p-4 text-gray-500">No data available</p>;
    }


  

    return (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">

                {/* HEADER */}
                <thead>
                    <tr className="border-y bg-gray-50">

                        <th className="text-left px-2 py-3 w-[60px]">SN</th>

                        {keys.map((key) => (
                            <th
                                key={key}
                                className="text-left px-2 py-3 capitalize min-w-[120px]"
                            >
                                {key}
                            </th>
                        ))}

                        <th className="text-left px-2 py-3 w-[80px]">Action</th>
                    </tr>
                </thead>

                {/* BODY */}
                <tbody>
                    {data.map((item, rowIndex) => (
                        <tr key={rowIndex} className="border-y hover:bg-gray-50">

                            {/* SN */}
                            <td className="py-3 px-2 w-[60px]">
                                {rowIndex + 1}
                            </td>

                            {/* DYNAMIC COLUMNS */}
                            {keys.map((key) => (
                                <td
                                    key={key}
                                    className="py-3 px-2 max-w-[200px] break-words whitespace-normal"
                                >
                                    {typeof item[key] === "boolean" ? (
                                        item[key] ? (
                                            <Badge className="bg-green-100 text-green-700">
                                                True
                                            </Badge>
                                        ) : (
                                            <Badge className="bg-red-100 text-red-700">
                                                False
                                            </Badge>
                                        )
                                    ) : (
                                        item[key]
                                    )}
                                </td>
                            ))}

                            {/* ACTION */}
                            <td className="py-3 px-2 w-[80px]">
                                <ActionMenu
                                    item={item}
                                    actions={
                                        Array.isArray(actionlist) && actionlist.length > 0
                                            ? actionlist
                                            : undefined
                                    }
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;