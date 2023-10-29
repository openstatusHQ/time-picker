import { PropsWithChildren, createContext, useState, useContext } from "react";
import { TimePickerType, setDateByType } from "./time-picker-utils";

export type TimePickerContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

export const TimePickerContext = createContext<
  TimePickerContextType | undefined
>(undefined);

export const TimePickerProvider = ({ children }: PropsWithChildren<{}>) => {
  const [date, setDate] = useState(new Date());
  return (
    <TimePickerContext.Provider value={{ date, setDate }}>
      {children}
    </TimePickerContext.Provider>
  );
};

export const useTimePickerContext = () => {
  const context = useContext(TimePickerContext);

  if (!context) {
    throw new Error(
      "useTimePickerContext must be used inside the TimePickerProvider"
    );
  }

  return context;
};
