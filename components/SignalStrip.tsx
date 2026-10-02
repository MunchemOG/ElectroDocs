'use client';
import {useId, useState} from "react";

// Illustrative numbers only: a path's tuned speed profile, and what battery voltage does to it.
const NOMINAL = 12.6;
const BATTERIES = [
    {id: "fresh", label: "Fresh", volts: 13.4},
    {id: "tuned", label: "Tuned", volts: 12.6},
    {id: "tired", label: "Tired", volts: 11.9},
] as const;

// Plot area inside a 640 x 220 viewBox; speed 1.0 (the tune) sits at y = 80.
const X0 = 44, X1 = 620, BASE = 196, UNIT = 116;

function smoothstep(t: number) {
    const c = Math.min(1, Math.max(0, t));
    return c * c * (3 - 2 * c);
}

/** Pedro's tuned speed along the path: accelerate, cruise, brake. */
function tunedSpeed(p: number) {
    if (p < 0.24) return smoothstep(p / 0.24);
    if (p > 0.74) return smoothstep((1 - p) / 0.26);
    return 1;
}

const PROFILE = Array.from({length: 97}, (_, i) => {
    const p = i / 96;
    return `${i === 0 ? "M" : "L"}${(X0 + p * (X1 - X0)).toFixed(1)} ${(BASE - tunedSpeed(p) * UNIT).toFixed(1)}`;
}).join(" ");

export default function SignalStrip() {
    const [battery, setBattery] = useState<(typeof BATTERIES)[number]>(BATTERIES[2]);
    const groupId = useId();
    const withoutScale = battery.volts / NOMINAL;
    const voltageScale = Math.min(1.5, Math.max(0.5, NOMINAL / battery.volts));

    return (
        <figure className="dromos-trace w-full rounded-2xl border border-fd-border bg-fd-card p-4 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <figcaption className="font-display text-lg font-semibold">
                    Same path, three batteries
                </figcaption>
                <div role="radiogroup" aria-labelledby={`${groupId}-label`}
                     className="inline-flex rounded-full border border-fd-border p-1">
                    <span id={`${groupId}-label`} className="sr-only">Battery</span>
                    {BATTERIES.map((b) => {
                        const active = b.id === battery.id;
                        return (
                            <button key={b.id} type="button" role="radio" aria-checked={active}
                                    onClick={() => setBattery(b)}
                                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium tabular-nums transition-colors duration-200 ${
                                        active
                                            ? "bg-fd-primary text-fd-primary-foreground"
                                            : "text-fd-muted-foreground hover:text-fd-foreground"
                                    }`}>
                                {b.label} {b.volts.toFixed(1)} V
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_15rem]">
                <div className="min-w-0">
                <svg viewBox="0 0 640 204" className="w-full" role="img"
                     aria-label={`Speed along a path. On a ${battery.volts} volt battery, without compensation the robot reaches ${Math.round(withoutScale * 100)}% of its tuned speed; with ElectroDromos it holds 100%.`}>
                    {Array.from({length: 11}, (_, i) => (
                        <line key={`v${i}`} x1={X0 + i * (X1 - X0) / 10} x2={X0 + i * (X1 - X0) / 10} y1={20} y2={BASE}
                              className="stroke-fd-border" strokeWidth={1}/>
                    ))}
                    {Array.from({length: 7}, (_, i) => (
                        <line key={`h${i}`} x1={X0} x2={X1} y1={BASE - i * 29.3} y2={BASE - i * 29.3}
                              className="stroke-fd-border" strokeWidth={1}/>
                    ))}

                    <path d={PROFILE} fill="none" strokeWidth={2.5} strokeDasharray="7 6"
                          className="stroke-dromos-battery"
                          style={{
                              transform: `scaleY(${withoutScale})`,
                              transformOrigin: `0px ${BASE}px`,
                              transformBox: "view-box",
                              transition: "transform 520ms cubic-bezier(0.16, 1, 0.3, 1)",
                          }}/>
                    <path d={PROFILE} data-draw fill="none" strokeWidth={3} pathLength={1}
                          className="stroke-dromos-signal"
                          style={{strokeDasharray: 1, animation: "dromos-draw 1.4s cubic-bezier(0.16, 1, 0.3, 1) both"}}/>
                </svg>
                <div className="mt-1 flex justify-between text-xs text-fd-muted-foreground"
                     style={{paddingInline: `${(X0 / 640) * 100}% ${((640 - X1) / 640) * 100}%`}}>
                    <span>Path start</span>
                    <span>End</span>
                </div>
                </div>

                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 self-center text-sm lg:grid-cols-1">
                    <div>
                        <dt className="text-fd-muted-foreground">Battery</dt>
                        <dd className="font-display text-2xl font-semibold tabular-nums text-dromos-battery">
                            {battery.volts.toFixed(1)} V
                        </dd>
                    </div>
                    <div>
                        <dt className="text-fd-muted-foreground">voltageScale</dt>
                        <dd className="font-display text-2xl font-semibold tabular-nums">
                            {voltageScale.toFixed(2)}×
                        </dd>
                    </div>
                    <div>
                        <dt className="flex items-center gap-2 text-fd-muted-foreground">
                            <span aria-hidden className="inline-block h-0.5 w-5 border-t-2 border-dashed border-dromos-battery"/>
                            Without
                        </dt>
                        <dd className="tabular-nums">{Math.round(withoutScale * 100)}% of tuned speed</dd>
                    </div>
                    <div>
                        <dt className="flex items-center gap-2 text-fd-muted-foreground">
                            <span aria-hidden className="inline-block h-0.5 w-5 bg-dromos-signal"/>
                            With ElectroDromos
                        </dt>
                        <dd className="tabular-nums">100% of tuned speed</dd>
                    </div>
                </dl>
            </div>
            <p className="mt-3 text-xs text-fd-muted-foreground">
                Illustration with nominalVoltage {NOMINAL} V, assuming speed tracks voltage; not measured robot data.
            </p>
            <style>{`@keyframes dromos-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }`}</style>
        </figure>
    );
}
