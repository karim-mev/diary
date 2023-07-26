"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const supabase = createClientComponentClient();
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  async function handleLogin(data: any) {
    try {
      await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-2 text-white sm:w-1/6 w-2/3 my-10 "
        onSubmit={handleSubmit(handleLogin)}
      >
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link href="/signup">Create an account</Link>
    </>
  );
}
