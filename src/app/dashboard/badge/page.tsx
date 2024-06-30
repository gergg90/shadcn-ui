import { Badge } from "@/components/ui/badge";
import { IoAlertCircle } from "react-icons/io5";

function BadgePage() {
  return (
    <div className="flex gap-2">
      <Badge variant="colorCute">Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="info">
        <IoAlertCircle size={30} />
      </Badge>
    </div>
  );
}

export default BadgePage;
