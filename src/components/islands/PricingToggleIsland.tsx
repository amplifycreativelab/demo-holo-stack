import { useState } from 'react';

export interface PricingPlan {
    id: string;
    name: string;
    monthlyPrice: number;
    annualPrice: number;
    description: string;
    features: PricingFeature[];
    isPopular?: boolean;
    ctaText?: string;
    badgeText?: string;
}

export interface PricingFeature {
    text: string;
    included: boolean;
    tooltip?: string;
}

interface Props {
    plans: PricingPlan[];
    onPlanSelect?: (planId: string) => void;
}

export default function PricingToggleIsland({ plans, onPlanSelect }: Props) {
    const [isAnnual, setIsAnnual] = useState(false);

    const handlePlanSelect = (planId: string) => {
        onPlanSelect?.(planId);
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6">
            {/* Toggle */}
            <div className="flex justify-center mb-16">
                <div 
                    className="glass p-1 rounded-full flex items-center gap-1"
                    role="radiogroup"
                    aria-label="Billing period"
                >
                    <button
                        onClick={() => setIsAnnual(false)}
                        role="radio"
                        aria-checked={!isAnnual}
                        tabIndex={!isAnnual ? 0 : -1}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            !isAnnual 
                                ? 'bg-holo-a text-white shadow-lg' 
                                : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsAnnual(true)}
                        role="radio"
                        aria-checked={isAnnual}
                        tabIndex={isAnnual ? 0 : -1}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isAnnual 
                                ? 'bg-holo-a text-white shadow-lg' 
                                : 'text-text-muted hover:text-text-primary'
                        }`}
                    >
                        Annual{' '}
                        <span className="text-[10px] ml-1 opacity-80 uppercase tracking-tighter">
                            -20%
                        </span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`glass rounded-[2rem] p-10 relative flex flex-col transition-all duration-500 hover:translate-y-[-8px] ${
                            plan.isPopular 
                                ? 'border-holo-a/50 shadow-[0_0_40px_rgba(124,92,255,0.15)] ring-1 ring-holo-a/20' 
                                : ''
                        }`}
                        role="article"
                        aria-label={`${plan.name} plan: ${plan.description}`}
                    >
                        {/* Badge */}
                        {plan.badgeText && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-holo-a text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-xl">
                                {plan.badgeText}
                            </div>
                        )}

                        {/* Plan Info */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-sm text-text-muted">{plan.description}</p>
                        </div>

                        {/* Price */}
                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$</span>
                            <span className="text-6xl font-bold tracking-tighter">
                                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                            </span>
                            <span className="text-text-muted">/mo</span>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-10 flex-grow" role="list">
                            {plan.features.map((feature, index) => (
                                <li 
                                    key={index}
                                    className={`flex items-center gap-3 text-sm ${
                                        feature.included 
                                            ? 'text-text-muted' 
                                            : 'text-text-disabled'
                                    }`}
                                >
                                    <div 
                                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                            feature.included 
                                                ? 'bg-holo-b/10' 
                                                : 'bg-white/5'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        {feature.included ? (
                                            <svg 
                                                className="w-3 h-3 text-holo-b" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="3" 
                                                    d="M5 13l4 4L19 7" 
                                                />
                                            </svg>
                                        ) : (
                                            <svg 
                                                className="w-3 h-3 text-text-disabled" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth="3" 
                                                    d="M6 18L18 6M6 6l12 12" 
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <span>{feature.text}</span>
                                    {feature.tooltip && (
                                        <span 
                                            className="ml-auto text-[10px] text-text-muted cursor-help"
                                            title={feature.tooltip}
                                            aria-label={`More information about ${feature.text}: ${feature.tooltip}`}
                                        >
                                            ℹ️
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <button
                            onClick={() => handlePlanSelect(plan.id)}
                            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
                                plan.isPopular 
                                    ? 'bg-holo-a text-white hover:bg-holo-a/90 shadow-lg shadow-holo-a/20' 
                                    : 'bg-white/5 border border-glass-edge hover:bg-white/10'
                            }`}
                            aria-label={`Select ${plan.name} plan`}
                        >
                            {plan.ctaText || 'Select Plan'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
