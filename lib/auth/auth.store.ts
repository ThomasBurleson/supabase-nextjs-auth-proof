import { useCallback } from "react";
import { createStore, useStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const profileAPI = new UserProvileAPI();

const store = createStore<AuthState>(
    immer((set) => ({
        ...initAuthState(),
        api: {
            async loadProfile: (userId: string): Promise<UserProfile> => {
                const user = await profileAPI.loadProfileBy(userId);
                set({ user })
            },
            async saveProfile: (user: UserProfile): Promise<boolean> => {
                const saved = await profileAPI.updateProfile(profile);
                if (saved) {
                    set({user})
                }
            }
        }
    })));
)