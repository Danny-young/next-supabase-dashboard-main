"use client"

import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import React, { useTransition } from 'react'
import { deleteMemberById } from '../../actions'
import { toast } from '@/components/ui/use-toast'

export default function DeleteMember({user_id}:{user_id:string}) {

    const [isPending, startTransition] = useTransition();

    const onSubmit = async () => {

         startTransition(async () => {
           const result = JSON.parse(await deleteMemberById(user_id));
           if(result?.error?.message){
             toast({
                title: "Failed to delete member:",
                   });
            } else {
                toast({
                title: "Member deleted successfully",
                    });
         }

        })
        
    };
   
  return (
    <form action={onSubmit}>
    <Button variant="outline">
    <TrashIcon />
    Delete
</Button>
</form>
  )
}
