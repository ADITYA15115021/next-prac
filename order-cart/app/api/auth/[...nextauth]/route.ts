import NextAuth from "next-auth";
import { authOptions } from "./options";  // Ensure the correct path

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
