<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/Apple6s.jpg" alt="">
            <h1 class="title">苹果Apple</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥8000</span>
                    <span class="old">￥8999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60+件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/honor.jpg" alt="">
            <h1 class="title">荣耀honor</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥6000</span>
                    <span class="old">￥6999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩10+件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/HUAWEI.jpg" alt="">
            <h1 class="title">华为HUAWEI</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥7000</span>
                    <span class="old">￥7999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩30+件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

        .goods-item {
            margin: 4px 0;
            width: 49%;
            border: 1px solid #cccccc;
            box-shadow: 0 0 8px #cccccc;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eeeeee;

                p {
                    margin: 0;
                    padding: 5px;
                }

                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                }
            }
        }
    }
</style>