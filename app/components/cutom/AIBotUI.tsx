"use client";

import { useState } from "react";
import { Stethoscope } from "lucide-react";


export default function AIBotUI() {
    const [open, setOpen] = useState(false);

    const messages = [
        {
            role: "bot",
            text: "Hello 👋 How can I help you today?",
        },
        {
            role: "user",
            text: "Can you generate a report for this month?",
        },
        {
            role: "bot",
            text: "Absolutely! I can help generate a detailed monthly report.",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* AI Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
            >
                <Stethoscope size={26} />
            </button>

            {/* Chat Box */}
            {open && (
                <div className="absolute bottom-20 right-0 w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">
                                AI
                            </div>

                            <div>
                                <h2 className="text-white text-xl font-semibold">
                                    AI Assistant
                                </h2>
                                <p className="text-white/80 text-sm">
                                    Online • Ready to help
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-white text-xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="h-[400px] overflow-y-auto p-6 space-y-5 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === "user"
                                            ? "bg-emerald-500 text-white rounded-br-md"
                                            : "bg-white text-gray-700 rounded-bl-md border border-gray-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-gray-200 bg-white p-4 flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Ask something..."
                            className="flex-1 h-12 rounded-2xl border border-gray-300 px-4 outline-none focus:ring-2 focus:ring-emerald-400"
                        />

                        <button className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 h-12 rounded-2xl font-medium shadow-lg">
                            Send
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
}