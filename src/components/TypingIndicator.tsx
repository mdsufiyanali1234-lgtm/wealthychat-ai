export const TypingIndicator = () => {
  return (
    <div className="flex w-full mb-4 justify-start">
      <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-card border border-border">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </div>
  );
};
