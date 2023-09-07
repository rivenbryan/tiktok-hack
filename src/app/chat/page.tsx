"use client";
import Link from "next/link";
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

const WHOISLEADER_REPLY_MESSAGES = ["Sarah"];
const SCHEDULE_REPLY_MESSAGES = [
  "The deadline for the purchase is up. The order now will be dispatched to the seller. Please click on the link below to a schedule a pickup timing",
  <SchedulePickupComponent
    scheduleURl="/schedule"
    title="Custsomizable T-Shirt"
    key={Math.random()}
  />,
];

const SCHEDULE_REPLY_MESSAGES_COMPONENT = [];
const UNKNOWN_REPLY_MESSAGE = [
  "Sorry, we do not recognize your command. Can you try again?",
];
const MYPICKTIME_REPLY_MESSAGES = [
  "Your pick up time is 12pm to 1pm, on Sunday, 13 June 2023",
];
const ORDERSTATUS_REPLY_MESSAGES = [
  "Your order is currently being processed. It will be arrived in 2 days time.",
];

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
    let replyMessages: any[] = [];
    if (text === "/schedule") {
      replyMessages = SCHEDULE_REPLY_MESSAGES;
    } else if (text === "/whoisleader") {
      replyMessages = WHOISLEADER_REPLY_MESSAGES;
    } else if (text === "/mypicktime") {
      replyMessages = MYPICKTIME_REPLY_MESSAGES;
    } else if (text === "/orderstatus") {
      replyMessages = ORDERSTATUS_REPLY_MESSAGES;
    } else {
      replyMessages = UNKNOWN_REPLY_MESSAGE;
    }
    setMessages((prevMessages) => {
      const newMessage = {
        text: <>text</>,
        username,
        id: Math.random(),
      };
      return [...prevMessages, newMessage] as any;
    });
    setText("");

    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        ...replyMessages.map((message) => ({
          text: message,
          username: "TikTok Bot",
          id: Math.random(),
        })),
      ] as any;
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

function SchedulePickupComponent({
  title,
  scheduleURl,
}: {
  title: string;
  scheduleURl: string;
}) {
  return (
    <>
      <div className="flex flex-col py-2">
        <div className="flex justify-between gap-2 mb-3">
          <Image
            alt=""
            width={100}
            height={100}
            className="h-14 w-14"
            src={"/product.png"}
          />
          <h1>{title}</h1>
        </div>
        <Link
          className="bg-red-500 p-4 text-white border inline-block w-[60%] font-semibold rounded-xl text-center"
          href={scheduleURl}
        >
          Schedule
        </Link>
      </div>
    </>
  );
}
