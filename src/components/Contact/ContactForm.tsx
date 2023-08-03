"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from '@/components/ui/toaster'
import {Button} from "../ButtonAndLink"

const accountFormSchema = z.object({
    firstName: z
        .string()
        .min(1, {message: "Required"})
        .max(30, {message: "Please don't go over 30 characters"}),
    lastName: z 
        .string()
        .min(1, {message: "Required"})
        .max(30, {message: "Please don't go over 30 characters"}),
    email: z
        .string()
        .email({message: "Please use a valid email"}),
    content: z
        .string()
        .min(1, {message: "Write me something :)"})
        .max(300, {message: "Please don't go over 40 characters"})
})

type AccountFormValues = z.infer<typeof accountFormSchema>

const defaultValues: Partial<AccountFormValues> = {
    firstName: "",
    lastName: "",
    email: "",
    content: ""
}

export default function ContactForm() {

    const form = useForm<AccountFormValues>({
        mode:'onChange',
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    })

    async function onSubmit(data: AccountFormValues) {

        try {
            const response = await axios.post('/api/submitForm', data);
            if (response.status === 200) {
                toast({
                    description: 'Your email has been successfully sent.',
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: 'There was a problem with your request',
                description: "Something went wrong and we couldn't send your message, please try again.",
            })
            return
        }
    }

    return (
        <>
            <Form {...form}>
                <form 
                method="POST" 
                onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="flex gap-3">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark dark:text-light">First Name</FormLabel>
                                    <FormControl>
                                        <Input className="form-input" placeholder={'John'} {...field} />
                                    </FormControl>
                                    <FormMessage className=" text-red-500"/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark dark:text-light">Last Name</FormLabel>
                                    <FormControl>
                                        <Input className="form-input" placeholder={'Smith'} {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-500"/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className=" text-dark dark:text-light">Email</FormLabel>
                        <FormControl>
                            <Input autoComplete='username' className="form-input" placeholder={"email@mail.com"} {...field} />
                        </FormControl>
                        <FormMessage className=" text-red-500"/>
                        </FormItem>
                    )}
                    />          
                    <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className=" text-dark dark:text-light">Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Type your message here." {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500"/>
                        </FormItem>
                    )}
                    />     
                    <Button buttonText="Send"/>
                </form>
            </Form>
            <Toaster />
        </>

    )
}