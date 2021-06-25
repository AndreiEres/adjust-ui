export const cn = (...args: unknown[]): string =>
  args.filter((c) => !!c).join(' ')
