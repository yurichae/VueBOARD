<template>
    <div>
        <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick"></b-table>
    </div>
</template>

<script>
import data from "@/data";

let items = data.Content.sort((a, b) => {
    return b.content_id - a.content_id;
}); //sort 배열의 요소를 정렬후 반환

export default {
    data() {
        return {
            fields: [
                {
                    key: "content_id",
                    label: "글번호"
                },
                {
                    key: "title",
                    label: "제목"
                },
                {
                    key: "created_at",
                    label: "작성일"
                }
            ],
            items: items
        };
    },
    methods: {
        rowClick(item) {
            this.$router.push({
                path: `/board/detail/${item.content_id}`
            });
        }
    }
};
</script>
