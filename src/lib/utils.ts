import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function throwIfHttpResponseError(e: Response) {
  if (e.ok) return;
  throw new Error(JSON.stringify(await e.json()));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatUrlSearchParams(params: Record<string, any>): string {
  return Object.entries(params)
    .map(([param, val]) => `${param}=${encodeURIComponent(val)}`)
    .join("&");
}

export { throwIfHttpResponseError, formatUrlSearchParams, cn };
