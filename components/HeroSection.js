"use client";

import Image from "next/image";
import productDemo from "@/public/assets/productDemo.jpeg";
import ButtonLogin from "@/components/ButtonLogin";
import ButtonSecondary from "@/components/ButtonSecondary";
import { motion } from "framer-motion";

export default function HeroSection({ session }) { 
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
                    >
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Collect Customer Feedback &</span>{" "}
                            <span className="block text-indigo-600 xl:inline">Build Better Products</span>
                            <span className="block text-indigo-600 xl:inline">—100% Free!</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            No hidden costs, no limits. Get valuable insights, prioritize features, and create better user
                            experiences—all for free.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <ButtonLogin session={session} />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <ButtonSecondary session={session} extraStyle="text-indigo-700 bg-indigo-100 hover:bg-indigo-200" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                    >
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                                className="relative block w-full bg-white sm:rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={productDemo}
                                    alt="RapideCode customer feedback illustration"
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}
