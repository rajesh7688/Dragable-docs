import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import { customCss } from "../../assets/DataObj/css";
import { motion } from "framer-motion";
import axios from "axios";

const SignupForm = ({ reference }) => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const formSchema = z.object({
    username: z
      .string()
      .nonempty()
      .min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().nonempty(),
    password: z.string(), //.regex(regex),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const handleRegister = async (data) => {
    try {
      const res = await axios.post("http://localhost:3001/register", data);
      console.log(res, "res");
    } catch (error) {}
  };

  const onSubmit = async (data) => {
    console.log(data);
    await handleRegister(data);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.3 }}
      className={customCss[1].loginCard}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="w-full text-center text-2xl">
          Signup and unlock the notes
        </h2>
        <div className="mt-4">
          <label htmlFor="username">Username</label>
          <InputBox
            form={register("username")}
            label={"Enter Here"}
            type={"text"}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="username">Email</label>
          <InputBox
            form={register("email")}
            label={"Enter Here"}
            type={"email"}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="username">Password</label>
          <InputBox
            form={register("password")}
            label={"Enter Here"}
            // type={"password"}
          />
        </div>
        <div>
          <Button type={"submit"} text={"Signup"} />
        </div>
      </form>
    </motion.div>
  );
};

export default SignupForm;
