/**
 * @typedef {import('../types').HTTPClientExtraOptions} HTTPClientExtraOptions
 * @typedef {import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>} BootstrapAPI
 */
export const createReset: import("../lib/configure.js").Factory<(options?: (import("ipfs-core-types").AbortOptions & import("../types").HTTPClientExtraOptions) | undefined) => Promise<{
    Peers: import("@multiformats/multiaddr").Multiaddr[];
}>>;
export type HTTPClientExtraOptions = import('../types').HTTPClientExtraOptions;
export type BootstrapAPI = import('ipfs-core-types/src/bootstrap').API<HTTPClientExtraOptions>;
//# sourceMappingURL=reset.d.ts.map