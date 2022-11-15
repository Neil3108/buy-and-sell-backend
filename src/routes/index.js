import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";

export default [
    addViewToListingRoute,
    getAllListingsRoute,
    getListingRoute,
    getUserListingRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute
]