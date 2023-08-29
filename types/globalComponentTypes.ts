export interface GMSSelectInputProps {
  label: string;
  options: string[] | number[];
  value: string | number | readonly string[];
  name: string;
}

export interface GMSInputProps {
  label: string;
  type: string;
  id: string;
  required?: boolean;
}
