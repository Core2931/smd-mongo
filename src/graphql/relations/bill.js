import { BillTC, UserTC } from "../../models";
import moment from "moment";
BillTC?.addFields({
    timestamp: {
        type: "String",
        resolve: (source) => moment(source.timestamp).fromNow(),
        projection: { timestamp: 1 },
      },
});

BillTC?.addRelation("owner",{
    resolve: () => UserTC?.getResolver("findOne"),
    prepareArgs: {
        filter: (source) => ({ username: source.ownerName }),
    },
    projection: { ownerName: 1 },

});

