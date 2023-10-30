"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TimePeriodSelect() {
  const date = new Date();
  return (
    <div className="flex h-10 items-center">
      <Select defaultValue={date && date?.getHours() > 12 ? "pm" : "am"}>
        <SelectTrigger className="w-[65px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="am">AM</SelectItem>
          <SelectItem value="pm">PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
