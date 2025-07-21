"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Switch } from "@/components/ui/switch";
import { FaRegEdit } from "react-icons/fa";
import DeleteAgent from "./components/DeleteAgent";

export default function AgentPage() {
  return (
    <div className="    h-full w-full flex justify-center items-center  py-4 md:py-6 xl:py-8">
      <div className="   w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto max-w-[720px]">
        <div className="flex justify-between">
          <div>
            <h1 className="mainH1">Retro Agent</h1>
            <span className="text-primary text-sm flex gap-0 items-end  ">
              <h1 className="mainH2">10</h1>/200
            </span>
            <div className="flex gap-1 flex-wrap my-4">
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Images
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Portfolio
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Feedback
              </div>
              <div className="px-2 py-1  border border-border inline-block   text-xs rounded-full">
                Blog
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <Switch
              id="airplane-mode"
              defaultChecked // Makes it ON by default
              className="data-[state=checked]:bg-green-500"
            />
            <FaRegEdit className="text-xl text-primary" />
            <DeleteAgent />
          </div>
        </div>

        <div>
          <div className="flex w-full   flex-col gap-6">
            <Tabs defaultValue="Playground">
              <TabsList>
                <TabsTrigger value="Playground">Playground</TabsTrigger>
                <TabsTrigger value="Platforms">Platforms</TabsTrigger>
                <TabsTrigger value="KnowledgeBase">Knowledge Base</TabsTrigger>
                <TabsTrigger value="Activity">Activity</TabsTrigger>
                <TabsTrigger value="CreditUsage">Credit Usage</TabsTrigger>
                <TabsTrigger value="Integrations">Integrations</TabsTrigger>
                <TabsTrigger value="Settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="Playground">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <div className="p-2 flex flex-col justify-between items-stretch   ">
                        <div className="">
                          <h1 className="mainH2">Playground</h1>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Platforms">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-6">
                      <div className="p-2 flex flex-col justify-between items-stretch   ">
                        <div className="">
                          <h1 className="mainH2">bb</h1>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="KnowledgeBase">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <h1>Knowledge Base </h1>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Activity">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <h1>Activity</h1>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="CreditUsage">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <h1>Credit Usage </h1>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Integrations">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <h1>Integrations</h1>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Settings">
                <Card>
                  <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                      <h1>Settings</h1>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
