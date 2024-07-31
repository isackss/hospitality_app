"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomFormField from "@/components/CustomFormField";
import { FormFieldType } from "@/components/forms/ClientForm";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
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
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
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
      <DataTable columns={columns} data={ReservationsList} />
    </div>
  );
};

export default Reservations;
