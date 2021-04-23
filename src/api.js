/**
 * For API list settings
 */
const url = process.env.VUE_APP_BASE_URL;
const api = {
    users: {
        get:                        ()              => { return url + '/client/users/get' },
    },
    events: {
        qryTypeList:                ()              => { return url + '/client/events/qryTypeList' },
        qryDetail:                  ()              => { return url + '/client/events/qryDetail' },
    },
    projects: {
        qryTypeList:                ()              => { return url + '/client/projects/qryTypeList' },
        qryDetail:                  ()              => { return url + '/client/projects/qryDetail' },
    },
    news: {
        list:                       ()              => { return url + '/client/richtext/listRichText' },
        detail:                     ()              => { return url + '/client/richtext/getRichTextDetail' },
    },
    members: {
        list:                       ()              => { return url + '/client/members/list' },
    },
    column: {
        topic:                      ()              => { return url + '/atom_services/column/topic' },
        topic_type:                 (id)            => { return url + '/atom_services/column/topic/type/' + id },
        detail:                     (id)            => { return url + '/atom_services/column/' + id },
    }
}

export default api;
