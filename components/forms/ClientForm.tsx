"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ClientType, countriesList, gender, IdType } from "@/constants";
import { UserFormValidation } from "@/lib/validations";

import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { Form } from "../ui/form";
import { SelectItem } from "../ui/select";

export enum FormFieldType {
  // eslint-disable-next-line no-unused-vars
  INPUT = "input",
  // eslint-disable-next-line no-unused-vars
  TEXTAREA = "textarea",
  // eslint-disable-next-line no-unused-vars
  PHONE_INPUT = "phoneInput",
  // eslint-disable-next-line no-unused-vars
  CHECKBOX = "checkbox",
  // eslint-disable-next-line no-unused-vars
  DATE_PICKER = "datePicker",
  // eslint-disable-next-line no-unused-vars
  SELECT = "select",
  // eslint-disable-next-line no-unused-vars
  SKELETON = "skeleton",
}
const ClientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section>
          <h1 className="header">Registro del cliente</h1>
          <p className="text-dark-700">
            Introduzca los datos para registrar un nuevo cliente.
          </p>
        </section>
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="sub-header">Información Personal</h2>
          </div>
        </section>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Nombre"
            placeholder="Juan"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="surname"
            label="Apellido"
            placeholder="Lopez"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="clientType"
            label="Tipo de cliente"
            placeholder="Seleccione un tipo"
          >
            {ClientType.map((client) => (
              <SelectItem key={client.id} value={client.id}>
                <div className="flex cursor-pointer items-center gap-2">
                  <p>{client.id}</p> - <p>{client.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="nationality"
            label="Nacionalidad"
            placeholder="Seleccione un país"
          >
            {countriesList.map((country) => (
              <SelectItem key={country} value={country}>
                <div className="flex cursor-pointer items-center gap-2">
                  <p>{country}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="idType"
            label="Documento de identificación"
            placeholder="Seleccione un tipo"
          >
            {IdType.map((type) => (
              <SelectItem key={type.id} value={type.id}>
                <div className="flex cursor-pointer items-center gap-2 capitalize">
                  <p>{type.id}</p> - <p>{type.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="identificationNumber"
            label="Número de identificación"
            placeholder="8-456-7756"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
        </div>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Correo electrónico"
          placeholder="correo@dominio.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Teléfono"
          placeholder="(507) 123-4567"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="address"
          label="Dirección"
          placeholder="Ave. Balboa"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="local"
            label="Localidad"
            placeholder="Bella Vista"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="state"
            label="Provincia"
            placeholder="Panamá"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="residency"
            label="País de residencia"
            placeholder="Seleccione un país"
          >
            {countriesList.map((country) => (
              <SelectItem key={country} value={country}>
                <div className="flex cursor-pointer items-center gap-2">
                  <p>{country}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Fecha de nacimiento"
          />

          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="sex"
            label="Sexo"
            placeholder="Seleccione un género"
          >
            {gender.map((gen) => (
              <SelectItem key={gen} value={gen}>
                <div className="flex cursor-pointer items-center gap-2 capitalize">
                  <p>{gen}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="emergencyContact"
            label="En caso de emergencia llamar a:"
            placeholder="Contacto o Familiar"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="emergencyContactNumber"
            label="Número de contacto"
            placeholder="(507) 123-4567"
          />
        </div>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="sub-header">Información de facturación</h2>
          </div>
        </section>

        <SubmitButton isLoading={isLoading}>Registrar</SubmitButton>
      </form>
    </Form>
  );
};

export default ClientForm;
