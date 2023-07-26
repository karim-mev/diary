"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

export default function page() {
  const supabase = createClientComponentClient();
  const { register, handleSubmit } = useForm();
  const { toast } = useToast();

  async function handleSignUp(data: any) {
    try {
      await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      toast({
        title: "Well done",
        description: "Verify your email address",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-2 text-white sm:w-1/6 w-2/3 my-10"
        onSubmit={handleSubmit(handleSignUp)}
      >
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />

        <Button type="submit">Sign Up</Button>
      </form>
      <Link href="/login">back to login</Link>
    </>
  );
}
