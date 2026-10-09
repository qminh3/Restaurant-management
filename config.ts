import { z } from "zod";

export const ConfigSchema = z.object({
  NEXT_PUBLIC_API_ENDPOINT: z.string().url(),
  NEXT_PUBLIC_URL: z.string().url(),
});
