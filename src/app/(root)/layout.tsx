import React from "react";
import AppSidebar from "@/components/shared/Sidebar";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
//import MobileNav from "@/components/shared/MobileNav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <main className="root">
        <SidebarTrigger />
          <AppSidebar />
          <div className="root-container">
            
            <div className="wrapper">{children}</div>
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;

