import { useUserStore } from '@/lib/store/user';
import MemberTable from './components/eligibleMembers';
import CreateMember from './components/create/CreateMember';
import MemberForm from './components/create/CreateForm';



function students() {
    
  const user = useUserStore.getState().user;

	const isAdmin = user?.user_metadata.role === "admin"
	
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Teaching Assistant Application Form</h1>
			{isAdmin && (<div className="flex gap-2">
				{/* <SearchMembers />
				<CreateMember /> */}
			</div>)}

			<MemberForm/>
		</div>
	);
}

export default students