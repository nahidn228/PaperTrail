export const role = {
  admin: "Admin",
  user: "User",
};

export const ROLES = ["Admin", "User"] as const;
export type TRole = (typeof ROLES)[number];
