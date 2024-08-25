'use client';

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect } from 'react';
import { useModal } from '@/hooks/use-model-store';
import { useToast } from '../ui/use-toast';
import { Certificate } from 'crypto';
const formSchema = z.object({
    name: z.string().min(1, {
        message: 'channel name is required'
    }).refine(
        name => name !== "general",
        {
            message: "channel name can't be 'general'"
        }
    ),


})



export const CreateCertModal = () => {
    const { isOpen, type, onClose, data } = useModal();
    const router = useRouter();
    const params = useParams()
    const isModelOpen = isOpen && type === 'createCert';


    // const form = useForm(
    //     {
    //         resolver: zodResolver(formSchema),
    //         defaultValues: {
    //             name: '',
    //             type: channelType
    //         }
    //     }
    // );
    const formSchema = z.object({
        name: z.string().min(1, {
            message: "please enter the full name"
        }),
        course: z.string().min(1, {
            message: 'please enter course name'
        }),
        title: z.string().min(1, {
            message: 'please enter certificate name'
        }),
        status: z.string().min(1, {
            message: 'please enter status'
        })
    
    })


    const form = useForm(
        {
            resolver: zodResolver(formSchema),
            defaultValues: {
                name: '',
                course: '',
                title: '',
                status: ''
            }
        }
    );
    const { toast } = useToast() 

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
           
            await axios.post(`/api/cert`, values);
            form.reset();
            router.refresh()
            onClose();
        } catch (error) {


            console.log(error);
        }
    }
    const onCloseModel = () => {
        form.reset()
        onClose()
    }


    return (
        <Dialog open={isModelOpen} onOpenChange={onCloseModel}>
            <DialogContent className=''>
                <DialogHeader>
                    <DialogTitle className='text-green-500 dark:text-yellow-50 text-center text-xl'>Create Certifcate!</DialogTitle>
                </DialogHeader>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                        <div className='space-y-8 '>

                    
                            <FormField
                                control={form.control}
                                name='name'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            Full Name
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter Full Name '
                                                className='bg-foreground/5 w-full dark:text-yellow-50'
                                                {...field}
                                            />
                                            

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='course'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            Course
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter Course name'
                                                className='bg-foreground/5 w-full dark:text-yellow-50'
                                                {...field}
                                            />
                                            

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='title'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            certificate
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter certificate name'
                                                className='bg-foreground/5 w-full dark:text-yellow-50'
                                                {...field}
                                            />
                                            

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='status'


                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className='uppercase text-xm font-bold  dark:text-yellow-50'

                                        >
                                            status
                                        </FormLabel>
                                        <FormControl >
                                            <Input
                                                disabled={isLoading}
                                                placeholder='Enter status '
                                                className='bg-foreground/5 w-full dark:text-yellow-50'
                                                {...field}
                                            />
                                            

                                        </FormControl>
                                        <FormMessage className='text-red-600 absolute text-xs' />
                                    </FormItem>
                                )}
                            />
            
                        </div>
                        <DialogFooter className='py-4'>
                            <Button variant={'default'} className='w-full' disabled={isLoading}>Update </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
