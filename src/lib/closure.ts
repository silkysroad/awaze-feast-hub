export const closureMessage = 'Closed Thanksgiving, Thursday, November 26. We reopen Friday, November 27 at 2PM.';

export function isClosureDate(date: string) {
  return date >= '2026-11-26' && date <= '2026-11-26';
}

export function isTemporarilyClosed(now = new Date()) {
  return now.getTime() >= Date.parse('2026-11-26T00:00:00-05:00') &&
    now.getTime() < Date.parse('2026-11-27T00:00:00-05:00');
}

export function showClosureNotice(now = new Date()) {
  return now.getTime() >= Date.parse('2026-11-25T00:00:00-05:00') &&
    now.getTime() < Date.parse('2026-11-27T00:00:00-05:00');
}
