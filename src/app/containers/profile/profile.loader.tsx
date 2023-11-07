import { GenericAbortSignal } from "axios";
import { ProfilePage } from "./profile";
import { getProfile } from "../../api/profile";

async function loader({ request: { signal } } : { request: { signal: GenericAbortSignal }}) {
  const profile = getProfile({ signal });

  return {
    profile: await profile
  }
}

export const profileRoute = {
  loader,
  element: <ProfilePage/>
}
