import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";

function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2 justify-items-center">
      <Button>Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>

      <Button className="self-center" variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button capitalize={false}>
        <Mail className="mr-2 h-4 w-4" /> login with email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        please wait
      </Button>

      <Button asChild>
        <Link href="/">login</Link>
      </Button>

      <Button variant="personalizado">click me</Button>
    </div>
  );
}

export default ButtonPage;
