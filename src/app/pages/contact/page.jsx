import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <main className="w-[100%] min-h-[100vh] h-[auto] pt-3 lg:pt-0 lg:h-[100vh] flex justify-center items-center py-5">
      <div className=" w-[85%] h-[80%]  lg:h-[80vh] xl:h-[90vh] flex lg:flex-row flex-col bg-offwhite rounded-sm lg:rounded-xl border border-newgold items-center justify-center ">
        <section className="lg:w-[50%]  w-[100%] h-auto flex flex-col items-center justify-evenly lg:border-b-0 py-3  border-newgold ">
          <div className=" w-[80%] flex flex-col">
            <heading className="lg:text-2xl text-[16px] font-medium lg:py-2">
              Address
            </heading>
            <header className="text-[16px] lg:text-[18px] font-medium  py-1 lg:py-2">
              Corporate office
            </header>
            <span className="text-[14px] py-1 lg:py-2">
              Room no. 2, Municipal building no. 3, 71- Morland Road, Mumbai,
              Maharashtra 400 008, India
            </span>
            <span className="text-[14px] py-1 lg:py-2">
              Hose Assembly unit: 67/A , Factory No. 1, Suryaji compound, Tank
              pakhadi Road, Byculla, Mumbai, Maharashtra 400 011, India
            </span>
          </div>
          <div className=" w-[80%] flex flex-col">
            <heading className="lg:text-2xl text-[16px] font-medium lg:py-3">
              Call us
            </heading>
            <span className="text-[14px]">+91 123456789</span>
          </div>
          <div className=" w-[80%] flex flex-col">
            <heading className="lg:text-2xl text-[16px] font-medium lg:py-3">
              Email
            </heading>
            <span className="text-[14px]">crownengineering@gmail.com</span>
          </div>
        </section>
        <section className="lg:w-[50%] w-[90%] h-auto flex flex-col items-center justify-evenly">
          <div className=" w-[90%] flex flex-col  lg:items-start">
            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Name
            </heading>
            <input
              placeholder="Enter your name"
              className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
            />

            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Company Name
            </heading>
            <input
              placeholder="Enter your company name"
              className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
            />

            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Email
            </heading>
            <input
              placeholder="Enter your email"
              className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
            />

            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Contact number
            </heading>
            <input
              placeholder="Enter your contact no"
              type="number"
              maxLength="10"
              className=" lg:w-[70%] w-[100%] p-2 rounded-md border border-newgold focus:outline-none "
            />

            <heading className=" text-[14px] lg:text-[16px] font-medium py-2 lg:py-4">
              Details
            </heading>
            <textarea
              placeholder="Enter your message"
              className="lg:w-[70%] resize-none p-2 h-28 w-[100%] focus:outline-none border border-newgold rounded-md "
            />
            <Button className="my-4 lg:w-[70%] w-[100%]" variant="goldbtn">
              Send message
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
