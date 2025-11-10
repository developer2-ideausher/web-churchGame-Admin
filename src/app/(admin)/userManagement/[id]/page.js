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
import Tabs from "@/app/Components/Tabs";

const Page = () => {
  const tabItems = [
    { id: "gameplays", label: "Gameplays" },
    { id: "daily-match", label: "Daily Match" },
    { id: "groups", label: "Groups" },
    { id: "art-generation", label: "Art Generation" },
    { id: "badges", label: "Badges" },
    { id: "subscriptions", label: "Subscriptions" },
  ];
  const [activeTab, setActiveTab] = useState(tabItems[0].id);
  // const renderTable = () => {
  //   switch (activeTab) {
  //     case "gameplays":
  //       return <div>🎮 Gameplays Table</div>;
  //     case "daily-match":
  //       return <div>📅 Daily Match Table</div>;
  //     case "groups":
  //       return <div>👥 Groups Table</div>;
  //     case "art-generation":
  //       return <div>🎨 Art Generation Table</div>;
  //     case "badges":
  //       return <div>🏅 Badges Table</div>;
  //     case "subscriptions":
  //       return <div>💳 Subscriptions Table</div>;
  //     default:
  //       return null;
  //   }
  // };
  return (
    <div className="flex flex-col gap-5 mb-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="font-semibold text-base"
              href="/userManagement"
            >
              User Management
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>User Details</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-2">
        <h2>User Information</h2>
        <div className="bg-white w-2/3 rounded-lg border border-[#8380B4] p-5">
          <div className="grid grid-cols-[200px_1fr] gap-y-3 gap-x-5">
            <p className="font-medium text-[#4E4C6A] text-base">User Id :</p>
            <p className="font-medium text-[#1C1C1C] text-sm">123456</p>

            <p className="font-medium text-[#4E4C6A] text-base">User Name :</p>
            <p className="font-medium text-[#1C1C1C] text-sm">Biblekid1234</p>

            <p className="font-medium text-[#4E4C6A] text-base">Full Name :</p>
            <p className="font-medium text-[#1C1C1C] text-sm">John Doe</p>

            <p className="font-medium text-[#4E4C6A] text-base">Email :</p>
            <p className="font-medium text-[#1C1C1C] text-sm">
              johndoe@email.com
            </p>

            <p className="font-medium text-[#4E4C6A] text-base">
              Favorite Verse :
            </p>
            <p className="wrap-break-word font-medium text-[#1C1C1C] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>

            <p className="font-medium text-[#4E4C6A] text-base">Church :</p>
            <p className="font-medium text-[#1C1C1C] text-sm">Church Name</p>

            <p className="font-medium text-[#4E4C6A] text-base">
              Account Status :
            </p>
            <p className="font-medium text-[#1C1C1C] text-sm">Active</p>

            <p className="font-medium text-[#4E4C6A] text-base">
              Subscription Plan :
            </p>
            <p className="font-medium text-[#1C1C1C] text-sm">Active</p>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <Tabs items={tabItems} onTabChange={setActiveTab} />
        {/* <div className="mt-5">{renderTable()}</div> */}
      </div>
    </div>
  );
};

export default Page;
