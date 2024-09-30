import { Button } from "@/components/ui/button";
import { link } from "fs";
export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">Hello Clone</p>
      <Button variant={link}>Click Me niga</Button>
    </div>
  );
}
