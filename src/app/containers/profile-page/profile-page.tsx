import { useLoaderData } from 'react-router-dom';
import { Profile } from '../../models/profile.model';

export function ProfilePage() {
  const { profile } = useLoaderData() as { profile: Profile };

  console.log(profile)

  return (
  <div>
    Profile Page
  </div>
  )
}
