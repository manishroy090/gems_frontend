"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { getRolesWithPermissions ,assignPermission ,updateRolePermissions} from "@services/Roles";
import { getPermissions } from "@services/Permission";


const ACTIONS = ["index", "create", "edit", "delete", "view"];

const Page = () => {
  const [groupedAllPermissions, setGroupedAllPermissions] = useState<any>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<any>([]);
  const [assignedPermissionIds, setAssignedPermissionIds] = useState<any>(new Set());
  const [isExistingAssignment, setIsExistingAssignment] = useState<any>(false);

  const params = useParams();

  const groupPermissions = (list:any) =>
    list.reduce((acc:any, item:any) => {
      let moduleGroup = acc.find((m:any) => m.module === item.module);
      if (!moduleGroup) {
        moduleGroup = { module: item.module, rows: [] };
        acc.push(moduleGroup);
      }

      const submoduleKey = item.submodules ?? item.submodule ?? "";

      let submoduleGroup = moduleGroup.rows.find(
        (s) => s.submodule === submoduleKey
      );
      if (!submoduleGroup) {
        submoduleGroup = { submodule: submoduleKey, actions: {} };
        moduleGroup.rows.push(submoduleGroup);
      }

      const titleParts = (item.title ?? item.name ?? "").split(".");
      const action = titleParts.length > 1 ? titleParts[1] : titleParts[0];

      submoduleGroup.actions[action] = item.id;

      return acc;
    }, []);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assigned, all] = await Promise.all([
          getRolesWithPermissions(params.role_id),
          getPermissions(),
        ]);

        console.log("assigned →", assigned);
        console.log("all →", all);

        // Safely unwrap — handles undefined / { data: [...] } / plain array
        const assignedList = Array.isArray(assigned)
          ? assigned
          : assigned?.data ?? [];

        const allList = Array.isArray(all)
          ? all
          : all?.data ?? [];

        // --- assigned permissions ---
        const hasAssigned = assignedList.length > 0;
        setIsExistingAssignment(hasAssigned);

        const assignedIds = new Set(assignedList.map((p:any) => p.id));
        setAssignedPermissionIds(assignedIds);
        setSelectedPermissions(hasAssigned ? [...assignedIds] : []);

        // --- all permissions (shown in table) ---
        const grouped = groupPermissions(allList);
        setGroupedAllPermissions(grouped);
      } catch (error) {
        console.error("Permission fetch failed", error);
      }
    };

    if (params?.role_id) fetchData();
  }, [params?.role_id]);

  const selectedSet = useMemo(
    () => new Set(selectedPermissions),
    [selectedPermissions]
  );

  const handleCheckboxChange = (permissionId:any, checked:any) => {
    setSelectedPermissions((prev:any) =>
      checked
        ? prev.includes(permissionId)
          ? prev
          : [...prev, permissionId]
        : prev.filter((id:any) => id !== permissionId)
    );
  };

  const handleAllowAll = (actions:any, checked:any) => {
    const ids = Object.values(actions);
    setSelectedPermissions((prev:any) =>
      checked
        ? [...new Set([...prev, ...ids])]
        : prev.filter((id:any) => !ids.includes(id))
    );
  };

  const handleSubmit = async () => {
    const payload = {
      role_id: params?.role_id,
      permissions: selectedPermissions,
    };

    if (isExistingAssignment) {
      console.log("UPDATE permissions →", payload);
      updateRolePermissions(payload.role_id,payload)
     
      //  await getRolesWithPermissions(payload);
    } else {
      await assignPermission(payload)
      console.log("ASSIGN permissions →", payload);
      // await assignPermissions(payload);
    }
  };

  

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="border-b pb-4 text-xl font-semibold">Permissions</h1>

      <div className="flex flex-col space-y-8">
        {groupedAllPermissions.length === 0 ? (
          <p className="text-sm text-gray-500">No permissions found.</p>
        ) : (
          groupedAllPermissions.map((permission:any, index:any) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border bg-white"
            >
              <h1 className="border-b bg-gray-50 p-4 text-lg font-medium">
                {permission.module}
              </h1>

              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="px-3 py-3 text-left">Module</th>
                      {ACTIONS.map((action) => (
                        <th
                          key={action}
                          className="px-3 py-3 text-left uppercase"
                        >
                          {action}
                        </th>
                      ))}
                      <th className="px-3 py-3 text-left">Allow All</th>
                    </tr>
                  </thead>

                  <tbody>
                    {permission.rows.map((module:any, rowIndex:any) => {
                      const permissionIds = Object.values(module.actions);
                      const allChecked =
                        permissionIds.length > 0 &&
                        permissionIds.every((id) => selectedSet.has(id));

                      return (
                        <tr key={rowIndex} className="border-b last:border-0">
                          <td className="px-3 py-3 font-medium">
                            {module.submodule}
                          </td>

                          {ACTIONS.map((action) => {
                            const permissionId = module.actions[action];
                            const isAssigned =
                              assignedPermissionIds.has(permissionId);

                            return (
                              <td key={action} className="px-3 py-3">
                                {permissionId ? (
                                  <input
                                    type="checkbox"
                                    value={permissionId}
                                    checked={selectedSet.has(permissionId)}
                                    title={
                                      isAssigned ? "Currently assigned" : ""
                                    }
                                    onChange={(e) =>
                                      handleCheckboxChange(
                                        permissionId,
                                        e.target.checked
                                      )
                                    }
                                  />
                                ) : (
                                  "-"
                                )}
                              </td>
                            );
                          })}

                          <td className="px-3 py-3">
                            <input
                              type="checkbox"
                              checked={allChecked}
                              onChange={(e) =>
                                handleAllowAll(module.actions, e.target.checked)
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}

        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="rounded bg-black px-5 py-2 text-white"
          >
            {isExistingAssignment ? "Update Permissions" : "Assign Permissions"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;