



import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { db } from "@/lib/db"
import { Terminal } from "lucide-react";
import { redirect } from "next/navigation"
import Image from "next/image";
import { useOrigin } from "@/hooks/use-origin";
import QrModal from "@/components/qr";

interface certIdPageProps {
    params: {
        certId: string;
    }
};
const certIdPage = async (
    {
        params
    }: certIdPageProps
) => {

    const cert = await db.certificate.findFirst({
        where: {
            id: params.certId,
        }
    })

    console.log(cert)
    if (!cert) {
        return (
            <div className="flex  justify-center text-primary mt-14 text-xl font-bold w-full ">NO Certificate found !</div>
        )
    }

    return (
        <div className="container my-28 flex flex-col space-y-10 items-center ">
            <Image src={'https://utfs.io/f/4f406d7d-151d-4e92-9192-e92de15307af-r0grkz.png'} alt="logo" width={200} className="dark:hidden " height={200} />
            <Image src={'https://utfs.io/f/3a3c971f-9026-46f3-b38c-5d3af5b27c1e-g0b6r3.png'} alt="logo" width={200} className="hidden dark:inline" height={200} />

            <Alert className="flex felx-col justify-between border-green-400 dark:border-green-400/40">

                <div className="">

                    <Terminal className="h-9 w-5 inline" />
                    <AlertTitle className="text-2xl font-semibold">Course Certificate </AlertTitle>
                    <AlertDescription>
                        {/* write something about a certfication */}

                        <div className="mt-4 md:text-lg text-sm font-bold  ">

                            <p className="text-gray-500 ">
                                Full name: <span className="text-green-600 font-normal" >{cert?.name}</span>
                            </p>
                            <p className="text-gray-500  md:tracking-normal tracking-tighter">
                                Course: <span className="text-green-600 font-normal">{cert?.course}</span>
                            </p>
                            <p className="text-gray-500">
                                Certificate: <span className="text-green-600 font-normal">{cert?.title}</span>
                            </p>
                        </div>
                        <Badge className={cert?.status.toLowerCase() === 'verified'  ? 'bg-green-500' : 'bg-red-500'}>{cert?.status}</Badge>
                        <Badge variant={"outline"} className="mt-5 text-md  ml-5">{cert?.createdAt.toDateString()}</Badge>
                    </AlertDescription>
                </div>
                <QrModal />

            </Alert>
  





        </div>

    )
}

export default certIdPage;