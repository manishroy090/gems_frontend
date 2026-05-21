import { useEffect, useState, useRef, useMemo } from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";

/* ---------------- ACTION MENU ---------------- */

const ActionMenu = ({ item, actions }) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    const defaultActions = [
        { label: "View", icon: "👁️", onClick: (item) => console.log("View", item) },
        { label: "Edit", icon: "✏️", onClick: (item) => console.log("Edit", item) },
        { label: "Delete", icon: "🗑️", onClick: (item) => console.log("Delete", item) },
    ];

    const finalActions =
        Array.isArray(actions) && actions.length > 0 ? actions : defaultActions;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={menuRef} className="relative inline-block text-left">
        <button
                onClick={() => setOpen((p) => !p)}
                className="px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition text-lg"
            >
                ⋮
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                    {finalActions.map((action, i) =>
                        action.href ? (
                            <Link
                                key={i}
                                href={
                                    typeof action.href === "function"
                                        ? action.href(item)
                                        : action.href
                                }
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 text-sm hover:bg-gray-50 flex gap-2"
                            >
                                <span>{action.icon}</span>
                                <span>{action.label}</span>
                            </Link>
                        ) : (
                            <button
                                key={i}
                                onClick={() => {
                                    action.onClick?.(item);
                                    setOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex gap-2"
                            >
                                <span>{action.icon}</span>
                                <span>{action.label}</span>
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

/* ---------------- TABLE ---------------- */

const Table = ({
    data = [],
    actionlist,
    columnRenderers = {},
    query = {},
    showaction
}) => {

    const [keys, setKeys] = useState([]);

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            setKeys(Object.keys(data[0]));
        } else {
            setKeys([]);
        }
    }, [data]);

    /* ---------------- ENGINE: FILTER + SEARCH + SORT ---------------- */

    const filteredData = useMemo(() => {
        let result = [...data];

        const { search, filters, dateRange, sort } = query;

        /* -------- GLOBAL SEARCH -------- */
        if (search) {
            const s = search.toLowerCase();

            result = result.filter((row) =>
                Object.values(row).some((val) =>
                    String(val).toLowerCase().includes(s)
                )
            );
        }

        /* -------- FIELD FILTERS -------- */
        if (filters && typeof filters === "object") {
            Object.entries(filters).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== "") {
                    result = result.filter(
                        (row) => String(row[key]) === String(value)
                    );
                }
            });
        }

        /* -------- DATE RANGE FILTER -------- */
        if (dateRange?.key) {
            result = result.filter((row) => {
                const rowDate = new Date(row[dateRange.key]);

                if (dateRange.from && rowDate < new Date(dateRange.from)) return false;
                if (dateRange.to && rowDate > new Date(dateRange.to)) return false;

                return true;
            });
        }

        /* -------- SORTING -------- */
        if (sort?.key) {
            result.sort((a, b) => {
                const aVal = a[sort.key];
                const bVal = b[sort.key];

                if (aVal === bVal) return 0;

                const isAsc = sort.order === "asc";

                if (typeof aVal === "number") {
                    return isAsc ? aVal - bVal : bVal - aVal;
                }

                return isAsc
                    ? String(aVal).localeCompare(String(bVal))
                    : String(bVal).localeCompare(String(aVal));
            });
        }

        return result;
    }, [data, query]);

    /* ---------------- EMPTY STATE ---------------- */

    if (!Array.isArray(filteredData) || filteredData.length === 0) {
        return (
            <p className="p-4 text-gray-500">
                No data available
            </p>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">

            <table className="w-full table-auto border-collapse">

                {/* HEADER */}
                <thead className="bg-gray-50">
                    <tr className="border-b">

                        <th className="text-left px-4 py-3 text-xs font-semibold uppercase w-[60px]">
                            SN
                        </th>

                        {keys.map((key) =>
                            key !== "id" ? (
                                <th
                                    key={key}
                                    className="text-left px-4 py-3 text-xs font-semibold uppercase"
                                >
                                    {key}
                                </th>
                            ) : null
                        )}


                        {showaction && 

                        <th className="text-left px-4 py-3 text-xs font-semibold uppercase w-[80px]">
                            Action
                        </th>
                        }
                    </tr>
                </thead>

                {/* BODY */}
                <tbody className="divide-y">

                    {filteredData.map((item, i) => (
                        <tr key={i} className="hover:bg-blue-50/40 transition">

                            {/* SN */}
                            <td className="px-4 py-3 text-sm font-medium">
                                {i + 1}
                            </td>

                            {/* DATA */}
                            {keys.map((key) =>
                                key !== "id" ?

                                    (
                                        <td key={key} className="px-4 py-3 text-sm">

                                            {/* COLUMN RENDER ENGINE */}
                                            {columnRenderers?.[key] ? (
                                                columnRenderers[key](item[key], item)
                                            ) : typeof item[key] === "boolean" ? (
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
                                    ) : null)}

                            {/* ACTION */}

                            {showaction && <td className="px-4 py-3">
                                <div className="flex justify-center">
                                    <ActionMenu item={item} actions={actionlist} />
                                </div>
                            </td>}


                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Table;