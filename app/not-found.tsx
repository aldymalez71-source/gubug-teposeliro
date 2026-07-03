import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5EF] px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-amber-700">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mt-4 max-w-md text-gray-600">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin sudah dipindahkan.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          ← Kembali ke Beranda
        </Link>

      </div>
    </main>
  );
}