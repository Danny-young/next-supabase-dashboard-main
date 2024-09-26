import { useUserStore } from '@/lib/store/user';
import MemberTable from './components/eligibleMembers';
import ListOfMembers from './components/ListOfMembers';
import CreateMember from './components/create/CreateMember';



function eligible() {
    
  const user = useUserStore.getState().user;

	const isAdmin = user?.user_metadata.role === "admin"
	
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Eligible Students for TA</h1>
			{isAdmin && (<div className="flex gap-2">
				<CreateMember />
				{/* <SearchMembers />
				<CreateMember /> */}
			</div>)}
				
			{/* <MemberTable/> */}
			<ListOfMembers />
		</div>
	);
}

export default eligible