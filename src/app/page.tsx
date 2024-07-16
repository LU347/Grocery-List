import Image from "next/image";
import Navbar from "@/app/ui/Navbar"
import GroceryIcon from "../../public/grocery.jpg"

export default function Home() {
  return (
    <><Navbar />
    <section className="pt-24 container mx-auto px-4 py-8">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              src={GroceryIcon}
              alt="Logo"
              width="500"
              height="500"
              className="hidden lg:block "
              priority />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl text-emerald-600">Streamline Your Group Grocery Shopping</h2>

            <p className="mt-4 text-emerald-950">
              Easily create and share grocery lists with friends, family, or roommates. Our app lets you manage multiple lists in real-time, ensuring everyone stays organized and on the same page. Simplify your shopping experience and make planning easier with our collaborative platform!
            </p>

            <a
              href="/lists"
              className="mt-8 inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section></>
    
  );
}
