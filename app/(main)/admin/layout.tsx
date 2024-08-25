import LeftAdminNav from "@/components/left-admin";



export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    


    return (

        <div className="container flex flex-col">
            <div className="mt-10 inline-flex w-full justify-between ">

                <p className='w-40 p-2 text-2xl border-b-2 border-green-500'>
                    Admin Panel
                </p>
                <LeftAdminNav />

            </div>

            <div className="">

                {children}
            </div>
        </div>

    );
}
