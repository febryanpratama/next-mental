import React from "react";

import { NavbarHome } from "@/src/components/NavbarHome";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div className="w-full">
        <NavbarHome />
        {children}
      </div>
    </section>
  );
}
