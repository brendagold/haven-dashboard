

export interface FormFieldProp {
  title: string,
  labelName: string
}

export interface FormValues {
    title: string,
    description: string,
    propertyType: string,
    location: string,
    price: number | undefined,
}

export interface PropertyCardProps {
  _id: string | number | undefined;
  id: string | number | undefined,
  title: string,
  location: string,
  price: string,
  photo: string,
}

export type Property = {
  _id: string,
  title: string,
  description: string,
  propertyType: string,
  location: string,
  price: string,
  photo: string,
  creator: string,
  __v: number
}