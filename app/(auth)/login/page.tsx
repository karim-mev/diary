"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Login() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function handleSignUp() {
    await supabase.auth.signUp({
      email: "thaleoussendaris@gmail.com",
      password: "thaleoussen",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  async function handleLogin() {
    await supabase.auth.signInWithPassword({
      email: "thaleoussendaris@gmail.com",
      password: "thaleoussen",
    });
    router.push("/");
  }

  async function signout() {
    supabase.auth.signOut();
  }

  return (
    <div className="flex flex-col gap-2 text-white">
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="password" />

      <Button onClick={handleLogin}>Login</Button>
      {/* <button onClick={handleSignUp}>SignUp</button>
      <button onClick={signout}>signout</button>
      <button onClick={handleLogin}>Login</button> */}
    </div>
  );
}
