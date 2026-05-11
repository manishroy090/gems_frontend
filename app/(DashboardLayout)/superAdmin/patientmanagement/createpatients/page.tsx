
"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Select } from "../../../../components/ui/select";

const page = () => {

    return (
        <div className="doctor_form bg-white p-8">

            <h1 className="border-b p-4">New Patient</h1>

            <div className="p-4">
                <h1 className="py-4">Patient Information</h1>

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Name</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last Name</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone Number</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email Address</Label>
                        <Input />

                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Primary Doctor</Label>
                        <Input />

                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">DOB</Label>
                        <Input />

                    </div>



                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</Label>
                        <Input />

                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Blood Group</Label>
                        <Input />

                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Status</Label>
                        <Input />

                    </div>



                </div>


                <h1 className="py-4">Address Information</h1>
                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address 1 </Label>
                        <Input />
                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Address 2 </Label>
                        <Input />
                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Country</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">State</Label>
                        <Input />
                    </div>

                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">City</Label>
                        <Input />
                    </div>


                    <div>
                        <Label className="text-xs font-medium text-gray-500 uppercase tracking-wide">PineCode</Label>
                        <Input />
                    </div>
                </div>

            </div>

        </div>
    )
}


export default page