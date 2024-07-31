import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

const StatusBadge = ({ status }: { status: Status }) => {
  console.log(status);

  return (
    <div
      className={clsx("status-badge", {
        "bg-green-900": status === "checkedIn",
        "bg-orange-900": status === "checkedOut",
        "bg-yellow-900": status === "pending",
        "bg-blue-900": status === "confirmed",
        "bg-red-900": status === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[status]}
        height={34}
        width={34}
        alt={status}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "checkedIn",
          "text-orange-500": status === "checkedOut",
          "text-yellow-500": status === "pending",
          "text-blue-500": status === "confirmed",
          "text-red-500": status === "cancelled",
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default StatusBadge;
