"use client"
import React, { useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UserManagementTable from "@/app/Components/UserManagement/UserManagementTable";
import StatCards from "@/app/Components/StatCards";
import Tabs from "@/app/Components/Tabs";

export default function Page() {
  const stats = [
    { title: "Total art generated", number: 2426 },
    { title: "Pending approvals", number: 2426 },
    { title: "Approved for gameplay", number: 453 },
    { title: "Rejected", number: 4563 },
  ];
  const tabItems = [
    { id: "gameplays", label: "Generation" },
    { id: "daily-match", label: "Approval Requests" },
  ];
  const [activeTab, setActiveTab] = useState(tabItems[0].id);
  return (
    <div className="flex flex-col gap-5 mb-5">
      <Breadcrumb>
        <BreadcrumbList>
          {/* <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator /> */}
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-semibold text-base"
              href="/artGeneration"
            >
              Art Generation
            </BreadcrumbLink>
          </BreadcrumbItem>
          {/* <BreadcrumbSeparator /> */}
          {/* <BreadcrumbItem>
            <BreadcrumbPage>User Details</BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCards key={index} title={stat.title} number={stat.number} />
        ))}
      </div>
      <Tabs items={tabItems} onTabChange={setActiveTab} />

      <UserManagementTable />
    </div>
  );
}
