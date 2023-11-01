import { UserProfile } from "@/comman.types"
import ProfilePage from "@/components/ProfilePage"
import { getUserProjectDetails } from "@/lib/actions"

type Props = {
    params:{
        id:string
    }
}

const UserProfile = async({params}:Props) => {
    const result = await getUserProjectDetails(params.id,100) as {user: UserProfile}

    if(!result?.user){
        return <p className="no-result-text"> Failed to fetch user</p>
    }
  return (
    <ProfilePage user={result?.user}/>
  )
}

export default UserProfile
