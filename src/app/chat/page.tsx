"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/db";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User as UserType } from "@supabase/supabase-js";
import { Send } from "lucide-react";
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

  const handleSendChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
  return user ? (
    <div className="w-screen h-screen items-center flex flex-col pt-6 relative">
      <div className="w-full px-4 h-[90%] flex-grow-1 overflow-y-scroll">
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
      <form
        onSubmit={handleSendChat}
        className="w-full flex items-center bottom-0 mb-5 justify-center px-4"
      >
        <Input
          placeholder="Send a message..."
          className="bg-gray-100 border-none p-4 w-[70%]"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type="submit">
          <Send />
        </Button>
      </form>
    </div>
  ) : (
    <p>loading...</p>
  );
}
