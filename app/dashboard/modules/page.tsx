import { StudentData } from '@/types/studentData'
import { ModuleData } from '@/types/moduleCriteria'
import { useUserStore } from '@/lib/store/user';
import MemberTable from './components/MemberTable';
import SearchMembers from './components/SearchMembers';
import CreateMember from './components/create/CreateMember';



function modules() {
    
  const user = useUserStore.getState().user;

	const isAdmin = user?.user_metadata.role === "admin"
	
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Modules</h1>
			{isAdmin && (<div className="flex gap-2">
				<SearchMembers />
				<CreateMember />
			</div>)}

			<MemberTable/>
		</div>
	);
}

export default modules