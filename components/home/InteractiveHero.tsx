"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Wind, Thermometer, Zap, ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export function InteractiveHero() {
    const [upgrades, setUpgrades] = useState({
        solar: false,
        heatPump: false,
        insulation: false
    })

    const [bill, setBill] = useState(250)

    // Calculate bill based on upgrades
    useEffect(() => {
        let newBill = 250
        if (upgrades.solar) newBill -= 95
        if (upgrades.heatPump) newBill -= 55
        if (upgrades.insulation) newBill -= 30
        setBill(newBill)
    }, [upgrades])

    const toggleUpgrade = (key: keyof typeof upgrades) => {
        setUpgrades(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 pb-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* TEXT CONTENT */}
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
                            <Zap className="w-4 h-4 fill-current" />
                            <span>Interactive Energy Twin v1.0</span>
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
                            Stop Guessing. <br />
                            <span className="text-green-600">See Your Savings.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg">
                            Don't just read about energy efficiency. Toggle the upgrades on our virtual home to see how much you could save instantly.
                        </p>
                        <div className="text-sm text-slate-500 bg-slate-50 py-2 px-4 rounded-full inline-block border border-slate-100 mb-8">
                            ZunoEnergy is an educational tool only. We don’t sell solar or energy plans, and you can see full results without entering an email.
                        </div>
                        <div className="flex gap-4">
                            <Link
                                href="/calculator"
                                className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-green-700 hover:scale-105 transition-all"
                            >
                                Get My Exact Report <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* INTERACTIVE HOUSE */}
                <div className="relative h-[600px] w-full flex items-center justify-center">

                    {/* Background blob */}
                    <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl transform scale-75" />

                    {/* House Image Layering */}
                    <div className="relative w-[500px] h-[500px] transition-all duration-500">
                        {/* Base House */}
                        <Image
                            src="/assets/house-base.jpg"
                            alt="Interactive House Base"
                            fill
                            className={`object-contain transition-opacity duration-500 ${upgrades.solar ? 'opacity-0' : 'opacity-100'}`}
                            priority
                        />
                        {/* Solar House Overlay */}
                        <Image
                            src="/assets/house-solar.jpg"
                            alt="Interactive House Solar"
                            fill
                            className={`object-contain transition-opacity duration-500 absolute inset-0 ${upgrades.solar ? 'opacity-100' : 'opacity-0'}`}
                            priority
                        />

                        {/* Floaty Toggles */}
                        {/* 1. Solar Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleUpgrade('solar')}
                            className={`absolute -top-4 right-10 p-4 rounded-2xl shadow-xl backdrop-blur-md border-2 transition-all ${upgrades.solar ? 'bg-green-500 border-green-400 text-white' : 'bg-white/80 border-white text-slate-600'}`}
                        >
                            <Sun className={`w-8 h-8 mb-1 mx-auto ${upgrades.solar ? 'fill-white animate-spin-slow' : 'text-orange-500'}`} />
                            <div className="text-xs font-bold">Add Solar</div>
                            {upgrades.solar && <div className="text-xs opacity-90">-$95/mo</div>}
                        </motion.button>

                        {/* 2. Heat Pump Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleUpgrade('heatPump')}
                            className={`absolute bottom-20 -left-4 p-4 rounded-2xl shadow-xl backdrop-blur-md border-2 transition-all ${upgrades.heatPump ? 'bg-blue-500 border-blue-400 text-white' : 'bg-white/80 border-white text-slate-600'}`}
                        >
                            <Wind className={`w-8 h-8 mb-1 mx-auto ${upgrades.heatPump ? 'animate-pulse' : 'text-blue-400'}`} />
                            <div className="text-xs font-bold">Heat Pump</div>
                            {upgrades.heatPump && <div className="text-xs opacity-90">-$55/mo</div>}
                        </motion.button>

                        {/* 3. Insulation Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleUpgrade('insulation')}
                            className={`absolute -bottom-8 right-20 p-4 rounded-2xl shadow-xl backdrop-blur-md border-2 transition-all ${upgrades.insulation ? 'bg-amber-500 border-amber-400 text-white' : 'bg-white/80 border-white text-slate-600'}`}
                        >
                            <Thermometer className={`w-8 h-8 mb-1 mx-auto ${upgrades.insulation ? '' : 'text-amber-500'}`} />
                            <div className="text-xs font-bold">Insulation</div>
                            {upgrades.insulation && <div className="text-xs opacity-90">-$30/mo</div>}
                        </motion.button>
                    </div>

                    {/* LIVE BILL TICKER */}
                    <motion.div
                        className="absolute top-10 left-0 bg-white/90 backdrop-blur rounded-2xl p-6 shadow-2xl border border-slate-100"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Est. Monthly Bill</div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-black text-slate-900 tracking-tight">
                                ${bill}
                            </span>
                            <span className="text-xl text-slate-400 font-medium">/mo</span>
                        </div>
                        {bill < 250 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-2 text-sm font-bold text-green-600 flex items-center gap-1"
                            >
                                <Check className="w-4 h-4" /> Saving ${250 - bill}/mo
                            </motion.div>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
