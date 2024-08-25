



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
        <div className="container my-28 flex items-center ">

            <Alert className="flex felx-col justify-between">
                <div>

                    <Terminal className="h-9 w-5" />
                    <AlertTitle className="text-2xl font-semibold">Heads up!</AlertTitle>
                    <AlertDescription>
                        {/* write something about a certfication */}
                    
                        <div className="mt-4 text-lg font-bold  ">

                            <p className="text-gray-500">
                                Certificate Holder: <span className="text-green-600 font-medium" >{cert?.name}</span>
                            </p>
                            <p className="text-gray-500">
                                Course: <span className="text-green-600 font-medium">{cert?.course}</span>
                            </p>
                            <p className="text-gray-500">
                                Certificate: <span className="text-green-600 font-medium">{cert?.title}</span>
                            </p>
                        </div>
                        <Badge className="mt-5 text-md bg-green-500 ">{cert?.status}</Badge>
                        <Badge variant={"outline"} className="mt-5 text-md  ml-5">{cert?.createdAt.toDateString()}</Badge>
                    </AlertDescription>
                </div>
                <QrModal />
            </Alert>





        </div>

    )
}

export default certIdPage;