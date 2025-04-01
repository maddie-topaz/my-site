"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiOutlineMail } from "react-icons/hi";

export const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-circle btn-ghost hover:bg-base-300"
        aria-label="Open contact form"
      >
        <HiOutlineMail className="h-8 w-8 text-gray-700 dark:text-gray-200" />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

          <div className="relative bg-base-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-xl p-8 w-full max-w-lg z-50">
            <Dialog.Title className="text-2xl font-bold mb-4">Contact Me</Dialog.Title>
            <form
              method="POST"
              action="https://formspree.io/f/your-form-id"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border rounded bg-base-200 dark:bg-base-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded bg-base-200 dark:bg-base-300"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded bg-base-200 dark:bg-base-300"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </>
  );
};
