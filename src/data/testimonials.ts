export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        quote: "HoloStack didn't just change our infrastructure; it changed how we think about scale. The visual feedback is unparalleled.",
        author: "Elena Vance",
        role: "CTO @ Black Mesa"
    },
    {
        quote: "The glassmorphism isn't just aesthetic—it's functional. We can see layers of our stack that were previously invisible.",
        author: "Isaac Kleiner",
        role: "Lead Engineer @ Aperture"
    },
    {
        quote: "Scaling from 10k to 10M users was seamless. HoloStack's neural substrate is the real deal.",
        author: "Barney Calhoun",
        role: "DevOps Lead @ Civil Protection"
    }
];
