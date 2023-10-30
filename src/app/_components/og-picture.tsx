import { TimePickerWrapper } from "@/components/time-picker/time-picker-wrapper";

export function OGPicture() {
  return (
    <div className="m-24 flex flex-col gap-8 container max-w-3xl relative mx-auto flex-1 p-4 border border-border backdrop-blur-[2px] rounded-lg">
      <div className="flex flex-col items-center gap-4 text-center mx-auto max-w-2xl m-12">
        <h1 className="text-3xl font-cal">Time Picker</h1>
        <p className="text-muted-foreground text-lg max-w-lg">
          A <code className="font-light">{`<TimePickerInput />`}</code>{" "}
          component built with React and Shadcn UI.
        </p>
        <TimePickerWrapper />
      </div>
    </div>
  );
}
