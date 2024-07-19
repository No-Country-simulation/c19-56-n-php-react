import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, FocusEventHandler } from "react"

interface Props {
  id: string
  label: string
  disabled: boolean
  value: string
  onChange: (e: ChangeEvent<any>) => void
  onBlur: any
  error: string
}

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