// Кнопки переключения отображения фильтра
$('#listDisplay').on('click', function() {
	filterDisplay(20, 80, 'display-list');
	loadFilterDisplayList(dataFilter);
});

$('#cardDisplay').on('click', function() {
	filterDisplay(50, 50, 'display-cards');
	loadFilterDisplayCards(dataFilter);
});

// Вид отображения фильтра
function filterDisplay(filterWidth, modulesWidth, filterDisplay) {
	$('.filter-wrapper').animate({ width: `${ filterWidth }vw` }, 500);
	$('.modules-wrapper').animate({ width: `${ modulesWidth }vw` }, 500);
	$('.filter').empty();
	$('.filter').attr('class', `filter ${ filterDisplay }`);
}

// Загрузка фильтра в виде списка
function loadFilterDisplayList(dataJson) {
	$.each(dataJson, function(index, value) {
		$('.display-list').append(`
			<div class="filter-parameter">
				<div class="filter-parameter-header">
					test-header
					<i class="fas fa-caret-down"></i>
				</div>
				<div class="filter-parameter-content">
					test
				</div>
			</div>
		`);
	});

	$('.display-list .filter-parameter-header').on('click', function() {
		$(this).siblings('.filter-parameter-content').slideToggle(300);
		if ($(this).children().attr('class') == "fas fa-caret-down") {
			$(this).children().attr('class', 'fas fa-caret-up');
		}
		else {
			$(this).children().attr('class', 'fas fa-caret-down');
		}
	});
}

// Загрузка фильтра в виде карточек
function loadFilterDisplayCards(dataJson) {
	$.each(dataJson, function(index, value) {
		$('.display-cards').append(`
			<div class="filter-parameter">
				<div class="filter-parameter-header">
					${ dataJson[index].header }
					<i class="fas fa-square" style="color: ${ dataJson[index].color }"></i>
				</div>
				<div class="filter-parameter-content">
					test
				</div>
			</div>
		`);
	});
}