'use client'

import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {

  return (
    <main>
      <section className="bg-base-200" >
        <div className=" max-w-3xl mx-auto  flex justify-between items-center bg-base-200 px-8 py-2">
          <div className="font-bold">RapidCode</div>
          <div className=" space-x-4 max-md:hidden">
            <a className="link link-hover">content</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>

          </div>
          <div><ButtonLogin /></div>
        </div>
      </section>

      <section className="text-center py-32 px-8 max-w-3xl mx-auto">

        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
        <div>
          <p className="opacity-90 mb-10">create a feedback board in minutes, prioritize features, and build
            products you customers will love
          </p>
        </div>
        <ButtonLogin />
      </section>
    </main>
  );
}
