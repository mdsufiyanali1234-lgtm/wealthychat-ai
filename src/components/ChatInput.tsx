import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-end">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about your health..."
        disabled={disabled}
        className="min-h-[60px] max-h-[120px] resize-none rounded-xl border-border bg-background"
      />
      <Button
        type="submit"
        disabled={disabled || !message.trim()}
        size="icon"
        className="h-[60px] w-[60px] rounded-xl bg-gradient-to-br from-primary to-primary-light hover:shadow-glow transition-all"
      >
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
};
