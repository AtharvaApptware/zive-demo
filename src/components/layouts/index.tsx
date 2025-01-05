import { ReactNode } from "react";
import Header from "./header";
import Sidebar from "components/sidebar/Sidebar";

type AppWrapperProps = {
  children?: ReactNode;
};

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-[#f8f9fd]">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex flex-col p-2 mx-4 w-full">
        <header className="">
          <Header />
        </header>
        <main className="overflow-auto mt-6">{children}</main>
      </div>
    </div>
  );
};
