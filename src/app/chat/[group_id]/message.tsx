"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Languages,
  Mail,
  MessageSquare,
  MoreVertical,
  PlusCircle,
  User,
} from "lucide-react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
export default function Message({
  message,
  index,
  username,
}: {
  message: any;
  index: number;
  username: string | undefined;
}) {
  const handleTranslate = async (content: string, to: string) => {
    const body = {
      content,
      originalLanguage: "english",
      resultLanguage: to,
    };

    try {
      const res = await axios.post("/api/translate", body);
      const newMessages = res.data.map((message: any) => {
        if (message.text.trim().equals(content.trim())) {
          return {
            text: res.data,
            username: "TikTok Bot",
            id: Math.random(),
          };
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      key={index}
      className={cn(
        "flex w-full gap-4 py-4",
        message.username === username
          ? "justify-start flex-row-reverse pl-10"
          : "justify-start pr-10"
      )}
    >
      <Avatar className="rounded-full border">
        <AvatarImage />
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "p-4 border border-opacity-50 border-rounded flex flex-col rounded-xl",
          message.username === username ? "bg-gray-100" : ""
        )}
      >
        <div className="text-red-500 font-bold">{message.username}</div>
        <div ref={message}>{message.text}</div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center justify-center opacity-60">
            <MoreVertical />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-20 bg-white">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Languages className="mr-2 h-4 w-4" />
              <span>Translate</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="bg-white">
                <DropdownMenuItem
                  onClick={() => handleTranslate(message.text, "chinese")}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Chinese</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleTranslate(message.text, "english")}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => handleTranslate(message.text, "malay")}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>Malay</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
