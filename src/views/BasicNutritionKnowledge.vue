<template>
    <div class="messageBlock">
        <h4 class="headingStyle">Introduction</h4>
        <p class="paragraphStyle">
            Here you will learn some usefull information, backed up by science and experience. First we need to learn what a calorie is:
            A calorie is a unit of measurement. It shows us how much energy we can absorb from some food or liquid. One 
            calorie holds enough energy to heat up a gram of water 1° Celsius. By eating or drinking we intake calories, which are later converted in 
            our body. They get converted accordingly to the macronutrients they hold.
        </p>
    </div>
    <div class="messageBlock">
        <h4 class="headingStyle">What are macronutrients</h4>
            <p class="paragraphStyle">
                There are 3 macronutrients. PROTEINS, CARBOHYDRATES and FATS. Proteins are made up of amino-acids chained together.
                Carbohydrates, or carbs are a source of energy. In the body all of them get converted to glucose which is later distributed through the body.
                Fats are made up of tryglycerides. They are also a source of energy, but they get used up much slower.
            </p>
    </div>
    <div class="contentBlock">
        <h4 class="headingStyle">Macronutrients contain different amount of calories:</h4>
            <p class="paragraphStyler">
                <img src="../assets/macros.png" class="image">
            </p>
    </div>
    <div class="messageBlock">
        <h4 class="headingStyle">What to do to change your body composition</h4>
        <p class="paragraphStyle">
            To gain weight, it's very easy to just say eat more. But there is much more behind that. If you go overboard 
            with calories you will gain tons of fat. That won't benefit you. So you should try to gain between 0.25kg 0.5kg per week.
            When losing weight eating less won't cut it. You also need to track your calories. Losing weight still needs to be a reasonable amount 
            per week. Between 0.25kg and 0.5kg.
        </p>
    </div>
    

</template>

<script>
    export default {
        
    }
</script>

<style>
.contentBlock {
        margin: 20px;
        border: 1px solid #c4c4c4;
        padding: 0px;
        border-radius: 21px;
}
.listelementlight {
    background-color: #e4e4e4;
    font-size: min(max(4vw, 10px), 20px);

}
.listelementdark {
    background-color: #c4c4c4;
    font-size: min(max(4vw, 10px), 20px);
}
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
.image {
    margin:auto;
}
.paragraphStyler {
    text-align: left;
        background-color: #f4f4f4;
        border-radius:20px;
        padding:5px;
}
</style>