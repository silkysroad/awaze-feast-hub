export const closureMessage = 'Awaze is temporarily closed September 28–October 4, 2026. Dine-in, pickup and delivery are unavailable during this time.';

export function isClosureDate(date: string) {
  return date >= '2026-09-28' && date <= '2026-10-04';
}

export function isTemporarilyClosed(now = new Date()) {
  return now.getTime() >= Date.parse('2026-09-28T00:00:00-04:00') &&
    now.getTime() < Date.parse('2026-10-05T00:00:00-04:00');
}
