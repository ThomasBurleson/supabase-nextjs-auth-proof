import { Session } from "@supabase/auth-helpers-react";
import { UserProfile } from './user-profile.model'

export Session;


export interface AuthAPI {
    loadProfile: (userId: string) => Promise<UserProfile>;
    saveProfile: (profile: UserProfile) => Promise<boolean>;    
}


export interface AuthState {
    user: UserProfile,
    session: Session
    api?: AuthAPI;
}

export function initAuthState(): AuthState {
    return {
        user: {
            id: '',
        }
    };
}