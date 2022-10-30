import { UserProfile } from "./user-profile.model";
import { supabase } from "../saas";

export class UserProvileAPI {
  // loadProfile()
  async loadProfileBy(id: string): Promise<UserProfile> {
    const { data, error, status } = await supabase
      .from("profiles")
      .select(`username, website, avatar_url`)
      .eq("id", id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    return data as UserProfile;
  }

  // UpdateProfile()
  async updateProfile(user: UserProfile): Promise<void> {
    const updated_at = new Date().toISOString();
    const updates = { ...user, updated_at };

    let { error } = await supabase.from("profiles").upsert(updates);
    if (error) throw error;
  }
}
