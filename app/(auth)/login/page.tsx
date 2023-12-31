import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Login from "./Login";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <Login />
    </>
  );
}
