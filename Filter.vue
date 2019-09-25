<div class="filter-wrapper">
	<div class="set-parameters">
		<div class="set-parameters-settings">
			<i class="fas fa-sync-alt" title="Сбросить до исходных"></i>
			<i class="fas fa-trash" title="Удалить"></i>
			<i class="fas fa-save" title="Сохранить"></i>
		</div>
	</div>
	<div class="filter"></div>
</div>

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