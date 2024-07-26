import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";



export const wixClientServer = async () => {
  // let refreshToken;


  // try {
  //   const cookieStore = cookies();
  //   refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  // } catch (e) {
  //   console.error('Error parsing refresh token:', e);
  //   throw new Error('Failed to parse refresh token');
  // }

  // if (!refreshToken) {
  //   throw new Error('Refresh token not found');
  // }

  const wixClient =  createClient({
    modules: {
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      // tokens: {
      //   refreshToken,
      //   accessToken: { value: "", expiresAt: 0 },
      // },
    }),
  });

  return wixClient;
}