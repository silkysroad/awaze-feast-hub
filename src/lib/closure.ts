export const closureMessage = 'Closed Monday, October 5 for our final day of construction. We reopen Tuesday, October 6 at 3PM.';

export function isClosureDate(date: string) {
  return date >= '2026-10-05' && date <= '2026-10-05';
}

export function isTemporarilyClosed(now = new Date()) {
  return now.getTime() >= Date.parse('2026-10-05T00:00:00-04:00') &&
    now.getTime() < Date.parse('2026-10-06T00:00:00-04:00');
}
