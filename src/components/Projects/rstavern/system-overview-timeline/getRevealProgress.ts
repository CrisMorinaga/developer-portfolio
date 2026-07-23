export function getRevealProgress(
	currentProgress: number,
	nodePosition: number,
	isFirst: boolean,
) {
	if (isFirst) return 1;
	if (!Number.isFinite(nodePosition)) return 0;

	const revealStart = Math.max(0, nodePosition - 0.09);
	const revealEnd = Math.max(0.001, nodePosition);
	const revealDistance = revealEnd - revealStart;

	if (revealDistance <= 0) {
		return currentProgress >= revealEnd ? 1 : 0;
	}

	const localProgress = (currentProgress - revealStart) / revealDistance;

	return Math.min(1, Math.max(0, localProgress));
}
