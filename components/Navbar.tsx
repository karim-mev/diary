import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 mb-2">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
        <div />
        <div>
          {user ? (
            <div className="flex items-center gap-4 text-white">
              Hey, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/signup"
              className="py-2 px-4 rounded-md no-underline bg-white text-black hover:bg-btn-background-hover"
            >
              SignUp
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
