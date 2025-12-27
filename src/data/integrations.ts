export interface Integration {
    name: string;
    category: "DevOps" | "Database" | "Cloud" | "Security";
    icon: string;
}

export const integrations: Integration[] = [
    { name: "GitHub", category: "DevOps", icon: "Github" },
    { name: "Vercel", category: "Cloud", icon: "Zap" },
    { name: "AWS", category: "Cloud", icon: "Globe" },
    { name: "PostgreSQL", category: "Database", icon: "Database" },
    { name: "Redis", category: "Database", icon: "Cpu" },
    { name: "Snyk", category: "Security", icon: "Lock" },
    { name: "Stripe", category: "DevOps", icon: "CreditCard" },
    { name: "Slack", category: "DevOps", icon: "MessageSquare" },
];
