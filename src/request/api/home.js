import {axiosPost, axiosPut} from "../index"

export const getHomeRecommendList = (body={}, header={}) => {
    return axiosPost("/MC1015", {header, body})
};