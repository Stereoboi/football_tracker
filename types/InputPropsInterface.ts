interface InputComponentProps {
  label: string;
  id: string;
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  error: any;
}

interface TextAreaComponentProps {
  label: string;
  id: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string | undefined;
  error: any;
}

export type { InputComponentProps, TextAreaComponentProps };
