import { DialogDemo } from "@/components/DialogTest";
import supabase from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const revalidate = 0;

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: messages } = await supabase.from("messages").select();
  console.log(messages);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      {session ? (
        <DialogDemo user={user?.email} />
      ) : (
        <h2 className="font-bold text-lg">Login to send a message</h2>
      )}
      <div className="text-white border-t-2 border-b-2 h-[80vh] overflow-y-scroll p-2 sm:p-0 sm:w-1/2 my-4 relative">
        {messages?.map((msg) => (
          <div key={msg.id} className="flex items-start my-2">
            <h3>
              <span className="font-bold text-gray-300">{msg.email}:</span>{" "}
              {msg.message}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
