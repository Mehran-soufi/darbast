import AccountItms from "@/components/accountCom/AccountItms";


export default function Account() {
  return (
    <div className="w-full h-screen">
      <div className="section h-full flex justify-center items-center">
        <div className="w-full h-[80%]">
          <div className="w-full h-full grid grid-cols-3 gap-4">
            <div className="rounded-md border-2">
                <AccountItms/>
            </div>
            <div className="col-span-2 bg-red-800"></div> {/* Second column */}
          </div>
        </div>
      </div>
    </div>
  );
}
