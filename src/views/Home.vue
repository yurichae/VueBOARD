<template>
    <div>
        <h2 class="title">하이{{ title }}!</h2>
        <div class="conBox">
            <input type="text" v-model="input1" />
            <button type="button" class="btn btn-success m-1" @click="getData">Get</button>
            <button type="button" class="btn btn-info" @click="setData">Set</button>
        </div>
        <select name="form" id="" class="form-control" v-model="region" @change="changeRegion">
            <!-- change= 데이터가 바뀌었을때 "" 실행해라 -->

            <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
        </select>

        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <!-- v-if = 조건이 만족되면 엘리먼트를 렌더링해라 불만족시 렌더링안함-->
                <!-- v-show = 조건을 떠나서 무조건 렌더링을 한다 display:none block 같은효과 리소스를 덜 잡아먹음-->
                <td>{{ d.v }}</td>
                <td>{{ d.t }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: "유리",
            title2: "Seoul",
            input1: "입력하세요",
            options: [
                { v: "S", t: "Seoul" },
                { v: "J", t: "Jeju" },
                { v: "B", t: "Busan" }
            ],
            region: "J", //default선택값
            tableShow: true
        };
    },
    watch: {
        input1() {
            console.log(this.input1);
        }, //input1데이터가 변경되는 것을 실시간 모니터링
        title() {
            console.log(this.title);
        }
    },
    methods: {
        getData() {
            alert(this.input1);
        },
        setData() {
            this.input1 = "유리짱"; //이것의 데이터를 ""로 바꿔라
        },
        changeRegion() {
            alert(this.region);
        }
    },
    beforeCreate() {},
    created() {}, //특정 데이터를 db에서 갖고옴
    beforeMount() {},
    mounted() {}, //컴포넌트에 데이터가 로딩됨
    beforeUpdate() {},
    updated() {}, //데이터가 변경될 때
    beforeDestroy() {},
    Destoryed() {}
};
</script>
<style>
.title {
    text-align: center;
    padding: 10px;
    font-weight: 800;
}
.conBox {
    width: 296px;
    margin: 0 auto;
}
</style>
