"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

export default function DialogPop() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-1/3">
        <DialogHeader>
          <DialogTitle>send a message</DialogTitle>
          <DialogDescription>
            make sure to be nice to me lol
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
