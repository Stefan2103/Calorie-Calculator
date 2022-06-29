<template>
    <div class="values">
        <form>
        <div>
            <label class="label"> Gender</label>
            <br>
            <label class="label" for="gender"> Male 
                <input class="radio" type="radio" name="gender" value="male" v-model="gender">
            </label>
            
            <label class="label" for="gender"> Female 
                <input class="radio" type="radio" name="gender" value="female" v-model="gender">
            </label>
        </div>
        <br>
        <br>
            <label class="label" for="Age">Age</label>
            <input type="text" name="Age" class="input1" v-model="age" required>

            <label class="label" for="Height">Height</label>
            <input type="text" name="Height" class="input1" v-model="height" required>

            <label class="label" for="Weight">Weight</label>
            <input type="text" name="Weight" class="input1" v-model="weight" required>
        
        <div class="activity">
            <label class="label" for="select"> Activity Level</label>
            <br>
            <select name="Activity" class="select is-normal input1" v-model="activity">
                <option value="1.2">No physical activity / Sedentary job</option>
                <option value="1.375">Light exercise / Sports 1-3 times a week</option>
                <option value="1.55">Moderate exercise / Sports 6-7 days a week</option>
                <option value="1.725">Hard exercise daily</option>
                <option value="1.9">Hard exercise 2 times a day / Physical job</option>
            </select>
        </div>
        </form>
        <button class="button" @click="showValue = !showValue" >Calculate your calories</button>
    </div>
    <div class="calculated">
        <transition name="fade">
            <calculatedCaloriesCard v-show="showValue"
                :gender = 'gender' 
                :age = 'age'
                :height = 'height' 
                :weight = 'weight' 
                :activity = 'activity'
                :showValue = "showValue"
                >

                
            </calculatedCaloriesCard>
        </transition>
        
    </div>
</template>

<script>
import calculatedCaloriesCard from '../components/calculatedCaloriesCard.vue'
    
    export default {
    components: {
        calculatedCaloriesCard: calculatedCaloriesCard
    },
        data() {
            return {
            gender: "male",
            age: '25',
            height: '180',
            weight: '65',
            activity: '1.2',
            showValue: false
        }
    },
        methods: {
            
        },
    }
</script>

<style>
    .label {
        float: left;
        font-size:  min(max(4vw, 10px), 18px);
        color: #00c5cc;
        margin-right: 8px;
    }
    .values {
        width:  max(60%, 300px);
        height: min(450px);
        margin: auto;
        border: 1px solid #e4e4e4;
        box-shadow: 4px 4px 18px -3px #424242;
        background-color: #f4f4f4;
        padding: 1vw;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        margin-top: 30px;
    }
    
    .input1 {
        width: 100%;
        height: 40px;
        font-family:righteous;
        font-size: min(max(4vw, 10px), 15px);
        border: none;
        background-color: #f4f4f4;
        border-bottom: 1px solid #e4e4e4;
    }
    .input1:focus {
        outline: none;
        border-bottom: 2px solid #c4c4c4;
        
    }
    .button {
        margin-top: 10px;
        color: #00c5cc;
        font-weight:900;
        font-size: min(max(4vw, 10px), 18px);
        border: 1px solid #e4e4e4;
        background-color: #f4f4f4;
    }
    .button:hover {
        background-color: #c4c4c4;
        color: #00c5cc;
        border:none;
    }
    .button:focus {
         margin-top: 10px;
        color: #00c5cc;
        font-weight:900;
        font-size: min(max(4vw, 10px), 18px);
        border: 1px solid #e4e4e4;
        outline:none;
    }
    .radio {
        margin-right: 5px;
        
    }
    .select:hover {
        cursor:pointer;
    }

    
</style>