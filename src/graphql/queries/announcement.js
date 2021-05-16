import { AnnouncementTC } from "../../models";

export const announcements = AnnouncementTC?.getResolver("findMany");
export const announcementByOne = AnnouncementTC?.getResolver("findOne");
export const announcementById = AnnouncementTC?.getResolver("findById");