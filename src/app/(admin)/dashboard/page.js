import StatCards from "@/app/Components/StatCards";
import React from "react";

const Page = () => {
  const stats = [
    { title: "Total users", number: 2426 },
    { title: "active users", number: 2426 },
    { title: "total game plays", number: 453 },
    { title: "Active Group games", number: 4563 },
    { title: "Daily match Participation", number: 4563 },
    { title: "Inactive users", number: 4563 },
    { title: "Active subscriptions", number: 4563 },
    { title: "Total Revenue", number: 4563 },
  ];
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[#4E4C6A] text-3xl font-semibold">Welcome Melvin!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCards key={index} title={stat.title} number={stat.number} />
        ))}
      </div>
    </div>
  );
};

export default Page;
