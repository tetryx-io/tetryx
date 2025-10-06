let data = {
  finder_table_layout_id: null,
  finder_view_id: "64fab694a6d19300dc2cd332",
  person_titles: [
    "wealth manager",
    "wealth management advisor",
    "wealth planner",
    "wealth advisor",
  ],
  page: 100,
  organization_num_employees_ranges: ["1,10", "11,20"],
  person_locations: ["United States"],
  display_mode: "explorer_mode",
  per_page: 25,
  open_factor_names: ["prospected_by_current_team"],
  num_fetch_result: 27,
  context: "people-index-page",
  show_suggestions: false,
  include_contact_engagement_stats: false,
  include_account_engagement_stats: false,
  ui_finder_random_seed: "phubq4e4lf",
  cacheKey: 1694152674129,
};
let options = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data), // body data type must match "Content-Type" header
};
let url = "https://app.apollo.io/api/v1/mixed_people/search";

const response = await fetch(url, options);
const res_json = await response.json();
console.log(res_json);
