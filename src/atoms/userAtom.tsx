import {atom} from "jotai";
import {IUser} from "../types/User.ts";

export const userAtom = atom<IUser | undefined>(undefined);