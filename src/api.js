/**
 * For API list settings
 */
const url = process.env.VUE_APP_BASE_URL;
const api = {
    users: {
        get:                        ()              => { return url + '/client/users/get' },
        // 修改用户职位、企业
        edit:                       ()              => { return url + '/client/users' },
        // 获取用户开源经历
        experience:                 ()              => { return url + '/client/opensource/experience' },
        experience_edit:            (id)            => { return url + '/client/opensource/experience/' + id },
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
    partner: {
        list:                       ()              => { return url + '/client/jsoncon?jfile=cooperativeLogo' },
    },
    column: {
        list:                       ()              => { return url + '/client/column/column' },
        topic:                      ()              => { return url + '/client/column/topic' },
        topic_edit:                 (id)            => { return url + '/client/column/topic/' + id },
        topic_type:                 (id)            => { return url + '/client/column/topic/type/' + id },
        topic_detail:               (id)            => { return url + '/client/column/topic/' + id },
        topic_remove:               (id)            => { return url + '/client/column/topic/' + id },
        detail:                     (id)            => { return url + '/client/column/column/' + id },
    },
    file: {
        upload:                     ()              => { return url + '/uploads/doc/upload' },
    },
}

export default api;
