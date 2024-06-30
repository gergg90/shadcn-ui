import DialogBase from "@/components/dialog/DialogBase";
import { DialogCloseButton } from "@/components/dialog/DialogCloseButton";

function DialogPage() {
  return (
    <>
      <div className="flex gap-3">
        <DialogBase />
        <DialogCloseButton />
      </div>
    </>
  );
}

export default DialogPage;
