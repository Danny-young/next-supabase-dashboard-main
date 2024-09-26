import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { LucideIcon, Newspaper } from "lucide-react";
import Image from "next/image";
//import { avatar } from "https://plwxqabxgatpxdfamdxu.supabase.co/storage/v1/object/sign/student/ADS22B00001Y.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdHVkZW50L0FEUzIyQjAwMDAxWS5qcGciLCJpYXQiOjE3MjIyMjc4MTYsImV4cCI6MTcyNTI1MTgxNn0.5XtUErRjAM6B_A4nD1jNp26g_e1aDVd_tMyjOsbvOiw&t=2024-07-29T04%3A36%3A52.882Z"

interface DashboardCardProps {
    avatar: string;
    stu_id: string;
    module: string;
    IdNo: number;
}

const EligibleCard = ({ avatar, stu_id, module, IdNo}: DashboardCardProps) => {
    return (
    // <Card className="bg-slate-100 flex-row dark:bg-slate-800 p-2 pb-0">
    //     <CardContent >
    //         <div className="flex flex-row gap-2 justify-center items-center ">
    //         <div className="w-9 h-9 overflow-hidden rounded-full">
    //         <Image className="object-cover"  width={500} height={500}  src={avatar} alt=""/>
    //         </div>
    //         <div className="">
    //         <h3 className="text-xl text-center mb-4 font-bold text-slate-400
    //         dark:text-slate-200"> { stu_id }</h3>
    //         <h3 className="text-xl font-semibold text-slate-500
    //         dark:text-slate-200"> { module } </h3>
    //         </div>
    //         </div>
    //     </CardContent>

    // </Card>
<Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
        <CardContent className="flex gap-1 items-center justify-center">
            <div className="w-42 h-42 overflow-hidden rounded-full">
            <Image className="rounded-full object-cover sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"  width={100} height={100}  src={avatar} alt=""/>
            </div>
            <div>
            <h3 className="text-xl font-semibold text-slate-500
             dark:text-slate-200"> { IdNo } </h3>
            <h3 className="text-xl font-semibold text-slate-500
             dark:text-slate-200"> { module } </h3>
            <h3 className="text-xl text-center mb-2 font-bold text-slate-400
    /        dark:text-slate-200"> { stu_id }</h3>
             </div>      
           
        </CardContent>

    </Card>
      );
}
 
export default EligibleCard;