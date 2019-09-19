<template>
	<header class="header">
		<img src="@/assets/logo.svg" class="logo">
		<div class="title">
			<h1>Корпоративная Информационная Система по Технологической Эффективности Добычи &laquo;GTM-DB&raquo;</h1>
		</div>
		<nav class="settings">
			<div class="settings-parameter">
				<label>
					<input type="checkbox" class="btn-checkbox">
					<i class="fas fa-moon"></i>
				</label>
			</div>
			<div class="settings-parameter">
				<label>
					<i class="fas fa-envelope"></i>
				</label>
			</div>
			<div class="settings-parameter">
				<label>
					<i class="fas fa-question"></i>
				</label>
			</div>
			<div class="settings-parameter">
				<div class="user-name">
					<span class="name">Пользователь 14 D.O.</span>
					<span class="position">Стажер</span>
				</div>
				<div class="user-photo">
					<i class="fas fa-user"></i>
				</div>
			</div>
		</nav>
	</header>
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

	.header {
		display: flex;
		height: @header-main-height;
		background-color: @color-background-header-main;

		.logo {
			width: @header-main-height;
			height: @header-main-height;
		}

		.title {
			display: flex;
			align-items: center;
			height: @header-main-height;

			h1 {
				margin: 0 20px;
				color: white;
				font-size: 1.2rem;
				letter-spacing: 1px;
				font-weight: 400;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}

		.settings {
			display: flex;
			align-items: center;
			margin-left: auto;
			height: @header-main-height;

			.settings-parameter {
				display: flex;
				align-items: center;
				cursor: pointer;
				color: white;

				label {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0;
					cursor: pointer;
					width: @header-main-height;
					height: @header-main-height;
					font-size: 22px;

					.btn-checkbox {
						display: none;
					}

					.btn-checkbox:checked ~ .fa-moon {
						color: @color-yellow;
					}

					.fa-moon {
						transition: .3s color;
					}
				}

				.user-name {
					display: flex;
					flex-direction: column;
					padding: 0 10px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					user-select: none;
				}

				.user-photo {
					display: flex;
					align-items: center;
					background-color: @color-yellow;
					width: @header-main-height;
					height: @header-main-height;
					padding: 10px;
					font-size: 35px;
				}
			}
		}
	}
</style>