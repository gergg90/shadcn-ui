import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCheckIcon, RocketIcon, Terminal } from "lucide-react";

function AlertPage() {
  return (
    <div className="grid gap-3">
      <Alert variant={"destructive"}>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Rocket</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"success"}>
        <CheckCheckIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default AlertPage;
