import { Badge } from "@/components/ui/badge";
import { IoAlertCircle } from "react-icons/io5";

function BadgePage() {
  return (
    <div className="flex gap-2">
      <Badge variant="colorCute">Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge capitalize variant="destructive">
        destructive
      </Badge>
      <Badge capitalize variant="info">
        <span className="mr-1">info</span>
        <IoAlertCircle size={30} />
      </Badge>
    </div>
  );
}

export default BadgePage;
