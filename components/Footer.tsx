"use client";

import toast from "react-hot-toast";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/public/logos";
import { ArrowRightIcon } from "lucide-react";
import { validateEmail } from "@/utils";
import { addresses, listSocials } from "@/data";

export default function Footer() {
  const [email, setEmail] = useState("");

  const submitMail = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && validateEmail(trimmedEmail)) {
      toast.success(
        `Đăng ký nhận bản tin thành công cho email: ${trimmedEmail}!`
      );
      setEmail("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitMail();
    }
  };

  return (
    <footer
      className="flex w-full flex-col items-center justify-center border-t"
      id="contactUs"
    >
      <div className="bg-[url(/assets/footer-background-mobile.png)] lg:bg-[url(/assets/footer-background.png)] flex flex-col lg:flex-row w-screen bg-no-repeat bg-cover lg:bg-center pt-10 pb-[50px] lg:pt-[100px] px-4 lg:px-10 xl:px-20 2xl:px-[230px] lg:pb-[92px]">
        <div className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex flex-col items-center gap-y-[38px] w-full lg:gap-y-10 lg:w-auto">
            <Logo />
            <div className="flex gap-6">
              {listSocials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex hover:shadow-md items-center justify-center hover:scale-110 transition duration-200 hover:opacity-70"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-10 pt-[75px] lg:pt-0 md:items-center">
            <div className="flex flex-col">
              <p className="font-bold text-24 text-white-lightest">Địa chỉ</p>
              <div className="flex flex-col max-w-[395px]">
                {addresses.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-white-lightest mt-5 lg:mt-10 text-14 mb-3 flex gap-x-2",
                      item.isSingleLine ? "items-center" : "items-start"
                    )}
                  >
                    <p className={cn("shrink-0")}>{item.icon}</p>
                    <div className="flex flex-col">
                      {item.content.split("/").map((text, idx) => {
                        return (
                          <span
                            className={
                              idx === item.content.split("/").length - 1
                                ? "text-white-lightest"
                                : "mb-3 text-white-lightest"
                            }
                            key={idx}
                          >
                            {text}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col max-w-[400px] mt-[70px] lg:mt-0 lg:pt-0">
              <p className="font-bold text-24 text-white-lightest">Theo dõi</p>
              <p className="text-white-lightest mt-10 mb-3">
                Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về
                các cập nhật của chúng tôi
              </p>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14
                    bg-transparent
                    ring-transparent
                    focus:ring-0
                    border
                    border-white-lightest
                    pl-4
                    hover:border-white-lightest
                    placeholder:text-white-lightest
                    text-white-lightest
"
                />
                <button
                  onClick={submitMail}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  <ArrowRightIcon color="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-18 h-[86px] w-screen flex items-center justify-center text-white-lightest lg:h-20 bg-black-darkest">
        2017 Copyright. Policy.
      </p>
    </footer>
  );
}
