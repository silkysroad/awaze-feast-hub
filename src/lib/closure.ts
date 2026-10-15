export const closureMessage = 'Closed Thursday, October 15 for construction. We apologize for the inconvenience.';

export function isClosureDate(date: string) {
  return date >= '2026-10-15' && date <= '2026-10-15';
}

export function isTemporarilyClosed(now = new Date()) {
  return now.getTime() >= Date.parse('2026-10-15T00:00:00-04:00') &&
    now.getTime() < Date.parse('2026-10-16T00:00:00-04:00');
}
