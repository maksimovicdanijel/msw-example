import * as envalid from "envalid";
import dotenv from "dotenv";

dotenv.config();

export const env = envalid.cleanEnv(process.env, {
  PORT: envalid.num({ default: 3000 }),
});

export type EnvironmentVariables = typeof env;
