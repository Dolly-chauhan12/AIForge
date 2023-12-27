import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./Mobile-Sidebar";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-x-4">
        <ThemeToggle />
        <div className="pt-0.5">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
