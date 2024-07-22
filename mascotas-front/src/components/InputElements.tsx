import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FocusEventHandler } from "react"
import { Field } from "formik";

interface Props {
  id: string
  label: string
  type?: string
  name?: string
  disabled?: boolean
  value?: string
  onChange?: (e: ChangeEvent<any>) => void
  onBlur?: any
  error?: string
  placeholder?: string
}

export const TextInput = ({ id, label, disabled, type, name, placeholder, error }: Props) => (
  <div className="grid gap-2">
    <Label className="text-gray-950 text-sm font-bold" htmlFor={id}>{label}</Label>
    <Field
      id={id}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      className='bg-[#eee] py-3 px-8 border-solid border-[#bbb] border-[3px] rounded-lg outline-none'
    />
  </div>
)

export const TextAreaInput = ({ id, label, name, placeholder }: Props) => (
  <div className="grid gap-2">
    <Label className="text-gray-950 text-sm font-bold" htmlFor={id}>{label}</Label>
    <Field
      id={id}
      as="textarea"
      name={name}
      placeholder={placeholder}
      className='bg-[#eee] py-3 px-8 border-solid border-[#bbb] border-[3px] rounded-lg outline-none h-32'
    />
  </div>
)

export const FormInput = ({ id, label, disabled, value, onChange, onBlur, error }: Props) => (
  <div className="grid gap-2">
    <Label className="text-gray-950 text-lg" htmlFor={id}>{label}</Label>
    <Input
      id={id}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`text-xl font-bold ${!disabled ? '' : 'border-none outline-none focus:ring-0'}`}
    />
    {error && <div className="text-red-500">{error}</div>}
  </div>
)

export const FormTextarea = ({
  id,
  label,
  disabled,
  value,
  onChange,
  onBlur,
  error,
}: Props) => (
  <div className="grid gap-2">
    <Label className="text-gray-950 text-lg" htmlFor={id}>{label}</Label>
    <Textarea
      id={id}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div className="text-red-500">{error}</div>}
  </div>
)