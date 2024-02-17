import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <UserButton
        afterSignOutUrl="/"
      />
      <br></br>
      <ModeToggle />
    </div>
  )
}
