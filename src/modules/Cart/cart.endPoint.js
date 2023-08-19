import { roles } from "./../../middleware/auth.middleware.js";

export const endPoint = {
    get: [roles.User],
    create: [roles.User],
    update: [roles.User],
    delete: [roles.User],
}