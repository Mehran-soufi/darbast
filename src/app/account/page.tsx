"use client";
import React, { useState } from "react";
import AccountItms from "@/components/accountCom/AccountItms";
import MyProfile from "@/components/accountCom/MyProfile";

const Account: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("");
  const [titlePage, setTitlePage] = useState<string>("");

  const handleButtonClick = (link: string, title: string) => {
    setActivePage(link);
    setTitlePage(title);
  };

  return (
    <div className="w-full h-screen">
      <div className="section h-full flex justify-center items-center">
        <div className="w-full h-[80%]">
          <div className="w-full h-full grid grid-cols-3 gap-4">
            <div className="rounded-md border-2">
              <AccountItms onButtonClick={handleButtonClick} />
            </div>
            <div className="col-span-2">
              {activePage === "my-account" && <MyProfile title={titlePage} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
