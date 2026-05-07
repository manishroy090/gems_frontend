"use client";
import Modal from "../../../../components/ui/Modal";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import Table from "../../../../components/cutom/Table";








const page = () => {




  return (
    <div className="flex flex-col space-y-5">
      <h1 className="border-b pb-4 fontsemibold text-xl ">Permissions</h1>

      <div className="flex flex-col space-y-8">


        <div className="bg-white">
          <h1 className="border-b p-4 text-lg">User Management</h1>

          <div>
            <table className="table-fixed w-full  ">
              <thead>
                <tr className="border-y">
                  <th className="text-left px-2 py-3">Module</th>
                  <th className="text-left px-2 py-3">CREATE</th>
                  <th className="text-left px-2 py-3">EDIT</th>
                  <th className="text-left px-2 py-3">DELETE</th>
                  <th className="text-left px-2 py-3">VIEW</th>
                  <th className="text-left px-2 py-3">Allow All</th>
                </tr>
              </thead>
              <tbody>


                <tr className="border-y">
                  <td className="py-3 px-2">
                    User
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Roles
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Permission
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>


        </div>

        <div className="bg-white">
          <h1 className="border-b p-4 text-lg">Account Management</h1>

          <div>
            <table className="table-fixed w-full  ">
              <thead>
                <tr className="border-y">
                  <th className="text-left px-2 py-3">Module</th>
                  <th className="text-left px-2 py-3">CREATE</th>
                  <th className="text-left px-2 py-3">EDIT</th>
                  <th className="text-left px-2 py-3">DELETE</th>
                  <th className="text-left px-2 py-3">VIEW</th>
                  <th className="text-left px-2 py-3">Allow All</th>
                </tr>
              </thead>
              <tbody>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Expenses
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Income
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Invoice
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>

                <tr className="border-y">
                  <td className="py-3 px-2">
                    Payment
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-2">
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
      </div>
    </div>
  );
};

export default page;
