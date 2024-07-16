"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SonnerName {
  name: string;
  lastName: string;
  email: string;
}

const SonnerPage = () => {
  const dateNow = new Date();

  const promise = (): Promise<SonnerName> =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            name: "Gergg",
            lastName: "Gutierrez",
            email: "gergg@gmail.com",
          }),
        2000
      );
    });

  return (
    <div className="grid grid-cols-4 gap-4">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: `${dateNow}`,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success("Event has been created", {
            duration: 10000,
            description: `${dateNow}`,
            action: {
              label: "Close",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.promise(promise, {
            loading: "loading...",
            success: (data) => {
              return `User ${data.name} has been created: Email: ${data.email}`;
            },
            error: "Error",
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
};

export default SonnerPage;
