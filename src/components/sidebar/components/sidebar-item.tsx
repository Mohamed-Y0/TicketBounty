import Link from "next/link";
import { usePathname } from "next/navigation";
import { closedClassName } from "@/components/sidebar/constants";
import { NavItem } from "@/components/sidebar/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  isOpen: boolean;
  navItem: NavItem;
};

const SidebarItem = ({ isOpen, navItem }: SidebarItemProps) => {
  const path = usePathname();
  const isActive = path === navItem.href;

  const Icon = navItem.icon;

  return (
    <>
      <Link
        href={navItem.href}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "group relative flex h-12 justify-start",
          isActive && "bg-muted hover:bg-muted font-bold",
        )}
      >
        {<Icon className="h-5 w-5" />}
        <span
          className={cn(
            "absolute left-12 text-base duration-200",
            isOpen ? "hidden md:block" : "w-[78px]",
            !isOpen && closedClassName,
          )}
        >
          {navItem.title}
        </span>
      </Link>
    </>
  );
};

export default SidebarItem;
