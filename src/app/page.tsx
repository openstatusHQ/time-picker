import { allSnippets } from "contentlayer/generated";
import { Snippet } from "@/components/snippet";
import { TimePickerWrapper } from "@/components/time-picker/time-picker-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/theme/toggle-mode";
import { Github, Globe, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimePicker12HourWrapper } from "@/components/time-picker/time-picker-12hour-wrapper";
import { DateTimePickerForm } from "@/components/time-picker/date-time-picker-form";

const snippets = allSnippets.sort((a, b) => a.order - b.order);

export default function Home() {
  return (
    <main className="flex min-h-screen relative flex-col items-center justify-between p-4 sm:p-16">
      <div className="sm:sticky top-0 flex w-full max-w-3xl mx-auto">
        <div className="sm:absolute sm:top-2 sm:-right-12 gap-2 p-1 flex-1 flex sm:flex-col justify-center items-center">
          <ModeToggle />
          <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
            <a
              href="https://github.com/openstatusHQ/time-picker"
              target="_blank"
            >
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
            <a href="https://twitter.com/openstatusHQ" target="_blank">
              <Twitter />
            </a>
          </Button>
          <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
            <a href="https://openstatus.dev" target="_blank">
              <Globe />
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-8 container max-w-3xl relative mx-auto flex-1 p-4 border border-border backdrop-blur-[2px] rounded-lg">
        <div className="grid gap-4 text-center mx-auto max-w-2xl mt-12">
          <h1 className="text-3xl font-cal">Time Picker</h1>
          <p className="text-muted-foreground">
            A <code>{`<TimePickerInput />`}</code> component built with React
            and Shadcn UI.
          </p>
          <div>
            <DateTimePickerForm />
          </div>
        </div>
        <div className="flex-1 min-h-full flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
            <div className="grid pb-4 md:pb-0 md:pr-4">
              <div className="flex flex-col gap-3 pb-4 border-b border-border">
                <h3 className="text-xl font-cal">Demo</h3>
                <TimePickerWrapper />
                <TimePicker12HourWrapper />
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <ul className="list-disc list-outside ml-5 marker:text-muted-foreground space-y-2 text-sm">
                  <li>No additional library</li>
                  <li>
                    Listens to <code>keydown</code> events
                  </li>
                  <li>Supports arrow navigation</li>
                  <li>Formats date values</li>
                  <li>Optimizes mobile keyboard</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:border-l border-border md:pl-4 md:pt-0 md:border-t-0 border-t pt-4">
              <h3 className="text-xl font-cal">Get Started</h3>
              <ul className="list-decimal list-outside ml-5 marker:text-muted-foreground space-y-2 text-sm">
                <li>
                  Install{" "}
                  <a
                    href="http://ui.shadcn.com/"
                    className="underline hover:no-underline"
                    target="_blank"
                  >
                    shadcn/ui
                  </a>{" "}
                  incl. the{" "}
                  <a
                    href="https://ui.shadcn.com/docs/components/input"
                    className="font-mono underline hover:no-underline"
                    target="_blank"
                  >
                    Input
                  </a>{" "}
                  component (twelve-hour clocks also need the{" "}
                  <a
                    href="https://ui.shadcn.com/docs/components/select"
                    className="font-mono underline hover:no-underline"
                    target="_blank"
                  >
                    Select
                  </a>{" "}
                  component)
                </li>
                <li>
                  Copy & paste{" "}
                  <a
                    href="#time-picker-utils.tsx"
                    className="font-mono underline hover:no-underline"
                  >
                    time-picker-utils.tsx
                  </a>
                </li>
                <li>
                  Copy & paste{" "}
                  <a
                    href="#time-picker-input.tsx"
                    className="font-mono underline hover:no-underline"
                  >
                    time-picker-input.tsx
                  </a>
                </li>
                <li>
                  Define your <code>TimePicker</code> component (e.g.{" "}
                  <a
                    href="#time-picker-demo.tsx"
                    className="font-mono underline hover:no-underline"
                  >
                    time-picker-demo.tsx
                  </a>
                  )
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <h3 className="text-xl font-cal">Snippets</h3>
            <Accordion
              type="single"
              collapsible
              // defaultValue={snippets[0].file}
            >
              {snippets.map((snippet) => (
                <AccordionItem key={snippet.slug} value={snippet.file}>
                  <AccordionTrigger id={snippet.file}>
                    <code>{snippet.file}</code>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Snippet snippet={snippet} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div>
          <p className="text-center text-muted-foreground text-sm">
            Powered by{" "}
            <a
              className="text-foreground underline hover:no-underline"
              href="https://openstatus.dev"
            >
              OpenStatus
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
