"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How does RapideCode work?",
        answer:
            "Create a free profile, generate your unique feedback link, and share it with clients. Clients can submit feature requests and upvote existing ones.",
    },
    {
        question: "Is RapideCode really free?",
        answer:
            "Yes! RapideCode is 100% free with no hidden costs. Collect unlimited feedback and prioritize features based on real user votes.",
    },
    {
        question: "Can I customize my feedback page?",
        answer:
            "Yes! You can personalize your feedback page with your brand, logo, and custom descriptions to match your business identity.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null); // Removed TypeScript type annotation

    return (
        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="faqs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
                        Frequently Asked Questions
                    </h2>
                    <dl className="space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="pt-6">
                                <dt className="text-lg">
                                    <motion.button
                                        className="text-left w-full flex justify-between items-start text-gray-400"
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    >
                                        <span className="font-medium text-gray-900">{faq.question}</span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                                <ChevronDown className="h-6 w-6" aria-hidden="true" />
                                            </motion.span>
                                        </span>
                                    </motion.button>
                                </dt>
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.dd
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 },
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <motion.p
                                                variants={{ collapsed: { y: -10 }, open: { y: 0 } }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-2 pr-12 text-base text-gray-500"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </motion.dd>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
