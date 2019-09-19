<template>
	<div class="module-container">
		<div class="module">
			<div class="module-header">
				<label>
					<input type="checkbox" title="Выбрать все консолидации верхнего уровня">
				</label>
				<div class="display-consolidation">
					<i class="fas fa-th-list"></i>
					<i class="fas fa-table"></i>
				</div>
				<span title="Версия отчетности">Цель ВО:</span>
				<select style="width: 12%; margin: 0 10px">
					<option>test</option>
					<option>test 2</option>
					<option>test 3</option>
				</select>
				<span title="Версия загрузки или расчета">ВЗ/Р:</span>
				<select style="width: 12%; margin: 0 10px">
					<option>test</option>
					<option>test 2</option>
					<option>test 3</option>
				</select>
				<span title="Ретроспективная версия отчетности">РВО:</span>
				<select style="width: 12%; margin: 0 10px">
					<option>test</option>
					<option>test 2</option>
					<option>test 3</option>
				</select>
				<div class="settings">
					<div class="buttons">
						<i class="fas fa-download" title="Загрузить консолидацию из файла/ЕИСИПИМ"></i>
						<i class="fas fa-check-double" title="Включить в существующую/новую консолидацию"></i>
						<i class="fas fa-plus-circle" title="Создать новую консолидацию/консолидацию-папку"></i>
						<i class="fas fa-edit" title="Редактировать название консолидации и флаг включения"></i>
						<i class="fas fa-minus-circle" title="Удалить консолидацию без ее наполнения"></i>
						<i class="fas fa-trash" title="Удалить консолидацию полностью"></i>
						<i class="far fa-list-alt" title="Отобразить окно списка версий загрузки или расчета"></i>
						<i class="fas fa-cog" title="Настроить состав реквизитов"></i>
					</div>
					<div class="indicator">
						<i class="fas fa-circle" title="В работе" style="color: #EF1B1B"></i>
						<i class="fas fa-circle" title="Внимание" style="color: #EED226"></i>
						<i class="fas fa-circle" title="Ошибки ЭЭ" style="color: #F66AB4"></i>
						<i class="fas fa-circle" title="Готов к описанию НО" style="color: #644F00"></i>
						<i class="fas fa-circle" title="Готов" style="color: #1F5C03"></i>
					</div>
				</div>
			</div>
			<div class="module-content"></div>
		</div>
		<div class="module-info-panel"></div>
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
	
	.module-container {
		display: grid;
        grid-template-columns: 3fr 1fr;
        height: @module-container-height;

        .module {
        	.module-header {
        		display: flex;
                flex-flow: row nowrap;
                align-items: center;
                height: @header-height;
                background-color: @color-grey-6;
                border-bottom: 1px solid @color-grey-4;
                user-select: none;

                label {
					display: flex;
					justify-content: center;
					align-items: center;
					height: @header-height;
					margin: 0;
					padding-left: 10px;

					input {
						position: relative;
						width: 20px;
						height: 20px;
						cursor: pointer;
					}
				}
                
                .display-consolidation {
                	display: flex;
					align-items: center;
					padding: 0 10px;
					color: @color-grey-4;
					font-size: 20px;

					i {
						margin-right: 5px;

						&:hover {
							color: @color-grey-1;
							cursor: pointer;
						}
					}
				}

				span {
					font-weight: 600;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.settings {
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					height: @header-height;
					margin-left: auto;
					padding: 0 10px;

					.buttons {
						display: flex;
						flex-flow: row nowrap;
						align-items: center;
						height: @header-height;
						padding: 0 10px;

						i {
							margin-left: 10px;
							font-size: 18px;
							color: @color-grey-4;

							&:hover {
								color: @color-grey-1;
								cursor: pointer;
							}
						}
					}

					.indicator {
						display: flex;
						flex-flow: row nowrap;
						align-items: center;
						padding: 3px 5px;
						border: 1px solid @color-grey-4;
						border-radius: 20px;

						i {
							color: @color-grey-5;
							font-size: 14px;
							margin: 0 2px;
						}
					}
				}
			}

			.module-content {
				
			}
        }

        .module-info-panel {
            border-top: 1px solid @color-grey-4;
            border-left: 1px solid @color-grey-4;
        }
	}
</style>