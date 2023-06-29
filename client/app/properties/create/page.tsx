"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { useSession} from "next-auth/react";
import axios from "axios";
import Form from "@/components/common/Form";

const CreateProperty = () => {
  const router = useRouter();
  const {data: session} = useSession()
  const user = session?.user
  const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
  const [formLoading, setFormLoading] = useState(false);
  
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
 
 
  const handleImageChange = (file: File) => {
    const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.readAsDataURL(readFile);
      });

    reader(file).then((result: string) =>
      setPropertyImage({ name: file?.name, url: result })
    );

  };

  // const onFinishHandler = async (data: FieldValues) => {
  //   if (!propertyImage.name) return alert("Please upload a property image");

  //   await onFinish({ ...data, photo: propertyImage.url, email: user.email });

  //   navigate("/properties");
  // };

  const onSubmit = async (data: FieldValues, e: any) => {
    // console.log(data)
    // console.log(data.photo[0])
    // const formData = new FormData();
    //     formData.append("files", data.photo[0]);
  //       data = { ...data, photo: data.photo[0].name };
  // formData.append("property", JSON.stringify(data));
    e.preventDefault()
    if (!propertyImage.name) return alert("Please upload a property image");
    await axios.post(
      "http://localhost:8080/api/v1/properties",
      { ...data,photo: propertyImage.url, email: user?.email })
      router.push('/properties')
     
  } 
  return (
    <Form
      type="Create"
      register={register}
      formLoading={formLoading}
      handleSubmit={handleSubmit(onSubmit)}
      handleImageChange={handleImageChange}
      propertyImage={propertyImage} onFinish={function (values: FieldValues): Promise<any> {
        throw new Error("Function not implemented.");
      } } onFinishHandler={function (data: FieldValues): Promise<void> {
        throw new Error("Function not implemented.");
      } }    />
    //handleImageChange={handleImageChange}
  );
};

export default CreateProperty;
