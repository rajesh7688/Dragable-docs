import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customCss } from "../../assets/DataObj/css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { apiCallNew } from "../../services/apiCallNew";
import { debounce } from "../../utils/debounce";

import z from "zod";

import InputBox from "../ui/InputBox";
import Button from "../ui/Button";
import UseApiCall from "../../services/UseApiCall";

const SignupForm = ({ reference, endpoit }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(0);

  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const formSchema = z.object({
    username: z
      .string()
      .nonempty()
      .min(2, { message: "Username must be at least 2 characters." }),
    email: z.string().nonempty(),
    password: z.string().regex(regex),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data) => {
    console.log(data);
    const res = await apiCallNew(endpoit, "post", data);
    console.log(res);
    if (res.data.status === "success") {
      navigate("/", {
        state: {
          msg: res.data.status,
        },
      });
    } else {
      console.log("something went wrong");
    }
  };

  console.log(searchText);

  // useEffect(() => {
  //   const checkUsername = async () => {
  //     const obj = {
  //       username: searchText,
  //     };

  //     const res = await apiCallNew("matchUser", "post", obj);
  //     console.log(res, "shdjhsjd");
  //   };

  //   checkUsername();
  // }, [searchText]);

  const obj = {
    username: searchText,
  };

  const { response } = UseApiCall(
    "matchUser",
    "post",
    obj
    // searchText === 0 ? "" : searchText
  );

  console.log(searchText, "sss");

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
            setSearchText={setSearchText}
          />
          <span className="text-red-300">{errors?.password?.message}</span>
          <span className="text-green-300">
            {searchText === 0
              ? ""
              : response?.data?.length > 0
              ? "Not Available"
              : "Available"}
          </span>
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
            // type={"password"}d
          />
          <span className="text-red-300">{errors?.password?.message}</span>
        </div>
        <div>
          <Button type={"submit"} text={"Signup"} />
        </div>
      </form>
    </motion.div>
  );
};

export default SignupForm;
