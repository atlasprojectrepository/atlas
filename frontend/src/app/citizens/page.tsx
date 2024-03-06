import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {citizens} from "@/app/lib/data/placeholder-data";
import {Citizen} from "@/app/lib/models";
import {EyeIcon} from "@/app/ui/icons/eye";
import {EditIcon} from "@/app/ui/icons/edit";
import {DeleteIcon} from "@/app/ui/icons/delete";

const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};

const columns = [
    {name: "NAME", uid: "name"},
    {name: "ROLE", uid: "role"},
    {name: "STATUS", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
];

export default function CitizensList() {
    const renderCell = React.useCallback((citizen: Citizen, columnKey: any) => {
        // const cellValue = citizen[columnKey];
        const cellValue = 'zob';

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{radius: "lg", src: citizen.avatar}}
                        description={citizen.name}
                        name={cellValue}
                    >
                        {citizen.name}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                        <p className="text-bold text-sm capitalize text-default-400">{citizen.birthPlace?.name}</p>
                    </div>
                );
            case "status":
                return (
                    <Chip className="capitalize" size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
                        </Tooltip>
                        <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={citizens}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
