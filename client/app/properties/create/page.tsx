'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form'

import Form from '@/components/common/Form';

const CreateProperty = () => {
    const router = useRouter();
    const [propertyImage, setPropertyImage] = useState({name: '', url: ''})
    const [formLoading, setFormLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const handleImageChange = () => {}
  return (
    <Form type="Create" register={register} formLoading={formLoading} handleSubmit={handleSubmit} handleImageChange={handleImageChange} propertyImage={propertyImage} />
  )
}

export default CreateProperty