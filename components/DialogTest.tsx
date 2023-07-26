"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import supabase from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function DialogDemo({ user }: any) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  function handleInput(e: any) {
    e.preventDefault();
    setMessage(e.target.value);
  }

  async function sendMessage() {
    const { error } = await supabase
      .from("messages")
      .insert({ message: message, email: user });
    router.refresh();
    if (error) {
      console.log(error);
    }
  }

  console.log(message);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Send Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send a Message</DialogTitle>
          <DialogDescription>Be nice dont say sth bad :/</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Input
            id="name"
            value={message}
            className="w-full"
            placeholder="you are cool ig"
            onChange={handleInput}
          />
        </div>
        <DialogFooter>
          <Button onClick={sendMessage}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
