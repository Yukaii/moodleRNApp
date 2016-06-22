# Moodle React Native

標題取的很玄啦，其實就是個測試。

## Config

把 `config.js.sample` 複製一份成 `config.js`，填入你的 moodle 帳密。然後跑：

```bash
node app.js
```

## 開發

API 文件參照 [RefinedData](http://www.refineddata.com/api/)，以及 [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions)，但在無法手動調試 Debug mode 的情況下，後者資訊實在有點少，預計還是架一個測試用的 moodle server 來玩玩 :satisfied:。

## Example

以下是 wsfunction 執行 `core_webservice_get_site_info` 回傳結果，其中 `functions` 就是我（普通學生身份）可以操弄的 API，其它應該還有教授版、助教版吧。

```js
{ sitename: '【國立臺灣科技大學數位學習平台】',
  username: 'STUDENTNUMBER',
  firstname: 'MY_NAME',
  lastname: 'STUDENTNUMBER@',
  fullname: '',
  lang: 'zh_tw',
  userid: 99999,
  siteurl: 'http://moodle.ntust.edu.tw',
  userpictureurl: 'http://moodle.ntust.edu.tw/pluginfile.php/6808/user/icon/f1',
  functions:
   [ { name: 'core_grades_update_grades', version: '2014111010' },
     { name: 'core_files_get_files', version: '2014111010' },
     { name: 'moodle_user_get_users_by_id', version: '2014111010' },
     { name: 'core_user_get_users_by_id', version: '2014111010' },
     { name: 'moodle_user_get_users_by_courseid',
       version: '2014111010' },
     { name: 'moodle_user_get_course_participants_by_id',
       version: '2014111010' },
     { name: 'core_user_get_course_user_profiles',
       version: '2014111010' },
     { name: 'core_user_add_user_device', version: '2014111010' },
     { name: 'moodle_enrol_get_enrolled_users',
       version: '2014111010' },
     { name: 'core_enrol_get_enrolled_users', version: '2014111010' },
     { name: 'moodle_enrol_get_users_courses',
       version: '2014111010' },
     { name: 'core_enrol_get_users_courses', version: '2014111010' },
     { name: 'core_course_get_contents', version: '2014111010' },
     { name: 'moodle_message_send_instantmessages',
       version: '2014111010' },
     { name: 'core_message_send_instant_messages',
       version: '2014111010' },
     { name: 'core_message_create_contacts', version: '2014111010' },
     { name: 'core_message_delete_contacts', version: '2014111010' },
     { name: 'core_message_block_contacts', version: '2014111010' },
     { name: 'core_message_unblock_contacts', version: '2014111010' },
     { name: 'core_message_get_contacts', version: '2014111010' },
     { name: 'core_message_search_contacts', version: '2014111010' },
     { name: 'moodle_notes_create_notes', version: '2014111010' },
     { name: 'core_notes_create_notes', version: '2014111010' },
     { name: 'moodle_webservice_get_siteinfo',
       version: '2014111010' },
     { name: 'core_webservice_get_site_info', version: '2014111010' },
     { name: 'core_get_component_strings', version: '2014111010' },
     { name: 'core_calendar_get_calendar_events',
       version: '2014111010' },
     { name: 'mod_assign_get_grades', version: '2014111001' },
     { name: 'mod_assign_get_assignments', version: '2014111001' },
     { name: 'mod_assign_get_submissions', version: '2014111001' },
     { name: 'mod_assign_get_user_flags', version: '2014111001' },
     { name: 'mod_assign_set_user_flags', version: '2014111001' },
     { name: 'mod_assign_get_user_mappings', version: '2014111001' },
     { name: 'mod_assign_revert_submissions_to_draft',
       version: '2014111001' },
     { name: 'mod_assign_lock_submissions', version: '2014111001' },
     { name: 'mod_assign_unlock_submissions', version: '2014111001' },
     { name: 'mod_assign_save_submission', version: '2014111001' },
     { name: 'mod_assign_submit_for_grading', version: '2014111001' },
     { name: 'mod_assign_save_grade', version: '2014111001' },
     { name: 'mod_assign_save_user_extensions',
       version: '2014111001' },
     { name: 'mod_assign_reveal_identities', version: '2014111001' },
     { name: 'mod_forum_get_forums_by_courses',
       version: '2014111002' },
     { name: 'mod_forum_get_forum_discussion_posts',
       version: '2014111002' },
     { name: 'message_airnotifier_is_system_configured',
       version: '2014111000' },
     { name: 'message_airnotifier_are_notification_preferences_configured',
       version: '2014111000' },
     { name: 'core_message_get_messages', version: '2014111010' },
     { name: 'mod_forum_get_forum_discussions_paginated',
       version: '2014111002' } ],
  downloadfiles: 1,
  uploadfiles: 1,
  release: '2.8.10 (Build: 20160111)',
  version: '2014111010',
  mobilecssurl: '' }
```
