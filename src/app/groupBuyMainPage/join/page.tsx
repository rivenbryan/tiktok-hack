"use client";
import Container from "@/app/components/Container";
import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import Groupcard from "./components/Groupcard";
import Dropdownbox from "./components/Dropdownbox";
import { supabase } from "@/lib/db";
import Image from "next/image";
interface Group {
  groupname: string;
  location: string;
  deadline: string;
  groupleader: string;
  groupleaderRating: number;
  distance: number;
  days: number;
  profileLink: string;
}
type Props = {};

export default function Home({}: Props) {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [filterText, setFilterText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  console.log(groups)
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleTextboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("group")
          .select("*")
          .filter("groupleader", "ilike", `%${filterText}%`);
        console.log(data);
        setGroups(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [filterText]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("group").select("*");
        console.log(data);
        setGroups(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    setIsLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataWithOption2 = async () => {
      try {
        const { data, error } = await supabase
          .from("group")
          .select()
          .order("groupleaderRating", { ascending: false });
        setGroups(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchDataWithOption1 = async () => {
      try {
        const { data, error } = await supabase
          .from("group")
          .select()
          .order("distance", { ascending: true });
        setGroups(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    console.log("selectedOption" + selectedOption);
    if (selectedOption === "option1") {
      console.log("otpion 1");
      fetchDataWithOption1();
    } else if (selectedOption === "option2") {
      console.log("clicked");
      fetchDataWithOption2();
      // Your effect for 'Rating' option
    }
    console.log("hello");
  }, [selectedOption]);

  return (
    <Container navigateString="/groupBuyMainPage">
      <div className="flex m-5 justify-center items-center ">
        <h1 className="font-bold">Nearby Groups</h1>
        <div className="flex ml-auto justify-center items-center gap-1">
          <h1 className="text-xs">Sort By:</h1>
          <Dropdownbox
            handleOptionChange={handleOptionChange}
            selectedOption={selectedOption}
          />
        </div>
      </div>
      <Searchbar handleChange={handleTextboxChange} />
      {isLoading ? (
        <>
          <div className="h-full w-full flex opacity-50 bg-white justify-center items-center">
            <Image
              src={"/Loading.svg"}
              alt="Loading..."
              width={100}
              height={100}
              className="bg-none"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-3 items-center justify-center mt-2">
          {groups.map((group, index) => (
            <Groupcard
              profileLink={group.profileLink}
              days={group.days}
              key={index}
              distance={group.distance}
              groupleader={group.groupleader}
              groupleaderRating={group.groupleaderRating}
              groupname={group.groupname}
              location={group.location}
              deadline={group.deadline}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
