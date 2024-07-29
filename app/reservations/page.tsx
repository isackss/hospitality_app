import Image from "next/image";

const page = () => {
  return (
    <div className="mx-auto mt-5 max-w-screen-xl">
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
      <section>
        <div className="inline-flex gap-1 rounded-md border border-dark-400 bg-transparent p-1">
          <Image
            src="/assets/icons/check-circle.svg"
            height={44}
            width={44}
            alt="icon"
          />
          <input
            type="text"
            name="search"
            className="shad-input rounded-md border-0 bg-transparent"
          />
          <button className="rounded-md bg-sky-500 px-4 py-2">Search</button>
        </div>
      </section>
    </div>
  );
};

export default page;
