"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactDialog } from "@/components/ContactDialog";

export function ContactCard() {
  const [open, setOpen] = useState(false);
  // Contact Schema
  const contactSchema = Yup.object({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    email: Yup.string().required("Invalid email address"),
    phoneNumber: Yup.string().required("Invalid Phone Number"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
    address: Yup.string().required("Address is required"),
    message: Yup.string().required("Message is required"),
  });

  // Contact Default Values
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    address: "",
    message: "",
  };

  // Handle Form submit
  const handleSubmit = (values) => {
    console.log("Form Submitted: ", values);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 pt-24 md:pt-32">
        <Card className="w-[335px] md:w-[564px] md:h-auto border-none">
          <CardHeader>
            <CardTitle className="font-normal text-[40px]">
              Contact us
            </CardTitle>
            <CardDescription className="text-[#5F5E5D] text-md text-[20px]">
              Contact us to find your nearest doctor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={defaultValues}
              validationSchema={contactSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="grid w-full items-center gap-4 font-normal">
                  {/* First And Last Name */}
                  <div className="w-full flex flex-col justify-between gap-4 md:flex-row">
                    <div className="flex flex-col space-y-1.5 w-[319px] pr-4 md:pr-0 md:w-[254px] relative">
                      <Label
                        htmlFor="firstName"
                        className="flex items-center gap-1 text-[16px]"
                      >
                        First Name{" "}
                        <img
                          src="/images/required.png"
                          className="size-[10px]"
                        />
                      </Label>
                      <Field
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className={
                          "p-2 text-sm rounded-xl pr-10 outline-none border border-[#EDECEB]"
                        }
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm absolute top-[67px]"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-[319px] pr-4 md:pr-0 md:w-[254px] relative">
                      <Label
                        htmlFor="lastName"
                        className="flex items-center gap-1 text-[16px]"
                      >
                        Last Name{" "}
                        <img
                          src="/images/required.png"
                          className="size-[10px]"
                        />
                      </Label>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Enter your Last name"
                        className="p-2 text-sm rounded-xl pr-10 outline-none border border-[#EDECEB]"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm absolute top-[67px]"
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex flex-col space-y-1.5 w-[319px] md:w-full pr-4 md:pr-0 relative">
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-1 text-[16px]"
                    >
                      Email Address{" "}
                      <img src="/images/required.png" className="size-[10px]" />
                    </Label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="p-2 text-sm rounded-xl pr-10 outline-none border border-[#EDECEB]"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm absolute top-[67px]"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="flex flex-col space-y-1.5 w-[319px] md:w-full pr-4 md:pr-0 relative">
                    <Label
                      htmlFor="phoneNumber"
                      className="flex items-center gap-1 text-[16px]"
                    >
                      Phone Number{" "}
                      <img src="/images/required.png" className="size-[10px]" />
                    </Label>
                    <Field
                      name="phoneNumber"
                      type="text"
                      placeholder="Enter your phone number"
                      className="p-2 text-sm rounded-xl pr-10 outline-none border border-[#EDECEB]"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-red-500 text-sm absolute top-[67px]"
                    />
                  </div>
                  {/* Country And State */}
                  <div className="w-full flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col space-y-1.5 w-[319px] pr-4 md:pr-0 md:w-[254px]">
                      <Label
                        htmlFor="country"
                        className="flex items-center gap-1 text-[16px]"
                      >
                        Country{" "}
                        <img
                          src="/images/required.png"
                          className="size-[10px]"
                        />
                      </Label>
                      <Select>
                        <SelectTrigger
                          name="country"
                          className="outline-none border border-[#EDECEB] w-full focus:outline-none"
                        >
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="outline-none border border-[#EDECEB]"
                        >
                          <SelectItem value="next">Egypt</SelectItem>
                          <SelectItem value="sveltekit">
                            Saudi Arabia
                          </SelectItem>
                          <SelectItem value="astro">Qatar</SelectItem>
                          <SelectItem value="nuxt">UAE</SelectItem>
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500 text-sm absolute top-[67px]"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-[319px] pr-4 md:pr-0 md:w-[254px]">
                      <Label
                        htmlFor="state"
                        className="flex items-center gap-1 text-[16px]"
                      >
                        State{" "}
                        <img
                          src="/images/required.png"
                          className="size-[10px]"
                        />
                      </Label>
                      <Select>
                        <SelectTrigger
                          name="state"
                          className="outline-none border border-[#EDECEB] w-full focus:outline-none"
                        >
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          className="outline-none border border-[#EDECEB]"
                        >
                          <SelectItem value="next">Cairo</SelectItem>
                          <SelectItem value="sveltekit">Riyadh</SelectItem>
                          <SelectItem value="astro">Doha</SelectItem>
                          <SelectItem value="nuxt">Dubai</SelectItem>
                        </SelectContent>
                      </Select>
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="text-red-500 text-sm absolute top-[67px]"
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex flex-col space-y-1.5 w-[319px] md:w-full pr-4 md:pr-0 relative">
                    <Label htmlFor="address" className="text-[16px]">
                      Address
                    </Label>
                    <Field
                      name="address"
                      type="text"
                      placeholder="Enter your address"
                      className="p-2 text-sm rounded-xl pr-10 outline-none border border-[#EDECEB]"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm absolute top-[67px]"
                    />
                  </div>
                  {/* Message */}
                  <div className="flex flex-col space-y-1.5 w-[319px] md:w-full pr-4 md:pr-0">
                    <Label htmlFor="message" className="text-[16px]">
                      Message
                    </Label>
                    <Textarea
                      name="message"
                      placeholder="Write your message here"
                      className="border border-[#EDECEB]"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm absolute top-[67px]"
                    />
                  </div>
                </div>
              </Form>
            </Formik>
          </CardContent>
        </Card>
        <div className="w-[335px] md:w-[564px] flex justify-end pb-6">
          <Button
            type="submit"
            className="text-white bg-[#262261] text-md rounded-xl w-[124px] md:w-[270px] h-10"
            onClick={() => setOpen(!open)}
          >
            Submit
          </Button>
        </div>
        <ContactDialog isOpen={open} setOpen={setOpen} />
      </div>
    </>
  );
}
