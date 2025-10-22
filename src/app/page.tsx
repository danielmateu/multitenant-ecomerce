"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-rose-200 dark:bg-rose-700 space-y-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="themeToggle">
            <Sun />
            {/* Light */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon />
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex flex-col gap-y-4">
        <div className="">
          <Button variant="elevated">Button</Button>
        </div>
        <div className="">
          <Input placeholder="Input field" />
        </div>
        <div className="">
          <Progress value={50} className="w-64" />
        </div>
        <div className="">
          <Textarea placeholder="Textarea field" />
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="checkbox" />
          <Label htmlFor="checkbox" className="ml-2">
            Checkbox
          </Label>
        </div>

      </div>
    </main>
  );
}


