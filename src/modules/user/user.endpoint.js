import { roles } from "../../services/roles.js";

export const endpoint={
    signin:[roles.User,roles.Admin],
    signup:[roles.User,roles.Admin]
}