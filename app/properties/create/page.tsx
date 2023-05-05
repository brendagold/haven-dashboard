'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form'

import Form from '@/components/common/Form';

const CreateProperty = () => {
    const router = useRouter();
    const [propertyImage, setPropertyImage] = useState({name: '', url: ''})
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <div>CreateProperties</div>
  )
}

export default CreateProperty