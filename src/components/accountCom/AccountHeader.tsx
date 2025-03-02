import React from "react";

interface AccountHeaderProps {
  title: string;
}

const AccountHeader: React.FC<AccountHeaderProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-between items-center py-4 border-b">
      <p className="font-bold text-lg">{title}</p>
    </div>
  );
};

export default AccountHeader;
