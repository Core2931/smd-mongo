import { SuggestTC } from "../../models";
export const suggests = SuggestTC.getResolver("findMany");
export const suggestById = SuggestTC.getResolver("findById");
