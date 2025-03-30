'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillsIcons } from 'components/SkillsIcons';

export function Help() {
    return (
        <div className="mt-4 text-green-300">
            Available commands:
            <ul className="list-disc list-inside mt-1">
                <li><kbd className="kbd kbd-sm text-green-400 bg-black border-green-500 border">
                    help
                </kbd> — Show available commands</li>
                <li><kbd className="kbd kbd-sm text-green-400 bg-black border-green-500 border">ethos --show</kbd> — Learn about my technical philosophy</li>
                <li><kbd className="kbd kbd-sm text-green-400 bg-black border-green-500 border">clear</kbd> — Clear the terminal</li>
            </ul>
        </div>
    );
}

type Command = 'skills --show' | 'help';

export default function TerminalHero() {
    const [typedLine, setTypedLine] = useState('');
    const [lines, setLines] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [isIntroDone, setIsIntroDone] = useState(false);
    const [activeComponent, setActiveComponent] = useState<Command | null>(null);

    const fullText = '> yarn maddie-dev --launch';
    const introLines = [
        '📦 Installing portfolio dependencies...',
        '⚙️ Initializing dev environment...',
        '🔍 Fetching project highlights...',
        '✨ Deploying to DOM...',
        '✅ Site successfully launched! Welcome to Maddie\'s Portfolio!',
        '💡Tip: type help to see a list of available commands.',
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedLine(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setTypedLine('');
                    setLines([fullText]);
                    runIntroSequence();
                }, 400);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const runIntroSequence = async () => {
        for (let i = 0; i < introLines.length; i++) {
            await new Promise((res) => {
                setTimeout(() => {
                    setLines((prev) => [...prev, introLines[i]]);
                    res(true);
                }, 500);
            });
        }
        setIsIntroDone(true);
    };

    const handleInput = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase() as Command;
        setLines((prev) => [...prev, `> ${input}`]);

        if (cmd === 'skills --show' || cmd === 'help') {
            setActiveComponent(cmd);
        } else {
            setLines((prev) => [
                ...prev,
                `Command not recognized: '${cmd}'`,
                'Try typing "help".',
                '',
            ]);
            setActiveComponent(null);
        }

        setInput('');
    };

    return (
        <>
            <section className="h-screen w-screen bg-black text-green-400 font-mono flex items-center justify-center">
                <div className="w-full max-w-4xl bg-black border border-green-600 shadow-lg rounded-lg daisyui-box">
                    {/* Terminal Header */}
                    <div className="bg-neutral-900 p-3 rounded-t-lg flex items-center justify-between border-b border-green-600">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <span className="text-xs text-gray-300">maddie@portfolio: ~</span>
                        <div className="w-6" />
                    </div>

                    {/* Terminal Body */}
                    <div className="p-4 overflow-y-auto max-h-[75vh]">
                        <AnimatePresence>
                            {typedLine && (
                                <motion.div
                                    key="typing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {typedLine}
                                </motion.div>
                            )}
                            {lines.map((line, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="whitespace-pre-wrap"
                                >
                                    {line}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {activeComponent === 'help' && <Help />}
                    </div>



                    {isIntroDone && (
                        <form onSubmit={handleInput} className="flex items-center p-4 border-t border-green-600">
                            <span className="mr-2">&gt;</span>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-grow bg-transparent border-none focus:outline-none text-green-400 placeholder-green-600"
                                autoFocus
                                placeholder="Type a command..."
                            />
                        </form>
                    )}
                </div>
            </section>
            {activeComponent === 'ethos --show' && <SkillsIcons />}
        </>
    );
}
