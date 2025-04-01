"use client"

import { Dialog } from "@headlessui/react"
import { useState } from "react"
import { HiOutlineMail } from "react-icons/hi"

export const ContactFormModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-circle btn-ghost hover:bg-base-300"
        aria-label="Open contact form"
      >
        <HiOutlineMail className="h-8 w-8 text-gray-700 dark:text-gray-200" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="bg-opacity-50 fixed inset-0 bg-black backdrop-blur-sm" />

          <div className="bg-base-100 relative z-50 w-full max-w-lg rounded-lg p-8 text-gray-900 shadow-xl dark:bg-gray-900 dark:text-white">
            <Dialog.Title className="mb-4 text-2xl font-bold">Contact Me</Dialog.Title>
            <form method="POST" action="https://formspree.io/f/your-form-id" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-base-200 dark:bg-base-300 w-full rounded border px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-base-200 dark:bg-base-300 w-full rounded border px-4 py-2"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="bg-base-200 dark:bg-base-300 w-full rounded border px-4 py-2"
              />
              <div className="flex justify-end gap-4">
                <button type="button" className="btn btn-ghost" onClick={() => setIsOpen(false)}>
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
  )
}
