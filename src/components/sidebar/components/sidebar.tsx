"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarItem from "@/components/sidebar/components/sidebar-item";
import { navItems } from "@/components/sidebar/constants";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { cn } from "@/lib/utils";
import { signInPath, signUpPath } from "@/paths";
import { getActivePath } from "@/utils/get-active-path";

const Sidebar = () => {
  const { user, isFetched } = useAuth();
  const pathname = usePathname();

  const { activeIndex } = getActivePath(
    pathname,
    navItems.map((item) => item.href),
    [signInPath(), signUpPath()],
  );

  const [isTransition, setIsTransition] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (open: boolean) => {
    setIsTransition(true);
    setIsOpen(open);
    setTimeout(() => setIsTransition(false), 200);
  };

  if (!isFetched || !user) return <div className="bg-secondary/20 w-[78px]" />;

  return (
    <nav
      className={cn(
        "animate-sidebar-from-left",
        "h-screen border-r pt-24",
        isTransition && "duration-200",
        isOpen ? "w-[78px] md:w-60" : "w-[78px]",
      )}
      onMouseEnter={() => handleToggle(true)}
      onMouseLeave={() => handleToggle(false)}
    >
      <div className="px-3 py-2">
        <nav className="space-y-2">
          {navItems.map((navItem, index) => (
            <SidebarItem
              key={navItem.title}
              isOpen={isOpen}
              navItem={navItem}
              isActive={activeIndex === index}
            />
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
