'use client'

import { faq, pricingFeaturesList } from "@/assets";
import ButtonLogin from "@/components/ButtonLogin";
import FAQ from "@/components/FAQ";
import { useState } from "react";

export default function Home() {
  const [islogin, setLogin] = useState(true);
  const name = 'Rohit'
  return (
    <main>
      {/* Header */}
      <section className="bg-base-200" >
        <div className=" max-w-3xl mx-auto  flex justify-between items-center bg-base-200 px-8 py-2">
          <div className="font-bold">RapidCode</div>
          <div className=" space-x-4 max-md:hidden">
            <a className="link link-hover" href="">content</a>
            <a className="link link-hover  " href="#pricing">Pricing</a>
            <a className="link link-hover" href="#FAQ">FAQ</a>

          </div>
          <div><ButtonLogin islogin={islogin} name={name} /></div>
        </div>
      </section>
      {/* Hero */}
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">

        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
        <div>
          <p className="opacity-90 mb-10">create a feedback board in minutes, prioritize features, and build
            products you customers will love
          </p>
        </div>
        <ButtonLogin islogin={islogin} name={name} />
      </section>
      {/* Pricin g */}
      <section className="bg-base-200" id="pricing">
        <p className="text-sm uppercase text-center text-primary font-medium p-8">pricing</p>
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center ">
          A pricing that adapts to your need
        </h2>
        <div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-4 ">
          <div className="flex gap-2 items-baseline">
            <div className=" text-4xl font-black">$19</div>

            <div className=" uppercase text-sm font-medium bg-opacity-60">/Month</div>
          </div>
          <div >
            <ul className="space-y-2" >

              {pricingFeaturesList.map((text, key) => (
                <li key={key} className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor" className="text-green-600 size-4">
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd" />
                  </svg>
                  {text} </li>



              ))}





            </ul>
            <ButtonLogin islogin={islogin} name={name} extraStyle="w-full" />
          </div>
        </div>
      </section>


      {/* FAQ*/}

      <section id="FAQ">
        <div>
          <p className="text-sm uppercase text-center text-primary font-medium p-8">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center ">
            Frequently Asked Questions</h2>
          {faq.map((qa) => (
            <ul className="text-center max-w-lg mx-auto">
              <FAQ qa={qa} />

            </ul>

          ))
          }


        </div>
      </section>



    </main>
  );
}
