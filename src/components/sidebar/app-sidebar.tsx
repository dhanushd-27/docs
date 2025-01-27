"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavGuide } from "./nav-guide";
import { sidebarConfig } from "@/config/sidebar.config";
import { ProjectSwitcher } from "./project-switcher";
import DialogDemo from "../searchbar/Searchbar";
import ThemeToggler from "../theme/toggler";
import { Separator } from "../ui/separator";
import { AppHeader } from "./app-header";


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        {/* Plura Logo with Github link in an ellipsis */}
        <AppHeader/>
        <ProjectSwitcher
          options={sidebarConfig.projectOptions}
          defaultOption={sidebarConfig.projectOptions[0]}
        />
        <DialogDemo />
      </SidebarHeader>
      <SidebarContent>
        <NavGuide items={sidebarConfig.guide} />
      </SidebarContent>
     <SidebarFooter  >
     <Separator />
      <ThemeToggler />
     </SidebarFooter>
    </Sidebar>
  );
}
