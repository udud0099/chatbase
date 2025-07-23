// import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "./FileUploader";
import DeleteAgent from "../../[agentId]/components/DeleteAgent";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsChatLeftQuote } from "react-icons/bs";

export default function KnowledgeBase() {
  return (
    <>
      <div>
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
                      <div className="grid w-full gap-3">
                        <Button>Add Content </Button>
                      </div>
                    </div>
                    <div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="mainH3">Added Content Sources</h3>
                          <div className="text-sm text-gray-600">
                            Total No.: <span className="font-medium">3</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3  rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <BsFileEarmarkPlus className="h-6 w-6 text-gray-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                  Content title 1
                                </p>
                                <p className="text-xs text-gray-500">
                                  Content Des
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center">
                              <FaRegEdit className="text-xl text-primary" />
                              <DeleteAgent />
                              <IoIosArrowForward />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Website">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="flex flex-col gap-y-4">
                      <div className="grid w-full  items-center gap-3">
                        <h1 className="mainH1 mb-1">Add Links</h1>
                        <Label htmlFor="Title" className="text-subText text-sm">
                          URL
                        </Label>
                        <Input
                          type="text"
                          id="Title"
                          placeholder="e.g. www.example.com"
                        />
                      </div>
                      <div className="grid w-full gap-3">
                        <Button>Fetch Link</Button>
                      </div>
                    </div>
                    <div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="mainH3">Added Website Sources</h3>
                          <div className="text-sm text-gray-600">
                            Total Website:{" "}
                            <span className="font-medium">3</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3  rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <CiGlobe className="h-6 w-6 text-gray-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                  https://amoebalabs.co
                                </p>
                                <p className="text-xs text-gray-500">
                                  Last crawled just now{" "}
                                  <ul className="inline-block list-inside list-disc ml-2">
                                    <li>1 link(s) found</li>
                                  </ul>
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center">
                              <FaRegEdit className="text-xl text-primary" />
                              <DeleteAgent />
                              <IoIosArrowForward />
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <div className="grid w-full gap-3">
                        <Button>Add QnA</Button>
                      </div>
                    </div>
                    <div>
                      <div className="mt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="mainH3">Added Q & A Sources</h3>
                          <div className="text-sm text-gray-600">
                            Total Q&A: <span className="font-medium">3</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3  rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <BsChatLeftQuote className="h-6 w-6 text-gray-600" />
                              <div>
                                <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                                  Title 1
                                </p>
                                <p className="text-xs text-gray-500">
                                  4 Questions{" "}
                                  <ul className="inline-block list-inside list-disc ml-2">
                                    <li>1 Answer</li>
                                  </ul>
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center">
                              <FaRegEdit className="text-xl text-primary" />
                              <DeleteAgent />
                              <IoIosArrowForward />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
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
