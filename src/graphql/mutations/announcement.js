import { AnnouncementTC } from "../../models";

export const createAnnoucement = AnnouncementTC?.getResolver("createOne");
export const updateAnnouncementById = AnnouncementTC?.getResolver("updateById");
export const removeAnnouncementById = AnnouncementTC?.getResolver("removeById");
