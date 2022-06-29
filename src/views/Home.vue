<template >
    <div class="block">
        <div class="messageBlock">
            <h3 class="headingStyle">Calorie Calculator</h3>
                    <p class="paragraphStyle">Welcome! On this page you will get some information about this calculator.
                        On the next page you can calculate your calories according to your needs.
                        The final page contains some basic information about nutrition.
                    </p>
        </div>
        <div class="messageBlock">
            <h4 class="headingStyle">Why should you calculate your calories</h4>
            <p class="paragraphStyle">
                The human body is using calories for energy in every moment. The amount of calories needed is determined by the current activity.
                Activites of a higher intensity burn more calories. Lower intensity equals to less calories.
                It's not easy to determine how much calories we need on a daily basis. Research says that an average adult male needs around 2000Kcal.
                But if we take activity in consideration it all changes. There is a lot more factors, like weight, height, age, sex, etc... 
                To know how much calories we need daily we calculate them using a calculator like this one. 
            </p>
        </div>
        <div class="messageBlock">
            <h4 class="headingStyle">How to use the calculator</h4>
            <p class="paragraphStyle">To use this calculator you first need to get a measuring tape and a scale. Measure your height and weight,
                input your gender, age and activity level. Avoid lying to yourself and input the real values. After that just click the button.
                 This will output your maintanance calories and also some more values you might find usefull. 
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .headingStyle {
        
        margin-bottom: 0px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        float: left;
        font-size: 25px;
        background-color: #e4e4e4;
        width: 100%;
        border-bottom:none;
        
    }
    .paragraphStyle {
        text-align: left;
        background-color: #f4f4f4;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding:5px;
    }
    .block {
        
    }
    .messageBlock {
        margin: 20px;
        border: 1px solid #c4c4c4;
        padding: 0px;
        border-top-left-radius: 21px;
        border-top-right-radius: 21px;

}
</style>