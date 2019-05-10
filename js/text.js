//ブラウザで開いたら自動的にスクロールさせる
window.onload = function () {
	autoScroll();
}
//高さの位置を0
var $scrollY = 0;

function autoScroll() {
	var $box = document.getElementById('box');
	$box.scrollTop = ++$scrollY;
	if ($scrollY < $box.scrollHeight - $box.clientHeight) {
		setTimeout("autoScroll()", 10);
	} else {
		$scrollY = 0;
		$box.scrollTop = 0;
		setTimeout("autoScroll()", 10);
	}

}


// scrollHeightは　paddingを含んだ画面上に表示されていないコンテンツを含む高さcilentHeightはpaddingを含んだ高さ
