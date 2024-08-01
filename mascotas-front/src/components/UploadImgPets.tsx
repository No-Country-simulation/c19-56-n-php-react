"use cliente";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
interface UploadImegenProps {
  children: React.ReactNode;
}
export const UploadImgPets: React.FC<UploadImegenProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cargar nueva imagen</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Cargar nueva imagen</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
