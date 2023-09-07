"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/db";
import { User, Send, Laugh } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserType } from "@supabase/supabase-js";
import Image from "next/image";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
const commands = [
  {
    value: "/schedule",
    label: "/schedule: schedule your pick up time",
  },
  {
    value: "/whoisleader",
    label: "/whoisleader: find out who is the leader",
  },
  {
    value: "/mypicktime",
    label: "/mypicktime: get your pick up time information",
  },
  {
    value: "/orderstatus",
    label: "/orderstatus: get your order status",
  },
];

export default function Chat() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState<null | UserType>(null);
  const lastMessageRef = useRef<any>(null);
  const username = user?.email?.split("@")[0];
  useEffect(() => {
    const fetchMessages = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      const { data, error } = await supabase.from("messages").select("*");
      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        setMessages(data as any);
      }
    };

    fetchMessages();
    const channel = supabase
      .channel("db-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prevMessages) => [...prevMessages, payload.new] as any);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    lastMessageRef?.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }, [messages.length]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.startsWith("/")) {
      handleSendCommand();
    } else {
      handleSendChat();
    }
  };
  console.log(messages);
  const handleSendChat = async () => {
    if (user && text) {
      const { data, error } = await supabase.from("messages").insert([
        {
          text: text,
          username: username,
        },
      ]);

      if (error) {
        console.error("Error sending chat:", error);
      } else {
        setText("");
      }
    }
  };

  const handleSendCommand = () => {
    let message = "";
    if (text === "/schedule") {
      message = "schedule";
    } else if (text === "/whoisleader") {
      message = "whoismyleader";
    } else if (text === "/mypicktime") {
      message = "mypicktime";
    } else if (text === "/orderstatus") {
      message = "orderstatus";
    } else {
      message = "Sorry, we do not recognize your command. Can you try again?";
    }
    setMessages((prevMessages) => {
      const newMessage = {
        text: text,
        username,
        id: Math.random(),
      };
      return [...prevMessages, newMessage] as any;
    });
    setText("");

    setMessages((prevMessages) => {
      const newMessage = {
        text: message,
        username: "TikTok Bot",
        id: Math.random(),
      };
      return [...prevMessages, newMessage] as any;
    });
  };

  return user ? (
    <div className="w-screen h-screen items-center flex flex-col pt-6 relative">
      <div className="w-full px-4 h-[80%] flex-grow-1 overflow-y-scroll">
        {messages.map((message: any, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full gap-4 py-4",
              message.username === username
                ? "justify-start flex-row-reverse"
                : "justify-start "
            )}
          >
            <Avatar className="rounded-full border">
              <AvatarImage src="" />
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
              <div>{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={lastMessageRef}></div>
      </div>
      <hr className="w-screen inline-block mb-3" />
      <div className="w-screen relative">
        <Command>
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center bottom-0 mb-5 justify-center pl-4"
          >
            <div className="relative w-[85%]">
              <CommandInput
                placeholder="Send a message..."
                className="bg-gray-100 border-none py-4 pl-4 pr-14 rounded-xl"
                onValueChange={setText}
                value={text}
              />
              <Laugh className="absolute right-4 top-[50%] -translate-y-[50%]" />
            </div>
            <Button type="submit">
              <Send className="opacity-40 bg-gray-100" />
            </Button>
          </form>
          {text.startsWith("/") &&
            !commands.map((command) => command.value).includes(text) && (
              <div className={cn("absolute bottom-[100%]  bg-white", "w-full")}>
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <hr className="w-[97%] mx-auto" />
                    {commands.map((command) => (
                      <CommandItem key={command.value}>
                        <div
                          onClick={() => {
                            setText(command.value);
                          }}
                        >
                          {command.label}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </div>
            )}
        </Command>
      </div>
    </div>
  ) : (
    <div className="flex w-screen h-screen items-center justify-center">
      <Image src={"/Loading.svg"} alt="Loading..." width={100} height={100} />
    </div>
  );
}
