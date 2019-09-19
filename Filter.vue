<template>
	<div class="filter-wrapper">
		<div class="filter-header">
			<span class="title">ФИЛЬТР</span>
			<span class="btn-apply">Применить</span>
			<div class="display-settings">
				<i class="fas fa-th-list" title="В виде списка"></i>
				<i class="fas fa-th-large" title="В виде карточек"></i>
			</div>
		</div>
		<div class="set-parameters">
			<div class="set-parameters-settings">
				<i class="fas fa-sync-alt" title="Сбросить до исходных"></i>
				<i class="fas fa-trash" title="Удалить"></i>
				<i class="fas fa-save" title="Сохранить"></i>
			</div>
		</div>
		<div class="filter"></div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../styles.less';
	
	.filter-wrapper {
		display: flex;
		flex-direction: column;
		width: @filter-wrapper-width;
		border-right: 1px solid @color-grey-4;

		.filter-header {
			display: flex;
			align-items: center;
			height: @header-height;
			background-color: @color-grey-5;
			user-select: none;

			.title {
				margin: 0 15px;
				font-weight: 600;
			}

			// .btn-apply {
			// 	padding: 2px 15px;
			// 	border-radius: 5px;

			// 	&:hover {
			// 		box-shadow: 0 0 1px 1px @color-grey-4;
			// 		cursor: pointer;
			// 	}

			// 	&:active {
			// 		background-color: @color-grey-6;
			// 	}
			// }

			.display-settings {
				display: flex;
				align-items: center;
				margin-left: auto;
				padding: 0 10px;
				color: @color-grey-4;
				font-size: 20px;

				i {
					margin-left: 10px;

					&:hover {
						color: @color-grey-1;
						cursor: pointer;
					}
				}
			}
		}

		.set-parameters {
			display: flex;
			align-items: center;
			height: @header-height;
			background-color: @color-grey-6;
			border-bottom: 1px solid @color-grey-4;
			user-select: none;

			.set-parameters-settings {
				display: flex;
				align-items: center;
				margin-left: auto;
				padding: 0 10px;
				color: @color-grey-4;
				font-size: 16px;

				i {
					margin-left: 10px;

					&:hover {
						color: @color-grey-1;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>