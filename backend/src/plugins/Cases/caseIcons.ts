import { CaseTypes } from "../../data/CaseTypes";

export const caseIcons: Record<CaseTypes, string> = {
  [CaseTypes.Ban]: "<:case_ban:1026546878805987530>",
  [CaseTypes.Unban]: "<:case_note:1026546968702488716>",
  [CaseTypes.Note]: "<:case_note:742540201368485950>",
  [CaseTypes.Warn]: "<:case_warn:1026547060402552995>",
  [CaseTypes.Kick]: "<:case_kick:1026547174764445767>",
  [CaseTypes.Mute]: "<:case_mute:1026547248743600149>",
  [CaseTypes.Unmute]: "<:case_unmute:1026547261544595486>",
  [CaseTypes.Deleted]: "<:case_deleted:1026547273582260264>",
  [CaseTypes.Softban]: "<:case_softban:1026547312958373900>",
};
