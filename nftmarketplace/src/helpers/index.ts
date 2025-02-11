export const minifyAddress = (address: string) => {
  const start = address.substring(0, 5);
  const end = address.substring(address.length - 4);
  return `${start}...${end}`;
};
export const ipfsToHTTPS = (url: string) => {
  if (!url.startsWith("ipfs://")) throw new Error("NOt an IPFS url");
  const cid = url.substring(7);
  return `https://ipfs.io/ipfs/${cid}`;
};
