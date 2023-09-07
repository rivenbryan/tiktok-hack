"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState, useEffect } from "react";
import { supabase } from "@/lib/db";

export default function Chat() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from("messages").select("*");
      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        setMessages(data as any);
      }
    };

    fetchMessages();
    console.log("test");
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
          setMessages([...messages, payload.new] as any);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const handleSendChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const username = user?.email?.split("@")[0];

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
        // Message sent successfully
        setText(""); // Clear the input after sending
      }
    }
  };
  return (
    <div className="w-scren h-screen items-center justify-center flex flex-col">
      <div className="messages-container">
        {messages.map((message: any, index) => (
          <div key={index} className="message">
            <p>
              <strong>{message.username}</strong>: {message.text}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendChat}>
        <Input
          placeholder="Send a message here"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
