import { Separator } from "@/components/ui/separator";

import Tab1 from "./ui/tab1";
import Tab2 from "./ui/tab2";

const TabsPage = () => {
  return (
    <div className="flex w-full flex-col gap-3 justify-center items-center">
      <Tab1 />
      <Separator className="my-4" />
      <Tab2 />
    </div>
  );
};

export default TabsPage;
