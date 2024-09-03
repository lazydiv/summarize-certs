


import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { name, title, status, course} = await req.json();
 
        const data = await db.certificate.create({
            data: {
                name,
                title,
                course,
                status,
            }
        })



        return (
            console.log('submiting certificate with love to my haboza '),
            NextResponse.json(data)
        )


    } catch (error) {

        console.log("[submiting certificate with love to my haboza :)]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}



export async function PATCH(req: Request) {
    try {
        const { data, id } = await req.json();

        const cert = await db.certificate.update({

            where: {
                id
            },
            data: {
                name: {
                    set: data.name
                },
                title: {
                    set: data.title
                },
                course: {
                    set: data.course
                }, 
                status: {
                    set: data.status
                }
            }

        })
 


        return NextResponse.json(cert)


    } catch (error) {

        console.log("[updating certificate]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}



export async function DELETE(req: Request) {
  

    try {

        const { id } = await req.json();

        const Certificate = await db.certificate.delete({

            where: {
                id
            },


        })



        return NextResponse.json(Certificate)


    } catch (error) {

        console.log("[deleting certificate]", error)
        return new NextResponse("Internal Server Error", { status: 500 })

    }

}

