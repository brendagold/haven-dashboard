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

  const handleSubmit = async (data: FieldValues, e: any) => {
    e.preventDefault()
    if (!propertyImage.name) return alert("Please upload a property image");
    await axios.post(
      "http://localhost:8080/api/v1/properties",
      { ...data, photo: propertyImage.url, email: user?.email })
      router.push('/properties')
  } 
  return (
    <Form
      type="Create"
      register={register}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      handleImageChange={handleImageChange}
      propertyImage={propertyImage}
    />
  );
};

export default CreateProperty;
