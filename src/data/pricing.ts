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

export const pricingPlans: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter",
        monthlyPrice: 0,
        annualPrice: 0,
        description: "Perfect for exploring the holographic future.",
        features: [
            { text: "5 Neural Nodes", included: true },
            { text: "Standard Encryption", included: true },
            { text: "Community Support", included: true },
            { text: "Basic Analytics", included: true },
            { text: "Quantum Encryption", included: false, tooltip: "Available on Pro plan" },
            { text: "Custom Domains", included: false }
        ],
        ctaText: "Get Started Free",
        badgeText: "Free Forever"
    },
    {
        id: "pro",
        name: "Pro",
        monthlyPrice: 49,
        annualPrice: 39,
        description: "Advanced stack for high-growth teams.",
        features: [
            { text: "Unlimited Nodes", included: true },
            { text: "Quantum Encryption", included: true },
            { text: "24/7 Priority Support", included: true },
            { text: "Advanced Holo Viz", included: true },
            { text: "Custom Domains", included: true },
            { text: "API Access", included: true }
        ],
        isPopular: true,
        ctaText: "Start Pro Trial",
        badgeText: "Most Popular"
    },
    {
        id: "enterprise",
        name: "Enterprise",
        monthlyPrice: 199,
        annualPrice: 159,
        description: "The ultimate substrate for scale.",
        features: [
            { text: "Global Mesh Access", included: true },
            { text: "Dedicated Infrastructure", included: true },
            { text: "White-glove Onboarding", included: true },
            { text: "Audit Logs & SSO", included: true },
            { text: "Custom SLA", included: true },
            { text: "Dedicated Account Manager", included: true }
        ],
        ctaText: "Contact Sales",
        badgeText: "Enterprise"
    }
];
