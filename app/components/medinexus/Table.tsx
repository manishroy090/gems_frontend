"use client";

import React, { memo, useEffect, useMemo, useRef, useState } from "react";

import Link from "next/link";
import { Badge } from "@/components/medinexus/badge";

/* =========================================================
   TYPES
========================================================= */

export type TableAction<T = any> = {
  label: string;
  icon?: React.ReactNode;
  href?: string | ((item: T) => string);
  confirm?: boolean;
  onClick?: (item: T) => void | Promise<void>;
};

type ColumnRenderer<T> = (value: any, item: T) => React.ReactNode;

type TableProps<T = any> = {
  data: T[];
  actionlist?: TableAction<T>[];
  columnRenderers?: Record<string, ColumnRenderer<T>>;
  query?: {
    search?: string;
    filters?: Record<string, any>;
    dateRange?: {
      key: string;
      from?: string;
      to?: string;
    };
    sort?: {
      key: string;
      order: "asc" | "desc";
    };
  };
  showaction?: boolean;
};

/* =========================================================
   DELETE MODAL
========================================================= */

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[340px]">
        <h2 className="text-lg font-semibold">Confirm Delete</h2>

        <p className="text-sm text-gray-500 mt-2">
          Are you sure you want to delete this item?
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   ACTION MENU
========================================================= */

const ActionMenu = memo(
  <T extends Record<string, any>>({
    item,
    actions = [],
  }: {
    item: T;
    actions: TableAction<T>[];
  }) => {
    const [open, setOpen] = useState(false);
    const [confirmAction, setConfirmAction] = useState<TableAction<T> | null>(
      null,
    );

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutside);

      return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    const handleAction = async (action: TableAction<T>) => {
      console.log("action", action);
      if (action.confirm) {
        setConfirmAction(action);
        return;
      }

      await action.onClick?.(item);
      setOpen(false);
    };

    return (
      <>
        <div ref={menuRef} className="relative inline-block">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="px-3 py-1.5 rounded-md hover:bg-gray-100 text-lg"
          >
            ⋮
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden z-40">
              {actions.map((action, i) =>
                action.href ? (
                  <Link
                    key={i}
                    href={
                      typeof action.href === "function"
                        ? action.href(item)
                        : action.href
                    }
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    <span>{action.icon}</span>

                    <span>{action.label}</span>
                  </Link>
                ) : (
                  <button
                    key={i}
                    onClick={() => handleAction(action)}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    <span>{action.icon}</span>

                    <span>{action.label}</span>
                  </button>
                ),
              )}
            </div>
          )}
        </div>

        {/* CONFIRM MODAL */}

        <DeleteModal
          open={!!confirmAction}
          onClose={() => setConfirmAction(null)}
          onConfirm={async () => {
            await confirmAction?.onClick?.(item);

            setConfirmAction(null);
            setOpen(false);
          }}
        />
      </>
    );
  },
);

ActionMenu.displayName = "ActionMenu";

/* =========================================================
   TABLE
========================================================= */

const Table = <T extends Record<string, any>>({
  data = [],
  actionlist = [],
  columnRenderers = {},
  query = {},
  showaction = false,
  columns = []
}: TableProps<T>) => {
  /* =====================================================
       KEYS
    ===================================================== */

  const keys = useMemo(() => {
    if (!data?.length) return [];

    return Object.keys(data[0]).filter((key) => key !== "id");
  }, [data]);

  /* =====================================================
       FILTER + SEARCH + SORT
    ===================================================== */

  const filteredData = useMemo(() => {
    let result = [...data];

    const { search, filters, dateRange, sort } = query;

    /* SEARCH */

    if (search) {
      const lower = search.toLowerCase();

      result = result.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(lower),
        ),
      );
    }

    /* FILTERS */

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          result = result.filter((row) => String(row[key]) === String(value));
        }
      });
    }

    /* DATE RANGE */

    if (dateRange?.key) {
      result = result.filter((row) => {
        const rowDate = new Date(row[dateRange.key] ?? "created_at");
      

        if (dateRange.from && rowDate < new Date(dateRange.from)) {
          
          return false;
        }

        if (dateRange.to && rowDate > new Date(dateRange.to)) {
          return false;
        }

        return true;
      });
      
    }

    /* SORT */

    if (sort?.key) {
      result.sort((a, b) => {
        const aVal = a[sort.key];
        const bVal = b[sort.key];

        const isAsc = sort.order === "asc";

        if (typeof aVal === "number" && typeof bVal === "number") {
          return isAsc ? aVal - bVal : bVal - aVal;
        }

        return isAsc
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }

    return result;
  }, [data, query]);




  /* =====================================================
       EMPTY STATE
    ===================================================== */

  /* =====================================================
       RENDER
    ===================================================== */

  return (
    <div className="overflow-x-auto rounded-xl  bg-white min-h-62 ">
      <table className="w-full border-collapse">
        {/* HEADER */}

        <thead className="bg-yellow-50 border-b shadow">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase w-[60px]">
              SN
            </th>

            {columns.map((key ,index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-semibold first-letter:uppercase"
              >
                {key.title}
              </th>
            ))}

            {showaction && (
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase w-[90px]">
                Action
              </th>
            )}
          </tr>
        </thead>

        {/* BODY */}

        <tbody className="divide-y">
          {filteredData.length ? (
            filteredData.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-blue-50/40 transition"
              >
                {/* SERIAL */}

                <td className="px-4  text-xs font-medium">{index + 1}</td>

                {/* DATA */}

                {keys.map((key) => (
                  <td key={key} className="px-4  text-xs">
                    {columnRenderers?.[key] ? (
                      columnRenderers[key](item[key], item)
                    ) : typeof item[key] === "boolean" ? (
                      item[key] ? (
                        <Badge className="bg-green-100 text-green-700">
                          True
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700">False</Badge>
                      )
                    ) : (
                      String(item[key])
                    )}
                  </td>
                ))}

                {/* ACTION */}

                {showaction && (
                  <td className="px-4 ">
                    <div className="flex justify-center">
                      <ActionMenu item={item} actions={actionlist} />
                    </div>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr className=" text-center  w-full">
              <td colSpan="8" className="py-10 fontsemibold text-lg">

              No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
