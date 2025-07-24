 
import { Card, CardContent } from "@/components/ui/card"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import FileUploader from "./FileUploader"; 
import AddAnotherQues from "./AddAnotherQues";
import KnowledgeBaseText from "./KnowledgeBaseText";
import KnowledgeBaseWebsite from "./KnowledgeBaseWebsite";

export default function KnowledgeBase() {
  return (
    <>
      <div className="flex w-full   flex-col gap-6">
        <Tabs defaultValue="Files">
          <TabsList>
            <TabsTrigger value="Files">Files</TabsTrigger>
            <TabsTrigger value="Text">Text</TabsTrigger>
            <TabsTrigger value="Website">Website</TabsTrigger>
            <TabsTrigger value="Q&A">Q & A</TabsTrigger>
          </TabsList>
          <TabsContent value="Files">
            <Card>
              <CardContent className="grid gap-6">
                {/* <h1 className="mainH2">
                        Drop your files here or{" "}
                        <span className="text-[#2563EB]">browse</span>
                      </h1>
                      <p className="text-primary text-sm">Maximum size: 50MB</p> */}

                <FileUploader />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Text">
            <Card>
              <CardContent className="grid gap-6">
                <KnowledgeBaseText />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Website">
            <Card>
              <CardContent className="grid gap-6">
                <KnowledgeBaseWebsite />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Q&A">
            <Card>
              <CardContent className="grid gap-6">
                
                  <AddAnotherQues />
                  
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      {/* <div className="w-full h-screen bg-amber-300"></div> */}
    </>
  );
}
