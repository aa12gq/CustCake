<template>
	<view>
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image :src="detail.img" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="flex justify-around">
			<view 
				v-for="(item,index) in detail.list" 
				:key="index"
				:class="['text-center padding-sm tab',{active:tabIdx==index}]" 
				@click="tabIdx=index"
			>
				<view class="">{{item.spec}}</view>
				<view class="">{{item.weight}}</view>
				<view class="">{{item.edible}}</view>
			</view>
		</view>
		<view class="padding fs-28 u-border-bottom">
			￥{{detail.list[tabIdx].price}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].ahead}}
			<text class="margin-lr">10cm*20cm</text>
			{{detail.list[tabIdx].edible}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].fittings}}
		</view>
		<view class="flex justify-around fixed padding-tb-sm">
			<button @click="handleAdd({...detail,idx:tabIdx})" class="cu-btn bg-brown lg" type="default">加入购物车</button>
			<button class="cu-btn bg-yellow lg" type="default">立即购买</button>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				tabIdx:0,
				detail:null
			}
		},
		onLoad(){
			uni.getStorage({
				key:'detail',
				success: (res) => {
					console.log(res);
					this.detail = res.data
				}
			})
		},
		methods:{
			...mapMutations({
				'handleAdd':'cart/cartAddMut'
			})
		}
	}
</script>

<style lang="scss">
.banner{
	height: 600upx;
	swiper-item{
		height: 600upx;
	}
	image{
		width: 100%;
		// height: 600upx;
	}
}
.tab{
	&.active{
		border-bottom: 4upx solid #fae456;
	}
}
.cu-btn.lg{
	width: 46%;
}
</style>
