import React from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pre({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  const onClick = () => {
    setCopied(true);
    const content = ref.current?.textContent;
    if (content) {
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <button
        className={cn(
          `absolute top-4 right-4 rounded-md border border-transparent p-2 hover:border-border text-muted-foreground hover:text-foreground`,
          copied && "text-foreground"
        )}
        onClick={onClick}
      >
        {!copied ? <Copy className="h-4 w-4" /> : <Check className="h-4 w-4" />}
      </button>
      <pre
        ref={ref}
        className={cn(
          "border border-border rounded p-4 text-sm overflow-auto bg-background",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
