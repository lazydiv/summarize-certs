import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { AlertCircle, ArrowRight, Award, Link } from "lucide-react";
import Image from "next/image";


// ! done admin auth 
// todo: add button to admin to add certficates
// todo: delete and update button to admin table 
// todo: dynamic routing
// todo: work on the ui 
// todo: api routes add , delete, update, get
// todo: add toast to admin panel

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-18 lg:py-22 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Receive Your Certificate
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                we are happy and proud to have you as a part of our community.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Congratulations on your achievement! Your certificate is just a click away.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="inline-flex items-center justify-center bg-green-500">
                <a href="https://www.facebook.com/profile.php?id=61561908061240">

                  Get Your Certificate
                </a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
