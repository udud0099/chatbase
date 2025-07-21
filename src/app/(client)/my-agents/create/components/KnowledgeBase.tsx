// import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent, 
  CardFooter, 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function KnowledgeBase() {
  return (
    <>
      <div>
        <h1 className="mainH2 my-4">Knowledge Base</h1>
        <div>
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
                    <div className="py-4 px-6 text-center cursor-pointer">
                      <h1 className="mainH2">
                        Drop your files here or{" "}
                        <span className="text-[#2563EB]">browse</span>
                      </h1>
                      <p className="text-primary text-sm">Maximum size: 50MB</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Text">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="flex flex-col gap-y-4">
                      <div className="grid w-full  items-center gap-3">
                        <Label htmlFor="Title" className="text-subText text-sm">
                          Title
                        </Label>
                        <Input type="text" id="Title" placeholder="Title" />
                      </div>
                      <div className="grid w-full gap-3">
                        <Label
                          htmlFor="Content"
                          className="text-subText text-sm"
                        >
                          Content
                        </Label>
                        <Textarea
                          placeholder="Type your Content here."
                          id="Content"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Add Content</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="Website">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="py-4 px-6 text-center cursor-pointer">
                      <h1 className="mainH2">
                        Drop your files here or{" "}
                        <span className="text-[#2563EB]">browse</span>
                      </h1>
                      <p className="text-primary text-sm">Maximum size: 50MB</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Q&A">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="flex flex-col gap-y-4">
                      <div className="grid w-full  items-center gap-3">
                        <Label htmlFor="Title" className="text-subText text-sm">
                          Title
                        </Label>
                        <Input type="text" id="Title" placeholder="Title" />
                      </div>
                      <div className="grid w-full  items-center gap-3">
                        <Label
                          htmlFor="Question"
                          className="text-subText text-sm"
                        >
                          Question
                        </Label>
                        <Input
                          type="text"
                          id="Question"
                          placeholder="Question"
                        />
                      </div>
                      <div className="grid w-full  items-center gap-3">
                        <h1 className="mainH2">+ Add another question</h1>
                      </div>
                      <div className="grid w-full gap-3">
                        <Label
                          htmlFor="Answer"
                          className="text-subText text-sm"
                        >
                          Answer
                        </Label>
                        <Textarea
                          placeholder="Type your Answer here."
                          id="Answer"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Add QnA</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-screen bg-amber-300"></div> */}
    </>
  );
}
