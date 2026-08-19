import { fetchAPI } from "@/lib/api";

export async function getMenuList(param) {
  return fetchAPI(`/order/view?${param}`);
}
// export async function getFeatureBikes() {
//   return fetchAPI(`feature-bikes`);
// }
// export async function getPopularBikes() {
//   return fetchAPI(`popular-bikes`);
// }
// export async function getBikeById(id) {
//   return fetchAPI(`bike/${id}`);
// }
// export async function bikePurchaseRequest(data) {
//   return fetchAPI(`bike-purchase-request`, {method: "POST", body:{...data}});
// }