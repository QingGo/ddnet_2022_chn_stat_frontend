
interface UserInfo {
    Name: string,
    total_points_earned: string,
    finish_time_sum_hours: number,
    finish_distinct_map_count: string,
    finish_map_count: string,
    finish_points_total: string,
    finish_race_point: string,
    finish_solo_point: string,
    finish_ddmax_point: string,
    finish_dummy_point: string,
    finish_brutal_point: string,
    finish_insane_point: string,
    finish_novice_point: string,
    finish_moderate_point: string,
    finish_oldschool_point: string,
    finish_fun_point: string,
    finish_race_new_map_count: string,
    finish_solo_new_map_count: string,
    finish_ddmax_new_map_count: string,
    finish_dummy_new_map_count: string,
    finish_brutal_new_map_count: string,
    finish_insane_new_map_count: string,
    finish_novice_new_map_count: string,
    finish_moderate_new_map_count: string,
    finish_oldschool_new_map_count: string,
    finish_fun_new_map_count: string,
    finish_fun_map_count: string,
    finish_race_map_count: string,
    finish_solo_map_count: string,
    finish_ddmax_map_count: string,
    finish_dummy_map_count: string,
    finish_brutal_map_count: string,
    finish_insane_map_count: string,
    finish_novice_map_count: string,
    finish_moderate_map_count: string,
    finish_oldschool_map_count: string,
    most_finished_map_2021: string,
    map_finished_count: string,
    most_finished_map_2021_spend_minues: string,
    day_latest_finish_time: string,
    day_latest_finish_map: string,
    most_finish_hour: string,
    most_finish_hour_count: string,
    most_finish_weekday: string,
    most_finish_weekday_count: string
    days_count_has_records_2021: string,
    player_count_2021: number,
    total_points_earned_rank: number,
    finish_time_sum_hours_rank: number,
    team_count: number,
    teammate_count: number,
    favorite_teammate: string,
    favorite_teammate_team_count: string,
}



async function get_user_info(name: string): Promise<UserInfo> {
    var response = await fetch('/user/' + encodeURIComponent(name), {
        headers: {
            'Accept': 'application/json',
        }
    });
    var user_info_json = await response.json();
    return user_info_json;
}

export default get_user_info;
export type { UserInfo };