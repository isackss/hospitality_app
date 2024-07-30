"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/ClientForm";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ReservationsList } from "@/constants";
import { SearchValidation, UserFormValidation } from "@/lib/validations";

const Reservations = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SearchValidation>>({
    resolver: zodResolver(SearchValidation),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({ search }: z.infer<typeof SearchValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);

    /* try {
      const userData = { name, email, phone };

      const user = await createUser(userData);

      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.log(error);
    } */
    setIsLoading(false);
  }

  return (
    <div className="mx-auto mt-5 w-screen">
      <header className="flex justify-between">
        <div className="flex items-end gap-2">
          <h1 className="text-3xl">Reservations</h1>
          <div className="whitespace-nowrap text-slate-300">
            Home / Reservations
          </div>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md bg-sky-500 px-4 py-2">
            Import bookings request
          </button>
          <button className="rounded-md bg-sky-500 px-4 py-2">Add</button>
          <button className="rounded-md bg-slate-200 px-4 py-2 text-slate-800">
            Actions
          </button>
        </div>
      </header>

      <section className="mt-10 flex w-full gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-1 gap-4"
          >
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="search"
              label=""
              placeholder="Guest or Company"
              iconSrc="assets/icons/search.svg"
            />
            <Button className="rounded-md bg-sky-500 px-4 py-2">Search</Button>
          </form>
        </Form>
        <Button>
          Booking No.{" "}
          <Image
            src="/assets/icons/arrow_drop_down.svg"
            height={24}
            width={24}
            alt="icon"
          />
        </Button>
        <Button>
          Guest{" "}
          <Image
            src="/assets/icons/arrow_drop_down.svg"
            height={24}
            width={24}
            alt="icon"
          />
        </Button>
        <Button>
          Status{" "}
          <Image
            src="/assets/icons/arrow_drop_down.svg"
            height={24}
            width={24}
            alt="icon"
          />
        </Button>
        <Button>
          More +{" "}
          <Image
            src="/assets/icons/arrow_drop_down.svg"
            height={24}
            width={24}
            alt="icon"
          />
        </Button>
      </section>
      <section className="mt-10">
        <table className="w-full min-w-full max-w-screen-xl overflow-x-auto">
          <thead>
            <tr className="border border-slate-700 bg-slate-800">
              <th>Booking #</th>
              <th>Room</th>
              <th>Name</th>
              <th>Guests</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Orders</th>
              <th>Ammount</th>
              <th>Balance</th>
              <th>Source</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ReservationsList.map((reservation) => (
              <tr
                className="border border-slate-800 bg-slate-800 text-center"
                key={reservation.reservationId}
              >
                <td>
                  <p className="p-2">{reservation.reservationId}</p>
                </td>
                <td>
                  <p>{reservation.room}</p>
                </td>
                <td>
                  <p>{reservation.client}</p>
                </td>
                <td>
                  <div className="flex justify-center gap-1">
                    <p>Adults: {reservation.guests.adults}</p>
                    <p>Children: {reservation.guests.children}</p>
                  </div>
                </td>

                <td>
                  <p>{reservation.checkIn}</p>
                </td>
                <td>
                  <p>{reservation.checkOut}</p>
                </td>
                <td>
                  <p>{reservation.orders}</p>
                </td>
                <td>
                  <p>{reservation.ammount}</p>
                </td>
                <td>
                  <p>{reservation.balance}</p>
                </td>
                <td>
                  <p>{reservation.source}</p>
                </td>
                <td className="flex justify-center">
                  <p
                    className={clsx("status-badge capitalize", {
                      "bg-green-700": reservation.status === "checked in",
                      "bg-blue-700": reservation.status === "confirmed",
                      "bg-orange-700": reservation.status === "checked out",
                      "bg-red-700": reservation.status === "cancelled",
                    })}
                  >
                    {reservation.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Reservations;
