import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 40,
    message: {
        success: false,
        message: "Too many requests from this IP, please try again later."
    },
    headers: true, 
})


