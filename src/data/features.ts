export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export const features: Feature[] = [
    {
        id: "neural-sync",
        title: "Neural Sync",
        description: "Distributed infrastructure that scales with zero manual intervention. Adapts to load spikes in microseconds.",
        icon: "Zap"
    },
    {
        id: "quantum-sec",
        title: "Quantum Secure",
        description: "Post-quantum encryption algorithms protect your data against the threats of tomorrow. Zero-trust by default.",
        icon: "Lock"
    },
    {
        id: "edge-compute",
        title: "Edge Substrate",
        description: "Deploy logic globally within 400ms. The world is your server with our distributed edge compute mesh.",
        icon: "Cpu"
    },
    {
        id: "holographic-viz",
        title: "Holo Viz",
        description: "Real-time 3D data visualization that brings your metrics to life. See your stack like never before.",
        icon: "Globe"
    }
];
