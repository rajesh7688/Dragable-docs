import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import { customCss } from "../../assets/DataObj/css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ reference }) => {
  const navigate = useNavigate();

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." }),
    password: z.string().regex(regex),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
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
          Login and start making notes
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
          <label htmlFor="username">Password</label>
          <InputBox
            form={register("password")}
            label={"Enter Here"}
            type={"password"}
          />
        </div>
        <div>
          <Button type={"submit"} text={"Login"} navigation={"/home"} />
        </div>
        <div>
          <p>
            Don't have account ?{" "}
            <span
              className="text-blue-400 hover:text-green-800"
              onClick={() => navigate("/signup")}
            >
              Click here.
            </span>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginForm;
