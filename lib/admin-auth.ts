import { getRuntimeEnv } from "@/lib/runtime-env";
import { getChatGPTUser } from "@/app/chatgpt-auth";

export async function getAdminState(){
  const env = getRuntimeEnv();
  if(!env.trustedAuthHeaders)return {ok:false as const,reason:"hosting" as const,user:null};
  const user=await getChatGPTUser();
  if(!user)return {ok:false as const,reason:"signin" as const,user:null};
  const configured=(env.ADMIN_EMAIL||"").trim().toLowerCase();
  const localPreview=user.email.toLowerCase()==="seedy@sites.test"&&!configured;
  if(!localPreview&&(!configured||user.email.toLowerCase()!==configured))return {ok:false as const,reason:configured?"unauthorized" as const:"configuration" as const,user};
  return {ok:true as const,user};
}
