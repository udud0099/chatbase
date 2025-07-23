import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TempTable from "./TempTable";

export default function ConnectedPlatforms() {
  return (
    <>
      <h1 className="mainH2 my-4">ConnectedPlatforms</h1>
      <div className="flex w-full   flex-col gap-6">
        <Tabs defaultValue="WhatsApp">
          <TabsList>
            <TabsTrigger value="WhatsApp">WhatsApp</TabsTrigger>
            <TabsTrigger value="Messenger">Messenger</TabsTrigger>
            <TabsTrigger value="Website">Website</TabsTrigger>
            <TabsTrigger value="Email">Email</TabsTrigger>
            <TabsTrigger value="Slack">Slack</TabsTrigger>
          </TabsList>
          <TabsContent value="WhatsApp">
            <Card>
              <CardContent className="grid gap-6">
                <TempTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Messenger">
            <Card>
              <CardContent className="grid gap-6">
                <TempTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Website">
            <Card>
              <CardContent className="grid gap-6">
                <TempTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Email">
            <Card>
              <CardContent className="grid gap-6">
                <TempTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Slack">
            <Card>
              <CardContent className="grid gap-6">
                <TempTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
