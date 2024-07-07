import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Tab1() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="name">Name</TabsTrigger>

          <TabsTrigger value="account">Account</TabsTrigger>

          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>

        <TabsContent value="name">Please write your name here.</TabsContent>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  );
}

export default Tab1;
