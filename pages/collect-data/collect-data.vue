<template>
	<view>
		<button type="default" @click="handleCfy">转录分类</button>
		<button type="default" @click="handleGoods">转录商品</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleCfy() {
				uni.request({
					url: 'https://h5.mcake.com/api/5e90690f0e270d04?cityId=110',
					method: 'GET',
					header: {
						"access-token": "9d2a5eaeb0e606128dc12fb7742ba18c",
						"version": "v1.0"
					},
					success: (res) => {
						// console.log(res);
						let {
							data
						} = res.data
						let batchObj = {
							"requests": []
						}
						data.forEach(item => {
							batchObj.requests.push({
								"method": "POST",
								"path": "/1.1/classes/classify",
								"body": item
							})
						})
						this.$post('/1.1/batch', batchObj) //批量录入分类
					}
				})
			},
			handleGoods() {
				uni.request({
						url: 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=2&bid=6',
						method: 'GET',
						header: {
							"access-token": "9d2a5eaeb0e606128dc12fb7742ba18c",
							"version": "v1.0"
						},
						success: (res) => {
							console.log(res);
							let {
								list
							} = res.data.data
							let batchObj = {
								"requests": []
							}
							list.forEach(item => {
								batchObj.requests.push({
									"method": "POST",
									"path": "/1.1/classes/goods",
									"body": item
								})
							})
							this.$post('/1.1/batch', batchObj) //批量录入分类
						}
					})
				
			}
		},
	}
</script>

<style>

</style>
