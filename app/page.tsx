import Image from "next/image";
import Link from "next/link";

import ClientForm from "@/components/forms/ClientForm";

/* import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal"; */

export default function Home({ searchParams }: SearchParamProps) {
  /* const isAdmin = searchParams.admin === "true"; */

  return (
    <div className="flex h-screen max-h-screen">
      {/* {isAdmin && <PasskeyModal />} */}

      <section className="remove-scrollbar container my-auto">
        <div className="max-w-[1200px]">
          {/*  <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          /> */}
          <div className="mb-12 h-10 text-4xl">Hospitality 🛀</div>
          <ClientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Hospitality App
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/hospitality.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
