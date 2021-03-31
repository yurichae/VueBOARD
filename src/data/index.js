export default {
    User: [
        {
            user_id: 1, //회원 구분값
            name: "lelana", //회원이름
            created_at: "2021-09-11 11:42:11" //가입날짜 데이터생성일
        },
        {
            user_id: 2,
            name: "아이린",
            created_at: "2021-09-11 11:42:11"
        },
        {
            user_id: 3,
            name: "조이",
            created_at: "2021-09-11 11:42:11"
        }
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: "유리짱",
            context: "최고",
            created_at: "2021-07-12 13:11:42",
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: "하하하하하하하",
            context: "화이팅!",
            created_at: "2021-07-12 13:11:42",
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: "호호호호호호",
            context: "^^",
            created_at: "2021-07-12 13:11:42",
            updated_at: null
        }
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: "생일 축하해요!",
            created_at: "2021-07-19 14:11:11",
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: "주현언니 생일 축하해요!",
            created_at: "2019-03-29 16:11:11",
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 1,
            context: "강의 잘 보고 있습니다 ^^",
            created_at: "2019-03-29 14:11:11",
            updated_at: null
        }
    ],
    SubComment: [
        {
            subcomment_id: 1, //원본댓글 값
            comment_id: 3, //답글 값
            user_id: 1, //작성자 값
            context: "오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!", //내용
            created_at: "2019-03-29 16:22:11", //날짜
            updated_at: null
        }
    ]
};
