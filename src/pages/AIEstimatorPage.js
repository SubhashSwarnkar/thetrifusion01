import React, { useState, useEffect, useRef } from "react";
import Header from "parts/Header";
import Footer from "parts/Footer";
import { Fade } from "react-awesome-reveal";
import { estimateProject } from "utils/openai";

export default function AIEstimatorPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI project estimator. Please describe your project idea and I'll help you estimate the cost, timeline, and features needed."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await estimateProject(input, messages);
      
      const aiResponse = {
        role: "assistant",
        content: response.content
      };

      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again or contact us directly at TheTrifusion@gmail.com"
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Header />
      <section className="container mx-auto px-5 py-20">
        <Fade direction="up" triggerOnce>
          <div className="text-center mb-16">
            <h1 className="text-5xl text-theme-blue dark:text-white font-bold mb-5">
              AI Project Estimator
            </h1>
            <p className="font-light text-xl text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
              Describe your project idea and get instant AI-powered estimates for cost, timeline, and features.
            </p>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-light-theme-purple dark:border-gray-700 overflow-hidden">
              <div className="h-96 sm:h-[500px] overflow-y-auto p-4 sm:p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === "user"
                          ? "bg-theme-purple text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="border-t p-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your project idea..."
                    className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-theme-purple focus:border-theme-purple resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    rows="2"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className="px-6 py-3 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium whitespace-nowrap"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
              <p>
                Need more accurate estimates?{" "}
                <a href="/contact" className="text-theme-purple dark:text-purple-400 hover:underline">
                  Contact us directly
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
      <Footer />
    </>
  );
}

