"use client";
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  MoreVertical,
} from "lucide-react";
import DataTable from "../DataTable";

// Sample data
const data = [
  {
    id: 32861,
    username: "Albert Flores",
    email: "examplemail@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
  {
    id: 32862,
    username: "Jane Cooper",
    email: "jane.cooper@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "suspended",
  },
  {
    id: 32863,
    username: "Wade Warren",
    email: "wade.warren@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "inactive",
  },
  {
    id: 32864,
    username: "Esther Howard",
    email: "esther.howard@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
  {
    id: 32865,
    username: "Robert Fox",
    email: "robert.fox@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "inactive",
  },
  {
    id: 32866,
    username: "Jenny Wilson",
    email: "jenny.wilson@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
  {
    id: 32867,
    username: "Kristin Watson",
    email: "kristin.watson@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
  {
    id: 32868,
    username: "Cameron Williamson",
    email: "cameron.williamson@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
  {
    id: 32869,
    username: "Darrell Steward",
    email: "darrell.steward@gmail.com",
    groups: 4,
    reflections: 4,
    lastLogin: "9 Jan 2025, 10:22",
    badges: 10,
    status: "active",
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    active: "bg-green-100 text-green-700 border-green-200",
    suspended: "bg-yellow-100 text-yellow-700 border-yellow-200",
    inactive: "bg-red-100 text-red-700 border-red-200",
  };

  const labels = {
    active: "Active",
    suspended: "Suspended",
    inactive: "Inactive",
  };

  return (
    <span
      className={`inline-flex items-center px-3 w-full justify-center py-1 rounded-md text-sm font-medium border ${styles[status]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-2 bg-current"></span>
      {labels[status]}
    </span>
  );
};

const UserManagementTable = ({ loading = false }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: "id",
      header: "User ID",
      cell: (info) => <span className="text-gray-700">{info.getValue()}</span>,
    },
    {
      accessorKey: "username",
      header: "Username",
      cell: (info) => (
        <span className="font-medium text-gray-900">{info.getValue()}</span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email ID",
      cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
    },
    {
      accessorKey: "groups",
      header: "Groups",
      cell: (info) => <span className="text-gray-700">{info.getValue()}</span>,
    },
    {
      accessorKey: "reflections",
      header: "Reflections",
      cell: (info) => <span className="text-gray-700">{info.getValue()}</span>,
    },
    {
      accessorKey: "lastLogin",
      header: "Last Log in",
      cell: (info) => <span className="text-gray-600">{info.getValue()}</span>,
    },
    {
      accessorKey: "badges",
      header: "Badges",
      cell: (info) => <span className="text-gray-700">{info.getValue()}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => <StatusBadge status={info.getValue()} />,
    },
    {
      id: "actions",
      header: "Action",
      cell: () => (
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#4E4C6A] px-6 py-2 flex items-center gap-5">
        <h2 className="text-white text-lg font-semibold">Users</h2>
        <div className="flex items-center justify-between w-full gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search in users"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-96"
              disabled={loading}
            />
          </div>
          <div className="flex gap-3">
             <button
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <SlidersHorizontal color="#DBB358" size={16} />
            Filters
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <ArrowUpDown color="#DBB358" size={16} />
            Sort
          </button>
          </div>
         
        </div>
      </div>

      {/* Table */}
      <DataTable table={table} loading={loading} columnsCount={columns.length} />
    </div>
  );
};

export default UserManagementTable;