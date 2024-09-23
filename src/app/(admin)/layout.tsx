import React from "react";

import { HistoryProvider } from "./history-pkb/HistoryProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HistoryProvider>
      <section className="flex">
        {/*<SidebarNavigation />*/}
        <div className="w-full">
          {/*<NavbarNavigation />*/}
          {children}
        </div>
      </section>
    </HistoryProvider>
  );
}
