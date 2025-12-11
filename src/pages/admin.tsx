import TableAdmin from "@/components/tableAdmin";
import UserInfo from "@/components/userInfo";

export default function Admin() {
  return (
    <div className="w-full h-full p-10 flex flex-col gap-8">
      <UserInfo />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl bg-accent  rounded-xl">
          <TableAdmin />
        </div>
      </div>
    </div>
  );
}
