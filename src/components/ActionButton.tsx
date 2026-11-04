import { Button, type ButtonProps } from "@chakra-ui/react";
export function ActionButton({ children, onClick, ...props }: ButtonProps) {
  return (
    <Button className="action-button" onClick={onClick} {...props}>
      {children}
    </Button>
  );
}
