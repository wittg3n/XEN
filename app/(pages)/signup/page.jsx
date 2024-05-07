"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
export default function signUp() {
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("email"));
  return (
    <section className="flex justify-center w-full transition-all duration-300 mt-14 lg:mt-[50px] md:mt-[100px] xl:mt-[150px]">
      <form
        className="transition-all duration-300 grid grid-cols-1 w-[300px] md:w-[500px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-bold font-jura text-3xl my-1 md:pb-[70px] pb-14">
          Sign Up
        </h1>
        <h3 className="my-1 font-jura font-semibold">Username or Email :</h3>
        <Input
          id="email"
          placeholder="example@example.com"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Email is requiered",
            },
          })}
        />
        {errors.email?.message && (
          <p className="transition-all duration-300 text-red font-jura ">
            {errors.email?.message}
          </p>
        )}
        <h3 className="my-1 font-jura font-semibold">Enter Your Password :</h3>
        <Input
          id="password"
          placeholder="type your password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "8 characters or more.",
            },
          })}
        />
        {errors.password?.message && (
          <p className="transition-all duration-300 text-red font-jura ">
            {errors.password?.message}
          </p>
        )}
                <h3 className="my-1 font-jura font-semibold">Confirm Your Password :</h3>
        <Input
          id="confirm_password"
          placeholder="type your password"
          {...register("confirm_password", {
            required: true,
            validate: (val) => {
                if (watch('password') !== val) {
                  return "Your passwords do not match";
                }
              }
          })}
        />
        {errors.confirm_password?.message && (
          <p className="transition-all duration-300 text-red font-jura ">
            {errors.confirm_password?.message}
          </p>
        )}
        <Button className="mt-2">Login</Button>
      </form>
    </section>
  );
}
