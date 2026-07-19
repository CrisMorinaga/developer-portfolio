import { createHmac } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(3, "1 h"),
	prefix: "portfolio:contact",
});

export function getRateLimitIdentifier(request: Request) {
	const forwardedFor = request.headers
		.get("x-forwarded-for")
		?.split(",")[0]
		?.trim();

	const ip = forwardedFor ?? request.headers.get("x-real-ip") ?? "unknown";

	return createHmac("sha256", process.env.CONTACT_RATE_LIMIT_SECRET!)
		.update(ip)
		.digest("hex");
}
