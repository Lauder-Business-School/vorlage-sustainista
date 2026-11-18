// AgentMail loads x402 only when payment credentials are configured; this site does not use x402.
const unsupported = (): never => {
  throw new Error("AgentMail x402 payments are not enabled for this application.");
};

export const wrapFetchWithPayment = (fetch: typeof globalThis.fetch, client: unknown) => {
  void fetch;
  void client;
  return unsupported();
};

export class x402HTTPClient {
  constructor(client: unknown) {
    void client;
    unsupported();
  }
}

export async function probe402(url: string): Promise<never> {
  void url;
  return unsupported();
}
