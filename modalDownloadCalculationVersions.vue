<template>
	<div class="modal fade" id="modalDownloadCalculationVersions" role="dialog">
	    <div class="modal-dialog" role="document">
	        <div class="modal-content">
	            <div class="modal-header">
	            	<h1>Версии загрузки или расчета</h1>
	            	<button type="button" class="close" data-dismiss="modal">&times;</button>
	            </div>
				<div class="modal-body">
					<div class="add-new-version-wrapper">
						<div class="title">
							<h3>Новая версия загрузки или отчета</h3>
						</div>
						<div class="form-group">
							<label>Наименование</label>
							<input type="text" class="form-control" placeholder="Введите наименование...">
						</div>
						<div class="form-group">
							<label>Организационная единица</label>
							<div class="input-group">
								<select class="form-control">
									<option>test</option>
									<option>test 2</option>
									<option>test 3</option>
								</select>
								<span>
									<i class="fas fa-question"></i>
								</span>
							</div>
						</div>
						<button class="btn-add">Создать</button>
					</div>
				</div>
	        </div>
	    </div>
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

	.modal-content {
		width: 150%;
		right: 25%;

		.modal-header {
			display: flex;
			align-items: center;

			h1 {
				margin: 0;
				font-size: 18px;
			}
		}

		.modal-body {
			padding-top: 5px;

			.table-wrapper {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-column-gap: 5px;
				margin-bottom: 20px;

				.table-content {
					.title {
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 5px 0;
						font-weight: 600;
					}

					.search {
						form {
							position: relative;
							width: 100%;

							input {
								width: 100%;
								height: 30px;
								background-color: @color-grey-6;
								border: 1px solid @color-border-default;
								border-bottom: none;
								border-radius: 5px 5px 0 0;
								padding-left: 10px;
								color: @color-grey-3;
								outline: none;
							}

							span {
								display: flex;
								justify-content: center;
								align-items: center;
								position: absolute; 
								top: 0;
								right: 0px;
								width: 30px;
								height: 30px;
								border-radius: 0 5px 0 0;
								background-color: @color-grey-2;
								color: @color-grey-6;
								cursor: pointer;

								&:active {
									background-color: @color-grey-3;
								}
							}
						}
					}

					.table-container {
						height: 50vh;
						overflow-y: scroll;

						table {
							margin: 0;

							td {
								padding: 2px 10px;
							}
						}
					}
				}
			}

			.add-new-version-wrapper {
				.title {
					padding-bottom: 10px;
					border-bottom: 1px dashed @color-border-default;

					h3 {
						margin: 0;
						font-size: 18px;
					}
				}

				.form-group {
					margin: 10px 0;

					.input-group {
						span {
							display: flex;
							justify-content: center;
							align-items: center;
							padding: 0 12px;
							border: 1px solid @color-border-default;
							border-left: none;
							border-radius: 0 5px 0 0;
							background-color: @color-grey-2;
							color: @color-grey-6;
							cursor: pointer;

							&:active {
								background-color: @color-grey-3;
							}
						}
					}
				}

				.btn-add {
					padding: 5px 5em;
					background-color: @color-grey-2;
					border: 1px solid @color-grey-2;
					border-radius: 10px;
					cursor: pointer;
					font-weight: 600;
					color: @color-grey-6;
					outline: none;

					&:hover {
						background-color: @color-grey-1;
					}

					&:active {
						background-color: @color-grey-3;
					}
				}
			}
		}
	}
</style>