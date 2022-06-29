<template>
    <div class="maincard">
        <br>
        
            <div class="calories " v-if="gender == male">Calories to maintain your weight: {{maleCalculate()}}</div>
            <div class="calories " v-if="gender == female">Calories to maintain your weight: {{femaleCalculate()}}</div>
        

        <span class="columns is-r" v-if="gender == male">
            <div class="losefat column is-6">
                CALORIES TO LOSE FAT:
                
                <div class="caloriesleft" v-if="gender == male">Around 0.25kg a week: {{maleCalculate() - 250}}</div>
                <br>
                <div class="caloriesleft" v-if="gender == male">Around 0.5kg a week: {{maleCalculate() - 500}}</div>
                <br>
                <div class="caloriesleft" v-if="gender == male">Around 1kg a week: {{maleCalculate() - 1000}}</div>
            </div>
            <div class="gainfat column is-6">
                CALORIES TO GAIN FAT:
                
                <div class="caloriesright" v-if="gender == male">Around 0.25kg a week: {{maleCalculate() + 250}}</div>
                <br>
                <div class="caloriesright" v-if="gender == male">Around 0.5kg a week: {{maleCalculate() + 500}}</div>
                <br>
                <div class="caloriesright" v-if="gender == male">Around 1kg a week: {{maleCalculate() + 1000}}</div>
            </div>
        </span>
        <span class="columns" v-if="gender == female">
            
            <div class="losefat column is-6" v-if="gender == female">
                CALORIES TO LOSE FAT:
                
                <div class="caloriesleft" v-if="gender == female">Around 0.25kg a week: {{femaleCalculate() - 250}}</div>
                <br>
                <div class="caloriesleft" v-if="gender == female">Around 0.5kg a week: {{femaleCalculate() - 500}}</div>
                <br>
                <div class="caloriesleft" v-if="gender == female">Around 1kg a week: {{femaleCalculate() - 1000}}</div>
            </div>
            <div class="gainfat column is-6">
                CALORIES TO GAIN FAT:
                
                <div class="caloriesright" v-if="gender == female">Around 0.25kg a week: {{femaleCalculate() + 250}}</div>
                <br>
                <div class="caloriesright" v-if="gender == female">Around 0.5kg a week: {{femaleCalculate() + 500}}</div>
                <br>
                <div class="caloriesright" v-if="gender == female">Around 1kg a week: {{femaleCalculate() + 1000}}</div>
            </div>
        </span>
        <h2 class="learnmore">To learn more about nutrition click <router-link to="/Nutrition">here</router-link>.</h2>
    </div>
</template>

<script>

    export default {

        
        props: {
            gender: String,
            age: Number,
            height: Number,
            weight: Number,
            activity: Number,
            showValue: Number
        },
        watch: {
            showValue: function() {
                
                
            }
        },
        data() {
            return {
                male: "male",
                female: "female"
            }
        },
       
        methods: { 
            sayhello() {
                alert("hello");
            },
            calculateCalories() {
            if (gender == male) {
                    this.maleCalculate();
                }
                else if (gender === female) {
                    this.femaleCalculate();
                }
            },
            maleCalculate() {
                return parseInt((((10 * this.weight) + (6.25 * this.height)) - (5 * this.age) + 5) * this.activity);
            },
            femaleCalculate() {
                return parseInt((((10 * this.weight) + (6.25 * this.height)) - (5 * this.age) - 161) * this.activity);
            },
           
        }
    }
    </script>

<style>
    .maincard {
        margin:auto;
        margin-top: 5%;
        width:  max(60%, 300px);
        height: auto;
        background-color: #f4f4f4;
        border: 1px solid #e4e4e4;
        box-shadow: 4px 4px 18px -3px #424242;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-bottom: 30px;
    }
    .caloriesleft {
        margin-top: 10px;
        border-bottom: #00c5cc solid 3px;
        border-left: #00c5cc solid 5px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: min(max(4vw, 10px), 18px);
    }
    .caloriesright {
        margin-top: 10px;
        border-bottom: #00c5cc solid 3px;
        border-left: #00c5cc solid 5px;
        margin-right: 10px;
        margin-left: 10px;
        font-size: min(max(4vw, 10px), 18px);
    }
    .calories {
        border-bottom: #00c5cc solid 3px;
        border-left: #00c5cc solid 5px;
        width: 40%;
        margin:auto;
        margin-bottom:10px;
    }
    .losefat {
        margin-bottom: 3%;
        
    }
    .gainfat {
        margin-bottom: 3%;
    }
    .learnmore {
        margin:auto;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>