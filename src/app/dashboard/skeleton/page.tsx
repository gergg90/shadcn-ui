import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "123456".split("");
};

const SkeletonPage = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader>
            <Avatar>
              <AvatarImage src="https://github.com/gergg90.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Mas</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonPage;
