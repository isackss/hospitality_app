"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { ReservationsList } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import AppointmentModal from "../AppointmentModal";
import StatusBadge from "../StatusBadge";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p className="text-14-medium">{row.index + 1}</p>,
  },
  {
    accessorKey: "reservationId",
    header: "Booking #",
    cell: ({ row }) => (
      <p className="text-14-medium min-w-[75px]">
        {row.original.reservationId}
      </p>
    ),
  },
  {
    accessorKey: "room",
    header: "Room",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p>{row.original.room}</p>
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: "Client",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p>{row.original.client}</p>
      </div>
    ),
  },
  {
    accessorKey: "guests",
    header: "Guests",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p>Adults: {row.original.guests.adults}</p>
        <p>Children: {row.original.guests.children}</p>
      </div>
    ),
  },
  {
    accessorKey: "checkIn",
    header: "Check In",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p>{row.original.checkIn}</p>
      </div>
    ),
  },
  {
    accessorKey: "checkOut",
    header: "Check Out",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p>{row.original.checkOut}</p>
      </div>
    ),
  },
  {
    accessorKey: "orders",
    header: "Orders",
    cell: ({ row }) => (
      <div className="text-14-medium">
        <p className="text-center">{row.original.orders}</p>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div>
        <StatusBadge status={row.original.status} />
      </div>
    ),
  },
  {
    accessorKey: "ammount",
    header: "Ammount",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">{row.original.ammount}</p>
    ),
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">{row.original.balance}</p>
    ),
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => (
      <p className="text-14-regular min-w-[100px]">{row.original.source}</p>
    ),
  },
  /* {
    accessorKey: "primaryPhysician",
    header: () => "Doctor",
    cell: ({ row }) => {
      const doctor = Doctors.find(
        (doc) => doc.name === row.original.primaryPhysician
      );
      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image!}
            height={100}
            width={100}
            alt={doctor?.name!}
            className="size-8"
          />
          <p className="whitespace-nowrap">Dr. { {doctor?.name} }</p>
        </div>
      );
    },
  }, */
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row: { original: data } }) => (
      <div className="flex gap-1">
        {/* <AppointmentModal
          type="schedule"
          patientId={data.patient.$id}
          userId={data.userId}
          appointment={data}
        />
        <AppointmentModal
          type="cancel"
          patientId={data.patient.$id}
          userId={data.userId}
          appointment={data}
        /> */}
      </div>
    ),
  },
];
