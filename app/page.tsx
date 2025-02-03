import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-700 text-white font-semibold py-3 px-5 rounded-lg flex items-center gap-12">
        <Link
          href='/users'
          className="hover:underline py-1 transition-all duration-300"
        >
          Users
        </Link>
        <Link
          href='/users/nestedUser'
          className="hover:underline py-1 transition-all duration-300 "
        >
          Nested Users
        </Link>
        <Link
          href='/products'
          className="hover:underline py-1 transition-all duration-300 "
        >
          Products
        </Link>
      </section>
      <h1>Hello Next js </h1>
    </main>
  );
}
